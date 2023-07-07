import { Icon, Icons } from '@/components/Icons'
import SignOutButton from '@/components/SignOutButton'
import { authOptions } from '@/lib/auth'
import { getServerSession } from 'next-auth'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { FC, ReactNode } from 'react'
import FriendRequestSidebarOptions from '@/components/FriendRequestSidebarOptions'
import { fetchRedis } from '@/helpers/redis'
import { getFriendsByUserId } from '@/helpers/get-friends-by-user-id'
import SidebarChatList from '@/components/SidebarChatList'
import MobileChatLayout from '@/components/MobileChatLayout'
import { SidebarOption } from '@/types/typings'

interface LayoutProps {
  children: ReactNode
}

export const metadata = {
  title: 'QuickChat | Dashboard',
  description: 'Your dashboard',
}

const sidebarOptions: SidebarOption[] = [
  {
    id: 1,
    name: 'Add friend',
    href: '/dashboard/add',
    Icon: 'UserPlus',
  },
]

const Layout = async ({ children }: LayoutProps) => {
  const session = await getServerSession(authOptions)
  if (!session) notFound()

  const friends = await getFriendsByUserId(session.user.id)
  console.log('friends', friends)

  const unseenRequestCount = (
    (await fetchRedis(
      'smembers',
      `user:${session.user.id}:incoming_friend_requests`
    )) as User[]
  ).length

  return (
    <div className='flex w-full h-screen'>
      <div className='md:hidden'>
        <MobileChatLayout
          friends={friends}
          session={session}
          sidebarOptions={sidebarOptions}
          unseenRequestCount={unseenRequestCount}
        />
      </div>

      <div className='flex-col hidden w-full h-full max-w-xs px-6 overflow-y-auto border-r border-gray-200 md:flex grow gap-y-5'>
        <Link href='/dashboard' className='flex items-center justify-center shrink-0'>
          <Icons.Logo size={200} />
        </Link>

        {friends.length > 0 ? (
          <div className='text-xs font-semibold leading-6 text-gray-400'>
            Your chats
          </div>
        ) : null}

        <nav className='flex flex-col flex-1'>
          <ul role='list' className='flex flex-col flex-1 gap-y-7'>
            <li>
              <SidebarChatList sessionId={session.user.id} friends={friends} />
            </li>
            <li>
              <div className='text-xs font-semibold leading-6 text-gray-400'>
                Overview
              </div>

              <ul role='list' className='mt-2 -mx-2 space-y-1'>
                {sidebarOptions.map((option) => {
                  const Icon = Icons[option.Icon]
                  return (
                    <li key={option.id}>
                      <Link
                        href={option.href}
                        className='flex gap-3 p-2 text-sm font-semibold leading-6 text-gray-700 rounded-md dark:text-white hover:text-secondary-600 hover:bg-gray-50 dark:hover:bg-transparent dark:hover:text-primary-600 group'>
                        <span className='text-gray-400 border-gray-200 group-hover:border-secondary-600 group-hover:text-secondary-600 dark:group-hover:border-primary-600 dark:group-hover:text-primary-600 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border text-[0.625rem] font-medium'>
                          <Icon className='w-4 h-4' />
                        </span>

                        <span className='truncate'>{option.name}</span>
                      </Link>
                    </li>
                  )
                })}

                <li>
                  <FriendRequestSidebarOptions
                    sessionId={session.user.id}
                    initialUnseenRequestCount={unseenRequestCount}
                  />
                </li>
              </ul>
            </li>

            <li className='flex items-center mt-auto -mx-6'>
              <div className='flex items-center flex-1 px-6 py-3 text-sm font-semibold leading-6 text-gray-900 gap-x-4'>
                <div className='relative w-8 h-8'>
                  <Image
                    fill
                    referrerPolicy='no-referrer'
                    className='rounded-full'
                    src={session.user.image || ''}
                    alt='Your profile picture'
                  />
                </div>

                <span className='sr-only'>Your profile</span>
                <div className='flex flex-col'>
                  <span aria-hidden='true' className='dark:text-white'>{session.user.name}</span>
                  <span className='text-xs text-zinc-400' aria-hidden='true'>
                    {session.user.email}
                  </span>
                </div>
              </div>

              <SignOutButton className='h-full aspect-square' />
            </li>
          </ul>
        </nav>
      </div>

      <aside className='w-full max-h-screen py-16 md:py-12'>
        {children}
      </aside>
    </div>
  )
}

export default Layout
'use client'

import { Transition, Dialog } from '@headlessui/react'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { FC, Fragment, useEffect, useState } from 'react'
import { Icons } from './Icons'
import SignOutButton from './SignOutButton'
import Button, { buttonVariants } from './ui/Button'
import FriendRequestSidebarOptions from './FriendRequestSidebarOptions'
import SidebarChatList from './SidebarChatList'
import { Session } from 'next-auth'
import { SidebarOption } from '@/types/typings'
import { usePathname } from 'next/navigation'

interface MobileChatLayoutProps {
  friends: User[]
  session: Session
  sidebarOptions: SidebarOption[]
  unseenRequestCount: number
}

const MobileChatLayout: FC<MobileChatLayoutProps> = ({ friends, session, sidebarOptions, unseenRequestCount }) => {
  const [open, setOpen] = useState<boolean>(false)

  const pathname = usePathname()

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <div className='fixed inset-x-0 top-0 px-4 py-2 border-b bg-zinc-50 border-zinc-200'>
      <div className='flex items-center justify-between w-full'>
        <Link
          href='/dashboard'
          className={buttonVariants({ variant: 'ghost' })}>
          <Icons.LogoAlt size={40} />
        </Link>
        <Button onClick={() => setOpen(true)} className='gap-4'>
          Menu <Menu className='w-6 h-6' />
        </Button>
      </div>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as='div' className='relative z-10' onClose={setOpen}>
          <div className='fixed inset-0' />

          <div className='fixed inset-0 overflow-hidden'>
            <div className='absolute inset-0 overflow-hidden'>
              <div className='fixed inset-y-0 left-0 flex max-w-full pr-10 pointer-events-none'>
                <Transition.Child
                  as={Fragment}
                  enter='transform transition ease-in-out duration-500 sm:duration-700'
                  enterFrom='-translate-x-full'
                  enterTo='translate-x-0'
                  leave='transform transition ease-in-out duration-500 sm:duration-700'
                  leaveFrom='translate-x-0'
                  leaveTo='-translate-x-full'>
                  <Dialog.Panel className='w-screen max-w-md pointer-events-auto'>
                    <div className='flex flex-col h-full py-6 overflow-hidden bg-white shadow-xl'>
                      <div className='px-4 sm:px-6'>
                        <div className='flex items-start justify-between'>
                          <Dialog.Title className='text-base font-semibold leading-6 text-gray-900'>
                            Dashboard
                          </Dialog.Title>
                          <div className='flex items-center ml-3 h-7'>
                            <button
                              type='button'
                              className='text-gray-400 bg-white rounded-md hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                              onClick={() => setOpen(false)}>
                              <span className='sr-only'>Close panel</span>
                              <X className='w-6 h-6' aria-hidden='true' />
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className='relative flex-1 px-4 mt-6 sm:px-6'>
                        {/* Content */}

                        {friends.length > 0 ? (
                          <div className='text-xs font-semibold leading-6 text-gray-400 dark:text-white'>
                            Your chats
                          </div>
                        ) : null}

                        <nav className='flex flex-col flex-1'>
                          <ul
                            role='list'
                            className='flex flex-col flex-1 gap-y-7'>
                            <li>
                              <SidebarChatList
                                friends={friends}
                                sessionId={session.user.id}
                              />
                            </li>

                            <li>
                              <div className='text-xs font-semibold leading-6 text-gray-400 dark:text-white'>
                                Overview
                              </div>
                              <ul role='list' className='mt-2 -mx-2 space-y-1'>
                                {sidebarOptions.map((option) => {
                                  const Icon = Icons[option.Icon]
                                  return (
                                    <li key={option.name}>
                                      <Link
                                        href={option.href}
                                        className='flex p-2 text-sm font-semibold leading-6 text-gray-700 rounded-md hover:text-indigo-600 hover:bg-gray-50 group gap-x-3'>
                                        <span className='text-gray-400 border-gray-200 group-hover:border-indigo-600 group-hover:text-indigo-600 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border text-[0.625rem] font-medium'>
                                          <Icon className='w-4 h-4' />
                                        </span>
                                        <span className='truncate'>
                                          {option.name}
                                        </span>
                                      </Link>
                                    </li>
                                  )
                                })}

                                <li>
                                  <FriendRequestSidebarOptions
                                    initialUnseenRequestCount={
                                      unseenRequestCount
                                    }
                                    sessionId={session.user.id}
                                  />
                                </li>
                              </ul>
                            </li>

                            <li className='flex items-center mt-auto -ml-6'>
                              <div className='flex items-center flex-1 px-6 py-3 text-sm font-semibold leading-6 text-gray-900 gap-x-4'>
                                <div className='relative w-8 h-8 bg-gray-50'>
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
                                  <span aria-hidden='true'>
                                    {session.user.name}
                                  </span>
                                  <span
                                    className='text-xs text-zinc-400'
                                    aria-hidden='true'>
                                    {session.user.email}
                                  </span>
                                </div>
                              </div>

                              <SignOutButton className='h-full aspect-square' />
                            </li>
                          </ul>
                        </nav>

                        {/* content end */}
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  )
}

export default MobileChatLayout
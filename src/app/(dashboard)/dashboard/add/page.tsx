import AddFriendButton from '@/components/AddFriendButton'
import { FC } from 'react'

const page: FC = () => {
  return (
    <main className='px-8 pt-8'>
      <h1 className='mb-8 text-5xl font-bold'>Add a friend</h1>
      <AddFriendButton />
    </main>
  )
}

export default page
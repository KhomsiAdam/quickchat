import { authOptions } from '@/lib/auth'
import { getServerSession } from 'next-auth'

const Page = async ({}) => {
  const session = await getServerSession(authOptions)

  return (
    <div>
      {JSON.stringify(session)}
    </div>
  )
}

export default Page
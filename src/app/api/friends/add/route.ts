import { fetchRedis } from '@/app/helpers/redis'
import { authOptions } from '@/lib/auth'
import { db } from '@/lib/db'
import { addFriendValidator } from '@/lib/validations/add-friend'
import { getServerSession } from 'next-auth'
import { z } from 'zod'

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions)
    if (!session) {
      return new Response('Unauthorized.', { status: 401 })
    }
    const body = await req.json()
    const {email: emailToAdd} = addFriendValidator.parse(body.email)
    // const RESTResponse = await fetch(`${process.env.UPSTASH_REDIS_REST_URL}/get/user:email:${emailToAdd}`, {
    //   headers: {
    //     Authorization: `Bearer ${process.env.UPSTASH_REDIS_REST_TOKEN}`
    //   },
    //   cache: 'no-store',
    // })
    // const data = await RESTResponse.json() as { result: string | null }
    // const idToAdd = data.result
    const idToAdd = await fetchRedis('get', `user:email:${emailToAdd}`) as string

    if (idToAdd === session.user.id) {
      return new Response('You cannot add yourself as a friend.', { status: 400 })
    }
    if (!idToAdd) {
      return new Response('This user does not exist.', { status: 400 })
    }

    const isAlreadyAdded = (await fetchRedis('sismember', `user:${idToAdd}:incoming_friend_request`, session.user.id)) as 0 | 1
    if (isAlreadyAdded) {
      return new Response('This user is already added.', { status: 400 })
    }

    const isAlreadyFriends = (await fetchRedis('sismember', `user:${session.user.id}:friends`, idToAdd)) as 0 | 1
    if (isAlreadyFriends) {
      return new Response('This user is already in your friendlist.', { status: 400 })
    }
    
    db.sadd(`user:${idToAdd}:incoming_friend_request`, session.user.id)
    return new Response('OK')
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response('Invalid request payload', { status: 422 })
    }
    return new Response('Invalid request', { status: 400 })
  }
}
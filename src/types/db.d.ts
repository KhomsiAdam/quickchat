interface User {
  id: string
  name: string
  email: string
  image: string
}

interface Chat {
  id: string
  messages: Message[]
}

interface Message {
  id: string
  senderId: string
  receiverId: string
  text: string
  timestamp: number
}

interface FriendRequest {
  id: string
  senderId: string
  receiverId: string
}
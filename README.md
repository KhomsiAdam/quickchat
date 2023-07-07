<p align="center">
  <img src="https://github.com/KhomsiAdam/create-express-rest-ts/assets/9354045/dd0ae4f3-7558-4a0a-8292-0c897f34ba84" alt="QuickChat, Real Time Chat App"></img>
</p>

Real time chat app build with Next.js 13. The application allows users to engage in instant messaging, after connecting with your Google account you can add friends by e-mail.

You can open two browsers with different accounts to try the application for yourself.

Key Features:
- Real-time messaging.
- User authentication with [NextAuth.js](https://next-auth.js.org/) (Google).
- Users receive real-time notifications for new messages with [Pusher](https://pusher.com/).
- [Redis](https://redis.io/) database on [Upstash](https://upstash.com/).

Getting Started:
1. Clone the repository:
```bash
git clone https://github.com/KhomsiAdam/quickchat
```
2. Install dependencies:
```bash
pnpm install
```
3. Configure the necessary environment variables in `.env.local`.

4. Start the server:
```bash
pnpm dev
```

5. Access the application via your browser at [http://localhost:3000](http://localhost:3000).

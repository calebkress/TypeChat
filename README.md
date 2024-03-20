This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
# TypeChat

A basic TypeScript real-time chat application using Next.js.

## Database Setup
First, head to [Upstash](https://upstash.com/) and create an account, or log into your existing account. You will need to create a Redis database, and then add the database's Rest URL and token to your .env.local file, naming them UPSTASH_REDIS_REST_URL and UPSTASH_REDIS_REST_TOKEN respectively.

## Authentication Setup
Head to the Google Developer Console and create a new token for this application. Then add the client ID and client secret to your .env.local file, naming them GOOGLE_CLIENT_ID and GOOGLE_CLIENT_ID respectively.

In the console, run the following command: 

``` openssl genrsa 2048 ``` 

to create a secure key for your next-auth secret. Copy this key into your .env.local file, naming it NEXTAUTH_SECRET.


## Getting Started

To run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

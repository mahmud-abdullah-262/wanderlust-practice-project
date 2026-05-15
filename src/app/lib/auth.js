import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { jwt } from "better-auth/plugins";
// ekhane error hoye thake, dirrect string dite hobe
const client = new MongoClient(process.env.MONGODB_URI);
const db = client.db("wandarlast-db");
export const auth = betterAuth({
  trustedOrigins: [
    "https://wanderlust-practice-project-ifquwf2ym.vercel.app/"
  ],
  emailAndPassword: { 
    enabled: true, 
  },
  session: {
    cookieCache: {
      enabled: true,
      strategy: 'jwt',
      maxAge: 7 * 24 * 60 * 60,
    }
  },
  plugins: [
    jwt()
  ],
  database: mongodbAdapter(db, {
    // Optional: if you don't provide a client, database transactions won't be enabled.
    client
  }),
});
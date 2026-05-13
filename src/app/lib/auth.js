import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
// ekhane error hoye thake, dirrect string dite hobe
const client = new MongoClient("mongodb+srv://wandarlast-db:tvQhMOClGZUzpYqz@cluster0.ujysbie.mongodb.net/?appName=Cluster0");
const db = client.db("wandarlast-db");
export const auth = betterAuth({
  emailAndPassword: { 
    enabled: true, 
  }, 
  database: mongodbAdapter(db, {
    // Optional: if you don't provide a client, database transactions won't be enabled.
    client
  }),
});
'use server'
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import { auth } from "../lib/auth"
import { authClient } from "../lib/auth-client"
import { headers } from "next/headers"

export const deleteDestination = async (id) => {

const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/destination/${id}`, {  // এখানে ডেপ্লয় লিঙ্ক দিতে হবে
 
  method: 'delete'
})
const data = await res.json()
console.log('after delete', data)
if(data.deletedCount > 0){
  revalidatePath('/destination');
  redirect('/destination')
}

}

export const AddDestination = async (formData) => {

  const destination = Object.fromEntries(formData.entries())
  console.log(destination, 'destination');

  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/destination`, {  // এখানে ডেপ্লয় লিঙ্ক দিতে হবে
   method: 'POST',
   headers: {
    'content-type' : 'application/json'
   },
   body: JSON.stringify(destination)
  });
  const data = await res.json()
  console.log('after post', data);
  redirect('/destination')
}


export const cancelBooking = async (id) => {
const {token} = await auth.api.getToken({
    headers: await headers() // নেক্সত হেডারসথেকে ইম্পোর্ট করতে হবে।
  })
const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/booking/${id}`, {  // এখানে ডেপ্লয় লিঙ্ক দিতে হবে
   headers: {
     'content-type' : 'application/json',
    authorization: `Bearer ${token}`
  },
  method: 'DELETE'
})
const data = await res.json()
console.log('after delete', data)
if(data.deletedCount > 0){
  revalidatePath('/mybookings');
 
}

}
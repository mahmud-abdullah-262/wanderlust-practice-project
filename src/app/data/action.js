'use server'
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export const deleteDestination = async (id) => {

const res = await fetch(`http://localhost:5000/destination/${id}`, {
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

  const res = await fetch('http://localhost:5000/destination', {
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

const res = await fetch(`http://localhost:5000/booking/${id}`, {
  method: 'delete'
})
const data = await res.json()
console.log('after delete', data)
if(data.deletedCount > 0){
  revalidatePath('/mybookings');
 
}

}
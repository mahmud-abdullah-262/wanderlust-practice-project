'use client'

import { DateField, FieldError, Input, Label, TextField } from "@heroui/react";
import { authClient } from "../lib/auth-client";
import { useState } from "react";
import toast from "react-hot-toast";

const BookingCard = ({data}) => {
  // ইউজারের ডাটা নেয়া
   const { data: session, signOut } =  authClient.useSession();
    const user = session?.user;
    console.log(user)

    // নতুন ডেট ডাটা তৈরি করা
    const [departure, setDeparture] = useState(null);
    
    // ডেস্টিনেশনের ডাটা গুলো নিয়ে আসা। ওপরে প্রপস আছে।
   const {_id, destinationName, country, category, price, duration, departureDate, imageUrl, description } = data;
   console.log(departureDate)
   console.log(departure , 'booking page')

  //  বুকিং সাবমিট বাটনে ক্লিক হলে পরে যা হবে
   const handleBooking = async () => {
    // নতুন বুকিং অবজেক্ট তৈরি
    const bookingData = {
      userId : user?.id,
      userImage : user?.image,
      userName : user?.name,
      destinationId : _id,
      duration,
      destinationName,
      category,
      price,
      imageUrl,
      country,
      description: description,
      departure: new Date(departure)
    }

    console.log(bookingData)

    // তৈরি করা ডাটা ডেটাবেজে পাঠানো। ব্যাকেন্ডে আগে এপিআই তৈরি করা হয়েছে
     const res = await fetch('http://localhost:5000/booking', {  // এখানে ডেপ্লয় লিঙ্ক দিতে হবে
   method: 'POST',
   headers: {
    'content-type' : 'application/json'
   },
   body: JSON.stringify(bookingData)
  });
  const data = await res.json()
  
  toast.success(`You Booked Successfully!`)
   }
  return (
     <div className='card shadow'>
           <p className='text-accent'><span className='font-bold text-3xl '>${price}</span>/person</p>
         <TextField onChange={setDeparture} name="departureDate" type="date" isRequired>
                                         <Label>Departure Date</Label>
                                         <Input type="date" className="rounded-2xl" />
                                         <FieldError />
                                       </TextField>
           <button onClick={handleBooking} className='btn btn-accent p-4 w-full'>Book Now</button>
        </div>
  );
};

export default BookingCard;
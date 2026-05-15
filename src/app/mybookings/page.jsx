
import React from 'react';
import DestinationCard from '../components/DestinationCard';
import Bookings from '../components/Bookings';
import { auth } from '../lib/auth';
import { headers } from 'next/headers';

const MyBookingPage = async () => {
    const session = await auth.api.getSession({
    headers: await headers() // you need to pass the headers object.
})
    const user = session?.user;
    // console.log(session, 'session')

    const {token} = await auth.api.getToken({
    headers: await headers() // নেক্সত হেডারসথেকে ইম্পোর্ট করতে হবে।
  })
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/booking/${user?.id}`, {
    
    headers: {
      authorization : `Bearer ${token}`
    }
  })  // এখানে ডেপ্লয় লিঙ্ক দিতে হবে
  const bookings = await res.json()
  console.log(bookings, 'bookings')
  
  return (
    <div className='w-11/12 mx-auto'>
      <h1 className='font-bold text-3xl text-center my-4'>My Bookings</h1>
      <div className='grid grid-cols-1  w-11/12 mx-auto mb-4'>
          {bookings.map(booking => <Bookings key={booking._id} booking={booking}></Bookings> )}
      </div>
    </div>
  );
};

export default MyBookingPage;
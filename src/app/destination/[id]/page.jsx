
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import {ArrowLeftToLine, CalendarXmark, MapPin} from '@gravity-ui/icons';
import { EditModal } from '@/app/components/EditModal';
import { Button, DateField } from '@heroui/react';
import { DeleteModal } from '@/app/components/DeleteModal';
import BookingCard from '@/app/components/BookingCard';
import { auth } from '@/app/lib/auth';
import { headers } from 'next/headers';

const DestinationDetailsPage = async ({params}) => {
  const {id} = await params;
  const {token} = await auth.api.getToken({
    headers: await headers()
  })
  console.log(token)
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/destination/${id}`, {  // এখানে ডেপ্লয় লিঙ্ক দিতে হবে
    headers: {
      authorization : `Bearer ${token}`
    }
  })
  const data = await res.json()

   const {_id, destinationName, country, category, price, duration, departureDate, imageUrl, description } = data;
  return (
    <>
      <div className='flex justify-between w-11/12 mx-auto my-1'>
          <Link href={'/destination'}> <Button className={'flex items-center'}><ArrowLeftToLine/> Go To Destination Page</Button></Link>
          <div className='flex gap-2 items-center'>
              <DeleteModal data={data}></DeleteModal>
             <EditModal data={data}></EditModal>
          </div>
        
        </div>
    <div className="card bg-base-100 h-auto shadow-sm md:w-11/12 lg:w-7/12 mx-auto">
  <figure>
    <Image
      src={imageUrl}
      alt={destinationName}
      width={1920}
      height={1080} 
      className='w-full object-cover object-center'
      />
      
  </figure>
  <div className="card-body">
    <p className='flex gap-2 items-center'><MapPin></MapPin>{country} </p>
    <div className='grid grid-cols-2 gap-4  items-center'>
      <div>
        <h2 className="card-title text-2xl">{destinationName}</h2>
        <p className='flex gap-1 items-center' ><CalendarXmark/> {duration}</p>
         <p className='text-sm'>{description}</p>
      </div>
     
       <BookingCard data={data}/>
       

     
    </div>
    
   
    
  </div>
</div>
    </>
     
  );
};

export default DestinationDetailsPage;
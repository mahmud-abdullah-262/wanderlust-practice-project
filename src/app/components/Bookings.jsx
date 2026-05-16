import Image from 'next/image';
import {CalendarXmark, MapPin, TrashBin} from '@gravity-ui/icons';
import Link from 'next/link';
import { Button } from '@heroui/react';
import { DeleteModal } from './DeleteModal';
import { DeleteBooking } from './DeleteBooking';

const Bookings = ({booking}) => {
  const {_id, destinationName, country, category, price, duration, departure, imageUrl, description } = booking
  return (
    <div className="flex justify-between gap-4 bg-base-100  shadow-xl my-2 rounded-2xl">
  <figure>
    <Image
      src={imageUrl}
      alt={destinationName}
      width={200}
      height={200} 
      className='w-full object-cover object-center'
      />
      
  </figure>
  <div className="flex flex-1 justify-between gap-40 items-start ">
  
    <div className='flex justify-between items-start flex-1 h-full '>
      <div>
          <p className='flex gap-2 items-center'><MapPin></MapPin>{country} </p>
        <h2 className="card-title">{destinationName}</h2>
        <p>Departure: {new Date(departure).toLocaleDateString()}</p>
        <p className='flex gap-1 items-center' ><CalendarXmark/> {duration}</p>
      
      </div>
      <div className=' h-full px-10 flex flex-col gap-4'>
        <DeleteBooking booking={booking}></DeleteBooking>
        <p><span className='font-bold text-3xl'>${price}</span>/person</p>
      </div>
    </div>
    
  
    
  </div>
</div>
  );
};

export default Bookings;
import { Button } from '@heroui/react';
import {ArrowRight} from '@gravity-ui/icons';
import React from 'react';
import DestinationCard from './DestinationCard';
import Link from 'next/link';

const Featured = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/destination`)
  const data = await res.json();
  return (
    <>
     <div className='w-11/12 mx-auto mt-8 mb-4 flex flex-col lg:flex-row justify-between items-center'>
      <div c>
      <h1 className='font-bold text-3xl text-center'>Featured Destinations</h1>
      <p className='text-gray-600 text-center'>Handpicked travel experiences for the adventure seekers</p>
      </div>
      <Link href={'/destination'}>  <Button variant='outline' className={'rounded-none border border-cyan-400 text-cyan-400'}>ALL  DESTINATIONS <ArrowRight></ArrowRight></Button></Link>
      
    </div>
    <div className='grid grid-cols-1 md:grid-cols-3 w-11/12 mx-auto'>
      {data.map(destination => <DestinationCard key={destination.id} destination={destination} ></DestinationCard>)}
    </div>
    
    </>
   

  );
};

export default Featured;
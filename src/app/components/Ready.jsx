import { Button } from '@heroui/react';
import Link from 'next/link';
import React from 'react';
import {ArrowRight} from '@gravity-ui/icons';

const Ready = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-2  bg-[url("/assets/CTA.png")] bg-center bg-cover p-32 relative'>
      <h1 className='text-white font-bold text-3xl text-center z-10'>Ready to Start Your Journey?</h1>
      <p className='text-center text-white text-xs z-10'>Join thousands of travelers who have discovered the world with us</p>
      <Link className='z-10' href={'/destination'}><Button className={'bg-white text-cyan-400 rounded-none p-4 font-bold flex items-center gap-2'}>BOOK YOUR TRIP TODAY <ArrowRight/></Button> </Link>
       <div className="absolute inset-0 bg-black/50 z-0"  />
    </div>
  );
};

export default Ready;
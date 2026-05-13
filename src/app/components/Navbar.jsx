'use client'

import Link from 'next/link';
import React from 'react';

import Image from 'next/image';
import { authClient } from '../lib/auth-client';
import { Button } from '@heroui/react';

const Navbar = () => {
   const { data: session, signOut } =  authClient.useSession();
  const user = session?.user;
  console.log(user, 'user');

  return (
    <div className='w-11/12 mx-auto p-4 flex justify-between items-center'>
      <ul className='flex gap-2'>
        <li><Link href={'/'}>Home</Link></li>
        <li><Link href={'/destination'}>Destinations</Link></li>
        <li><Link href={'/mybookings'}>My Bookings</Link></li>
        <li><Link href={'/add-destination'}>Add Destination</Link></li>
      </ul>
      <Image
      src='/assets/Wanderlast.png'
      width={150}
      height={150}
      alt='logo'
      />
       <ul className='flex gap-2'>
        {user ? 
        <>
        <li><Link href={'/profile'}>Profile</Link></li>
        <Button  onClick={async() => await authClient.signOut()}
    className='
       font-bold'
      
  >
    <Link href={'/login'}>Logout</Link>
  </Button>
        </>
        :  
        <>
        <li><Link href={'/login'}>Login</Link></li>
        <li><Link href={'/signup'}>SignUp</Link></li>
        </>
         
        }
       

       
      </ul>

    </div>
  );
};

export default Navbar;
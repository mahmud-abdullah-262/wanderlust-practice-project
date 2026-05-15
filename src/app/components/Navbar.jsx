'use client'

import Link from 'next/link';
import React from 'react';
import {Bars, EllipsisVertical, Pencil, Person, SquarePlus, TrashBin} from '@gravity-ui/icons';
import Image from 'next/image';
import { authClient } from '../lib/auth-client';
import { Button, Description, Dropdown, Header, Kbd, Label, Separator } from '@heroui/react';

const Navbar = () => {
   const { data: session, signOut } =  authClient.useSession();
  const user = session?.user;
  console.log(user, 'user');

  return (
    <div className='w-11/12 mx-auto p-4 flex justify-between items-center'>
      <Dropdown>
      <Button  className='block md:hidden bg-transparent text-cyan-400' isIconOnly aria-label="Menu">
        <Bars/>
      </Button>
      <Dropdown.Popover>
        <Dropdown.Menu >
          <Dropdown.Section className=' hover:bg-none'>
           
            <Dropdown.Item >
 <Link  href={'/'}>Home</Link>
            </Dropdown.Item>
            <Dropdown.Item >
 <Link href={'/destination'}>Destinations</Link>
            </Dropdown.Item>
            <Dropdown.Item >
 <Link href={'/mybookings'}>My Bookings</Link>
            </Dropdown.Item>
            <Dropdown.Item >
 <Link href={'/add-destination'}>Add Destination</Link>
            </Dropdown.Item>
              
            
            
       
      
       
      
     
               
             
              
                
          </Dropdown.Section>
        </Dropdown.Menu>
      </Dropdown.Popover>
    </Dropdown>
      <ul className='hidden md:flex gap-2'>
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
       <ul className='flex items-center  gap-2'>
        {user ? 
      <>
      <li>{<Image src={user.image} width={50} height={50} alt={user.name} className='rounded-full w-8 h-8 object-center object-cover'/> || <Person></Person>}</li>
       
        <li><Button className={'bg-cyan-400 font-bold'}> <Link href={'/profile'}> Profile</Link></Button></li>
        <Button  onClick={async() => await authClient.signOut()}
    className='
       font-bold bg-cyan-400'
      
  >
    <Link href={'/login'}>Logout</Link>
  </Button>
        </>
        :  
        <>
        <li><Button className={'bg-cyan-400'}><Link href={'/login'}>Login</Link></Button> </li>
        <li><Button className={'bg-cyan-400'}><Link href={'/signup'}>Signup</Link></Button></li>
        </>
         
        }
       

       
      </ul>

    </div>
  );
};

export default Navbar;
'use client'
import { PencilToSquare } from '@gravity-ui/icons';

import Image from 'next/image';
import React, { useState } from 'react'; 
import { toast } from 'react-toastify';
import { useSession } from '../lib/auth-client';

const MyProfilePage = () => {
  const { data: session, refetch } = useSession(); 
  const user = session?.user;

  const [name, setName] = useState(session?.user?.name || "");
  const [image, setImage] = useState(session?.user?.image || "");

  const handleSubmit = async (e) => {
  //   e.preventDefault;
  //   await fetch("/api/update-profile", {
  //     method: "PATCH",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({ name, image }),
  //   });

  //   await refetch();
  //   document.getElementById('my_modal_5').close();
  //   toast.success('Profile edited successfully!')
  };

  return (
    <>
     {user ? 
     <>
     <div className='w-8/12 mx-auto rounded-2xl my-10 glass'>
     <div className='flex items-end gap-2 text-[#c3923c]'>
      <h1 className='text-xl pl-4 mt-4'>My Profile</h1> 
      <PencilToSquare onClick={() => document.getElementById('my_modal_5').showModal()} className='mb-1.5' />
     </div>
      
     <div className='flex flex-col md:flex-row gap-10 items-start justify-start p-4'>
      <div>
      <Image 
        src={user?.image}
        width={500}
        height={500}
        alt={user.name}
        className='w-20 h-20 object-cover object-center rounded-full border-5 border-white'
      />
      </div>

      <div className='flex gap-4 text-xs md:text-md space-y-2'>
        <ul className='space-y-2'>
          <li className='border-b border-gray-400'>Name:</li>
          <li className='border-b border-gray-400'>Email:</li>
          <li className='border-b border-gray-400'>Verified:</li>
        </ul>
        <ul className='space-y-2'>
          <li className='border-b border-gray-400'>{user?.name}</li>
          <li className='border-b border-gray-400'>{user?.email}</li>
          <li className='border-b border-gray-400'>{user?.emailVerified === false ? 'NO' : 'YES'}</li>
        </ul>
      </div>
    </div> 

    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
      <div className="modal-box">
        <div className="modal-action">
          <form method="dialog" className='w-full'>
            <fieldset className="fieldset w-full">
              <label className="label">Name</label>
              <input type="text" className="input w-full" placeholder="New Name" onChange={(e) => setName(e.target.value)} />
              <label className="label">Image URL</label>
              <input type="text" className="input w-full" placeholder="New Image URL" onChange={(e) => setImage(e.target.value)} />
              <button  onClick={handleSubmit} className="btn btn-neutral mt-4">Update</button>
            </fieldset>
          </form>
        </div>
      </div>
    </dialog>
     </div>
     </>
     : 
     
     <div className='flex justify-center items-center w-11/12 mx-auto h-75'>
      <p className='font-bold text-4xl text-gray-200 text-center'>NO User Data</p>
      </div>
    }
    </>
  );
};

export default MyProfilePage;
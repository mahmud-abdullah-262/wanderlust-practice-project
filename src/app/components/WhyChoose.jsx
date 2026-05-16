import Image from 'next/image';
import React from 'react';

const WhyChoose = () => {

  return (
    <div className='bg-cyan-50 my-10 py-10'>
      <div className='w-11/12 my-4 mx-auto'>
      <h1 className='font-bold text-3xl text-center'>Why Choose Wanderlust</h1>
      <p className='text-gray-600 text-center'>Your trusted partner for exceptional travel experiences</p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-3 w-11/12 mx-auto gap-4'>
        <div className='flex flex-col gap-3 p-10 bg-white rounded-xl'>
          <Image 
          src="/assets/ShieldCheck.png"
          width={30}
          height={30}
          alt='shild'
          />
          <h1 className='font-semibold text-2xl'>Safe & Secure</h1>

          <p className='text-gray-600'>Your safety is our priority with comprehensive travel insurance and 24/7 support.</p>
        </div>
        <div className='flex flex-col gap-3 p-10 bg-white rounded-xl'>
          <Image 
          src="/assets/MapTrifold.png"
          width={30}
          height={30}
          alt='map'
          />
          <h1 className='font-semibold text-2xl'>Expert Guides</h1>

          <p className='text-gray-600'>Local experts who bring destinations to life with authentic cultural insights.</p>
        </div>
        <div className='flex flex-col gap-3 p-10 bg-white rounded-xl'>
          <Image 
          src="/assets/Headset.png"
          width={30}
          height={30}
          alt='headset'
          />
          <h1 className='font-semibold text-2xl'>24/7 Support</h1>

          <p className='text-gray-600'>Round-the-clock customer service to assist you wherever your journey takes you.</p>
        </div>
        
      </div>
    </div>
  );
};

export default WhyChoose;
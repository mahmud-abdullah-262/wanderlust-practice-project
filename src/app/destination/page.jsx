import React from 'react';
import DestinationCard from '../components/DestinationCard';

const destinationPage = async () => {
 
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/destination`)  // এখানে ডেপ্লয় লিঙ্ক দিতে হবে
  const data = await res.json()
  console.log(data, 'client side data')
  return (
    <div>
      <h1 className='font-bold text-center my-4 text-3xl'>Explore All Destinations</h1>
      <p className='text-sm text-gray-600 text-center'>Find your perfect travel experience from our curated collection</p>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4 w-11/12 mx-auto'>
          {data.map(destination => <DestinationCard key={destination._id} destination={destination}></DestinationCard>)}
      </div>
    
    </div>
  );
};

export default destinationPage;
import React from 'react';
import DestinationCard from '../components/DestinationCard';

const destinationPage = async () => {
  const res = await fetch('http://localhost:5000/destination')
  const data = await res.json()
  console.log(data, 'client side data')
  return (
    <div>
      <h1 className='font-bold text-center my-4 text-3xl'>All Destinations</h1>
      <div className='grid grid-cols-1 md:grid-cols-3 w-11/12 mx-auto'>
          {data.map(destination => <DestinationCard key={destination._id} destination={destination}></DestinationCard>)}
      </div>
    
    </div>
  );
};

export default destinationPage;
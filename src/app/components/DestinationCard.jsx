import Image from 'next/image';
import {ArrowUpRightFromSquare, CalendarXmark, MapPin} from '@gravity-ui/icons';
import Link from 'next/link';




const DestinationCard = ({destination}) => {
  const {_id, destinationName, country, category, price, duration, departureDate, imageUrl, description } = destination
  return (
    <>
  
    <div className="card bg-base-100  shadow-sm">
  <figure>
    <Image
      src={imageUrl}
      alt={destinationName}
      width={300}
      height={400} 
      className='w-full object-cover object-center'
      />
      
  </figure>
  <div className="card-body">
    <p className='flex gap-2 items-center'><MapPin></MapPin>{country} </p>
    <div className='flex justify-between items-center'>
      <div>
        <h2 className="card-title">{destinationName}</h2>
        <p className='flex gap-1 items-center' ><CalendarXmark/> {duration}</p>
      </div>
      <div>
        <p><span className='font-bold text-xl'>${price}</span>/person</p>
      </div>
    </div>
    
   
    <div className="card-actions">
    <Link className='text-cyan-400 flex gap-1' href={`/destination/${_id}`}> Book Now <ArrowUpRightFromSquare/> </Link>
    </div>
  </div>
</div>
    </>
    
  );
};

export default DestinationCard;
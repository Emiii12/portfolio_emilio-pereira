import Image from 'next/image';
import { MapPinIcon } from '@heroicons/react/24/outline';
import BsAsMap from '@/../public/image/buenos-aires.webp';

const LocationInfo = () => {
  return (
    <div className='space-y-3'>
      <p className='flex items-center justify-center gap-2 text-lightSeaGreen text-lg font-semibold'>
        <MapPinIcon className='size-6' />
        <span className='text-white'>Buenos</span> Aires
      </p>
      <Image src={BsAsMap} alt='Buenos Aires Mapa' className='w-72' />
    </div>
  );
};

export default LocationInfo;
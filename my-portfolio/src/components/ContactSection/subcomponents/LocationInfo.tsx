import Image from 'next/image';
import { MapPinIcon } from '@heroicons/react/24/outline';
import BsAsMap from '@/../public/image/buenos-aires.webp';
import { useTranslation } from 'react-i18next';

const LocationInfo = () => {
  const { t } = useTranslation("contactSection");

  return (
    <div className='space-y-3'>
      <p className='flex items-center justify-center gap-2 text-lightSeaGreen text-lg font-semibold'>
        <MapPinIcon className='size-6' />
        <span className='text-white'>{t("city")}</span>
      </p>
      <Image src={BsAsMap} alt={`${t("city")} Mapa`} className='w-72' />
    </div>
  );
};

export default LocationInfo;

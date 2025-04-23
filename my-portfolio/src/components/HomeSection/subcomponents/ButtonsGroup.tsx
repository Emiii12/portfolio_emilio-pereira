'use client';
import React from 'react';
import { ButtonVariant } from '@/ui/button/ButtonVariant';
import { useTranslation } from 'next-i18next';

const ButtonsGroup = () => {
  const { t } = useTranslation('homeSection');

  return (
    <div className='mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 max-w-[310px] smx:max-w-[480px] md:max-w-[600px] lg:max-w-[490px] mx-auto lg:mx-0'>
      <ButtonVariant variant='primary' as='link' href='#projectSection' className='col-span-2 md:col-span-1 w-full py-2'>
        {t('buttonPrimaryProjects')}
      </ButtonVariant>
      <ButtonVariant variant='secondary' as='link' href='/pdf/emilio-pereira_cv-español.pdf' target='_blank' className='w-full py-2'>
        {t('buttonSecondaryCv')}
      </ButtonVariant>
      <ButtonVariant variant='secondary' as='link' href='#contactSection' className='col-span-1 w-full py-2'>
        {t('buttonSecondaryContact')}
      </ButtonVariant>
    </div>
  );
};

export default ButtonsGroup;

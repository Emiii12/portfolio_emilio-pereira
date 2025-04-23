"use client"
import React from 'react';
import { useTranslation } from "react-i18next";

const Description = () => {
  const { t } = useTranslation("homeSection");

  return (
    <p className='text-white text-xs xs:text-sm sm:text-base lg:text-sm xl:text-base text-center lg:text-start text-balance sm:px-10 lg:px-0'>
      {t("description")}
    </p>
  );
};

export default Description;

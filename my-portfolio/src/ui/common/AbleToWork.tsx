"use client";
import React from 'react';
import { useTranslation } from "react-i18next";

export const AbleToWork = () => {
  const { t } = useTranslation("common");
  return (
    <div className='absolute w-full flex justify-center mt-1'>
			<h1 className='absolute text-lightSeaGreen text-xs text-center uppercase'>{t("openToWork")}</h1>
		</div>
  )
};

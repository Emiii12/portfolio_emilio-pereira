import React from 'react';
import { ButtonVariant } from '@/ui/button/ButtonVariant';

const ButtonsGroup = () => {
  return (
    <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 max-w-[310px] smx:max-w-[480px] md:max-w-[600px] lg:max-w-[490px] mx-auto lg:mx-0">
      <ButtonVariant variant="primary" as="link" href="#projectSection" className="col-span-2 md:col-span-1">
        Proyectos
      </ButtonVariant>
      <ButtonVariant variant="secondary" as="link" href="/pdf/emilio-pereira_cv-español.pdf" target="_blank">
        Ver CV
      </ButtonVariant>
      <ButtonVariant variant="secondary" as="link" href="#contacto" className="col-span-1">
        Contáctame
      </ButtonVariant>
    </div>
  );
};

export default ButtonsGroup;

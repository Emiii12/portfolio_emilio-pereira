'use client';
import React from 'react';
import { useForm } from 'react-hook-form';
import CustomInput from '@/ui/input/CustomInput';
import { FiUser, FiMail } from 'react-icons/fi';
import { ButtonVariant } from '@/ui/button/ButtonVariant';
import CustomTextarea from '@/ui/input/CustomTextArea';
import emailjs from '@emailjs/browser';
import { EmailJSResponseStatus } from '@emailjs/browser';

type FormValues = {
  name: string;
  email: string;
  message: string;
};

const ContactForm: React.FC = () => {
  const { 
    register, 
    handleSubmit,
    reset,
    formState: { errors, isValid, isSubmitting } 
  } = useForm<FormValues>({
    mode: 'onChange',
  });

  const onSubmit = async (data: FormValues) => {
    try {
      const result: EmailJSResponseStatus = await emailjs.send(
        'service_5mzvmss',
        'template_t1pm84k',
        data,
        'rg3AvJgflENkA1kJ5'
      );
      console.log('Mensaje enviado:', result.text);
      alert('Mensaje enviado correctamente!');
      reset();
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error('Error al enviar:', error.message);
        alert('Error: ' + error.message);
      } else {
        console.error('Error desconocido:', error);
        alert('Error desconocido al enviar.');
      }
    }
  };

  return (
    <form className="w-full flex flex-col gap-5 p-5" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col sm:flex-row gap-5">
        <CustomInput
          id="name"
          labelText="Tu Nombre"
          labelClass="text-base text-white"
          inputClass="text-sm"
          placeholder="Ej: Emilio Pereira"
          icon={<FiUser className="text-aquaCyan" />}
          register={register('name', { required: true })}
          error={errors.name}
          errorMessage="El nombre es obligatorio"
        />
        <CustomInput
          id="email"
          labelText="Tu Email"
          labelClass="text-base text-white"
          placeholder="Ej: emilio@ejemplo.com"
          inputClass="text-sm"
          type="email"
          icon={<FiMail className="text-aquaCyan" />}
          register={register('email', { required: true })}
          error={errors.email}
          errorMessage="El email es obligatorio"
        />
      </div>

      <CustomTextarea 
        id="message"
        labelText="Tu mensaje"
        labelClass="text-base text-white"
        placeholder="Escribe tu mensaje acá"
        textareaClass="text-sm min-h-[120px] max-h-[250px]"
        register={register('message', { required: true })}
        error={errors.message}
        errorMessage="El mensaje es obligatorio"
      />

      <div className="sm:flex sm:justify-center">
        <ButtonVariant
          type="submit"
          variant="secondary"
          disabled={!isValid || isSubmitting}
          className="py-2 w-full sm:w-1/2"
        >
          {isSubmitting ? 'Enviando...' : 'Enviar'}
        </ButtonVariant>
      </div>
    </form>
  );
};

export default ContactForm;

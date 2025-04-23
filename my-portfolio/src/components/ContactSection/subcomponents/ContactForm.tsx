'use client';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import CustomInput from '@/ui/input/CustomInput';
import { FiUser, FiMail } from 'react-icons/fi';
import { ButtonVariant } from '@/ui/button/ButtonVariant';
import CustomTextarea from '@/ui/input/CustomTextArea';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { useTranslation } from 'react-i18next';
import { Modal } from '@/ui/modal/Modal';

type FormValues = {
  name: string;
  email: string;
  message: string;
};

const ContactForm: React.FC = () => {
  const { t: tContact } = useTranslation('contactSection');
  const { t: tCommon } = useTranslation('common');

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [modalType, setModalType] = useState<'success' | 'error'>('success');

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
      setModalType('success');
      setModalMessage(tContact('messageModalSuccess'));
      setIsModalOpen(true);
      reset();
    } catch (error: unknown) {
      setModalType('error');
      if (error instanceof Error) {
        setModalMessage(tContact('messageModalError', { error: error.message }));
      } else {
        setModalMessage(tContact('messageModalErrorUnknown'));
      }
      setIsModalOpen(true);
    }
  };

  useEffect(() => {
    if (!isModalOpen) return;
    const timeout = setTimeout(() => {
      setIsModalOpen(false);
    }, modalType === 'success' ? 3000 : 10000);
    return () => clearTimeout(timeout);
  }, [isModalOpen, modalType]);

  return (
    <>
      <form className='w-full flex flex-col gap-5 p-5' onSubmit={handleSubmit(onSubmit)}>
        <div className='flex flex-col sm:flex-row gap-5'>
          <CustomInput
            id='name'
            labelText={tContact('labelInputName')}
            labelClass='text-base text-white'
            inputClass='text-sm'
            placeholder={tContact('placeholderInputName')}
            icon={<FiUser className='text-aquaCyan' />}
            register={register('name', { required: true })}
            error={errors.name}
            errorMessage={tContact('labelInputName') + ' es obligatorio'}
          />
          <CustomInput
            id='email'
            labelText={tContact('labelInputMail')}
            labelClass='text-base text-white'
            placeholder={tContact('placeholderInputEmail')}
            inputClass='text-sm'
            type='email'
            icon={<FiMail className='text-aquaCyan' />}
            register={register('email', { required: true })}
            error={errors.email}
            errorMessage={tContact('labelInputMail') + ' es obligatorio'}
          />
        </div>

        <CustomTextarea
          id='message'
          labelText={tContact('labelInputMessage')}
          labelClass='text-base text-white'
          placeholder={tContact('placeholderInputMessage')}
          textareaClass='text-sm min-h-[120px] max-h-[250px]'
          register={register('message', { required: true })}
          error={errors.message}
          errorMessage={tContact('labelInputMessage') + ' es obligatorio'}
        />

        <div className='sm:flex sm:justify-center'>
          <ButtonVariant
            type='submit'
            variant='secondary'
            disabled={!isValid || isSubmitting}
            className='py-2 w-full sm:w-1/2'
          >
            {isSubmitting
              ? tCommon('loadingButtonVariantContact')
              : tCommon('buttonVariantContactSecondarySend')}
          </ButtonVariant>
        </div>
      </form>

      {isModalOpen && (
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4'>
          <Modal onClose={() => setIsModalOpen(false)}>
            <div className={`text-lg font-semibold p-4 text-sm smx:text-base md:text-lg ${modalType === 'success' ? 'text-green-400' : 'text-red-400'}`}>
              {modalMessage}
            </div>
          </Modal>
        </div>
      )}
    </>
  );
};

export default ContactForm;
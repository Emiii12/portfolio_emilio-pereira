import React from 'react';
import { TitleSection } from '@/ui/common/CommonTexts';
import LocationInfo from './subcomponents/LocationInfo';
import SocialLinks from './subcomponents/SocialLinks';
import ContactForm from './subcomponents/ContactForm';

const ContactSection = () => {
  return (
    <section className='w-full max-w-[820px] lg:max-w-full mx-auto flex flex-col gap-10 mb-20' id='contactSection'>
			<TitleSection text='contacto'/>
			<div className='flex flex-col lg:flex-row justify-center items-center pt-8 gap-7'>
				<div className='order-last lg:order-first w-full lg:w-[60%] space-y-4 lg:space-y-5 bg-charcoalBlue border-4 border-coalBlue rounded-2xl shadow-lg shadow-black'>
					<ContactForm />
				</div>
				<div className='order-first lg:order-last lg:w-[40%] flex flex-col justify-center items-center gap-7'>
					<LocationInfo />
					<SocialLinks />
				</div>
			</div>
		</section>
  )
}

export default ContactSection;
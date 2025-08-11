import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactSchema } from '@/utils/ContactSchema';
import type { ContactFormType } from '@/utils/ContactSchema';
import ContactUsPageGraphic from '@/assets/ContactUsPageGraphic.png';
import TextInput from '../formElements/TextInput';
import Heading from '@/utils/Heading';
import { motion } from 'framer-motion';
import { baseMotion, sliderLeft, sliderRight, slideUp } from '@/utils/MotionPrests';

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm<ContactFormType>({
    resolver: zodResolver(contactSchema),
    mode: 'onTouched',
  });

  const onSubmit = async (data: ContactFormType) => {
    try {
      const response = await fetch('https://formsubmit.co/ajax/isabirbaev@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (result.success === 'true') {
        reset();
      } else {
        console.error('FormSubmit response: ', result);
      }
    } catch (error) {
      console.error('Error submiting form: ', error);
    }
  };

  return (
    <section id="contactus" className="mx-auto w-5/6 pt-24 pb-32">
      <motion.div
        {...baseMotion}
        transition={{ duration: 0.9 }}
        variants={slideUp}
        className="md:w-3/5"
      >
        <Heading>
          <span className="text-primary-500 ">JOIN NOW</span>
          TO GET IN SHAPE
        </Heading>
        <p className="my-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci voluptatibus alias
          tempora quae, impedit obcaecati, blanditiis itaque rerum quos quam, explicabo laudantium
          pariatur? Possimus exercitationem, odit libero optio nemo provident!
        </p>
      </motion.div>
      <div className="mt-10 justify-between gap-8 md:flex">
        <motion.div
          {...baseMotion}
          transition={{ duration: 0.9 }}
          variants={sliderLeft}
          className="mt-10 basis-3/5 md:mt-0"
        >
          <form className="relative z-[2]" onSubmit={handleSubmit(onSubmit)}>
            <TextInput register={register('name')} placeholder="NAME" error={errors.name} />
            <TextInput
              type="email"
              register={register('email')}
              placeholder="EMAIL"
              error={errors.email}
            />
            <TextInput
              className="resize-none"
              type="textarea"
              register={register('message')}
              placeholder="MESSAGE"
              error={errors.message}
            />
            <button
              className="uppercase cursor-pointer mt-5 rounded-lg bg-secondary-500 px-20 py-3 animate hover:text-white"
              type="submit"
            >
              Submit
            </button>
            {isSubmitSuccessful && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-4 text-green-600 text-center font-semibold"
              >
                ✅ Your message submited successful
              </motion.p>
            )}
          </form>
        </motion.div>
        <motion.div
          {...baseMotion}
          transition={{ duration: 0.9 }}
          variants={sliderRight}
          className="mt-10 basis-2/5 md:mt-0"
        >
          <div className="w-full relative before:absolute before:-bottom-20 before:-right-10 before:z-[1] md:before:content-(--content-evolvetext)">
            <img
              className="w-full relative z-[2]"
              src={ContactUsPageGraphic}
              alt="contact-us-page-graphic"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactUs;

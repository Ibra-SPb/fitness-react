import React from 'react';
import ActionButton from '@/utils/ActionButton';
import HomePageText from '@/assets/HomePageText.png';
import HomePageGraphic from '@/assets/HomePageGraphic.png';
import { motion } from 'framer-motion';
import { sponsorImages } from '@/utils/sponsorImages';
import { baseMotion, sliderLeft, sliderRight, slideUp, whithDelay } from '@/utils/MotionPrests';

const Home = () => {
  return (
    <section id="home" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
      <div className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6">
        <div className="z-10 mt-32 md:basis-3/5">
          <motion.div
            {...baseMotion}
            transition={{ duration: 0.5 }}
            variants={sliderLeft}
            className="md:-mt-20"
          >
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-( content--evolvetext)">
                <img src={HomePageText} alt="home-page" />
              </div>
            </div>
            <p className="mt-8 text-sm">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo, ab. Quos iusto magni
              alias illum dolores? Nam cupiditate ea dolorum reiciendis mollitia molestiae iure
              impedit veniam dolores nobis, quia placeat.
            </p>
          </motion.div>
          <motion.div
            {...baseMotion}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={sliderLeft}
            className="mt-8 flex items-center gap-8"
          >
            <ActionButton to="contactus" variant="link">
              Join Now
            </ActionButton>
            <ActionButton
              to="contactus"
              variant="link"
              className="rounded-md px-10 py-2 cursor-pointer animate bg-pink-400   hover:bg-amber-400 hover:text-white"
            >
              Learn More
            </ActionButton>
          </motion.div>
        </div>
        <motion.div
          {...baseMotion}
          transition={{ duration: 0.5 }}
          variants={sliderRight}
          className="flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16"
        >
          <img src={HomePageGraphic} alt="page-graphic" />
        </motion.div>
      </div>
      <div className="h-[150] w-full py-10 bg-amber-100">
        <div className="mx-auto w-5/6 flex items-center justify-between gap-8">
          {sponsorImages.map((image, index) => (
            <motion.div
              key={index}
              {...baseMotion}
              variants={slideUp}
              transition={whithDelay(index)}
            >
              <img src={image.src} alt={image.alt} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;

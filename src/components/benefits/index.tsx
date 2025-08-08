import { motion } from 'framer-motion';
import Benefit from './Benefit';
import ActionButton from '@/utils/ActionButton';
import Heading from '@/utils/Heading';
import { benefits } from '@/utils/BenefitsData';
import BenefitsPageGraphic from '@/assets/BenefitsPageGraphic.png';
import { baseMotion, sliderLeft, sliderRight } from '@/utils/MotionPrests';

const Benefits = () => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        {...baseMotion}
        transition={{ duration: 0.9 }}
        variants={sliderLeft}
        className="md:my-5 md:w-3/5"
      >
        <Heading>MORE THEN JUST GYM.</Heading>
        <p className="py-5 text-sm">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, unde dolor. Aut,
          asperiores laborum. Cumque necessitatibus, tempora ex earum impedit mollitia corporis
          dicta rem voluptas illum animi. Ipsum, beatae deleniti!
        </p>
      </motion.div>
      <motion.div className="mt-5 items-center justify-between gap-8 md:flex">
        {benefits.map((benefit, index) => (
          <Benefit key={benefit.title} {...benefit} index={index} />
        ))}
      </motion.div>
      <motion.div className="mt-16 md:mt-28 md:flex items-center justify-between gap-20">
        <motion.div
          {...baseMotion}
          transition={{ duration: 0.9 }}
          variants={sliderLeft}
          className="flex-1"
        >
          <img className="mx-auto" src={BenefitsPageGraphic} alt="Benefits Page Graphic" />
        </motion.div>
        <motion.div
          {...baseMotion}
          transition={{ duration: 0.9 }}
          variants={sliderRight}
          className="flex-1 relative"
        >
          <div className="before:absolute before:-left-20 hidden md:block before:-top-20 before:z-[1] before:content-(--content-abstractwaves)">
            <Heading>
              MILLIONS OF HAPPY MEMBERS GETTING
              <span className="text-primary-500">FIT</span>
            </Heading>
          </div>
          <div>
            <p className="my-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate in omnis
              blanditiis ut consequatur, est quae necessitatibus, placeat repudiandae aperiam
              quaerat excepturi deleniti repellendus nemo voluptatem. Nobis rerum vitae laboriosam!
            </p>
            <p className="mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem beatae tempora ad
              corrupti recusandae nesciunt quibusdam iure vel, illum incidunt porro deserunt, modi
              architecto tempore eveniet consectetur harum praesentium perspiciatis.
            </p>
          </div>
          <div className="flex mt-16 flex-wrap justify-center md:justify-between items-center gap-8">
            <ActionButton variant="button">Join Now</ActionButton>
            <div className="relative before:z-[-1] before:content-(--content-sparkles)"></div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Benefits;

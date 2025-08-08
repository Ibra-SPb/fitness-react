import Heading from '@/utils/Heading';
import ClassesSlider from './ClassesSlider';
import { baseMotion, sliderLeft } from '@/utils/MotionPrests';
import { motion } from 'framer-motion';

// w-full - вся ширина экрана
// mx-auto - центрирование контента по центру
// w-5/6 - ширина контента будет примерно 80% от ширины экрана
// md:w-3/5 - для средних и больших экранов будет ограниченная ширина
const ourClasses = () => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
      <div className="mx-auto w-5/6">
        <motion.div
          {...baseMotion}
          transition={{ duration: 0.9 }}
          variants={sliderLeft}
          className="md:w-3/5"
        >
          <Heading>Our Classes</Heading>
          <p className="py-5 text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum soluta, animi aut
            tenetur, nostrum illo inventore, vero obcaecati quisquam quod dolore qui blanditiis.
            Amet molestias ea a dolorum consequuntur praesentium.
          </p>
        </motion.div>
      </div>
      <div className="mt-10 w-full">
        <ClassesSlider />
      </div>
    </section>
  );
};

export default ourClasses;

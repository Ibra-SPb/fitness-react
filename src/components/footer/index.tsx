import Logo from '@/assets/Logo.png';
import { footerLinks } from '@/utils/footerLinks';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { slideUp, baseMotion, whithDelay } from '@/utils/MotionPrests';

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="w-5/6 mx-auto flex flex-col gap-16 md:flex-row md:justify-between">
        <motion.div
          {...baseMotion}
          custom={0}
          variants={slideUp}
          transition={whithDelay(0)}
          className="mt-16 basis-1/2 md:mt-0"
        >
          <img src={Logo} alt="Logo" className="w-32" />
          <p className="my-5 text-sm text-gray-600 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste porro nemo, modi
            pariatur culpa veritatis a? Quidem id, beatae consequuntur aut impedit quo praesentium
            magni assumenda neque eaque suscipit!
          </p>
          <p className="text-sm text-gray-500"> EVOGYM All Rights Reserved.</p>
        </motion.div>
        <motion.div
          {...baseMotion}
          custom={1}
          variants={slideUp}
          transition={whithDelay(1)}
          className="mt-16 basis-1/4 md:mt-0"
        >
          <h4 className="font-bold text-lg">Links</h4>
          {footerLinks && footerLinks.length > 0 && (
            <div className="flex flex-col mt-3 gap-2">
              {footerLinks.map((item, index) => (
                <Link
                  to={item.link}
                  key={index}
                  className="text-sm text-gray-700 hover:text-primary-500 animate cursor-pointer"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          )}
        </motion.div>
        <motion.div
          {...baseMotion}
          custom={2}
          variants={slideUp}
          transition={whithDelay(2)}
          className="mt-16 basis-1/4 md:mt-0"
        >
          <h4 className="font-bold text-lg">Contact Us</h4>
          <p className="my-3 text-sm text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, eaque.
          </p>
          <a
            href="tel:88005553535"
            className="text-sm text-gray-700 hover:text-primary-500 transition duration-300 block"
          >
            8(800)555 35 35
          </a>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

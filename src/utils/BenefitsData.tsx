import type { BenefitType } from '@/types/type';
import { HiHomeModern, HiMiniUserGroup, HiAcademicCap } from 'react-icons/hi2';

export const benefits: Array<BenefitType> = [
  {
    icon: <HiHomeModern className="h-6 w-6" />,
    title: 'State of the Art Facilities',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, laborum. Dolore architecto accusantium qui omnis quas consectetur, eveniet laudantium veritatis.',
  },
  {
    icon: <HiMiniUserGroup className="h-6 w-6" />,
    title: "100's of Diverse Classes",
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, laborum. Dolore architecto accusantium qui omnis quas consectetur, eveniet laudantium veritatis.',
  },
  {
    icon: <HiAcademicCap className="h-6 w-6" />,
    title: 'Expert and Pro Trainers',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, laborum. Dolore architecto accusantium qui omnis quas consectetur, eveniet laudantium veritatis.',
  },
];

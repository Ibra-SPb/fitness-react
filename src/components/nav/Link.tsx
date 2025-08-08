import { Link } from 'react-scroll';
import type { SectionId } from '@/types/type';

type Props = {
  section: SectionId;
  children: React.ReactNode;
  onClick: (sectionId: SectionId) => void;
  activeSection: SectionId | null;
};

const CustomLink = ({ section, children, onClick, activeSection }: Props) => {
  const isActive = activeSection === section;
  return (
    <Link
      to={section}
      className={`animate hover:text-fuchsia-200 cursor-pointer capitalize ${
        isActive ? 'text-primary-500' : ''
      }`}
      onClick={() => onClick(section)}
    >
      {children}
    </Link>
  );
};

export default CustomLink;

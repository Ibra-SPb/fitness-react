import type { SectionId } from '@/types/type';
import { Link } from 'react-scroll';

type Props = {
  children: React.ReactNode;
  to?: SectionId;
  variant: 'link' | 'button';
  className?: string;
};
const ActionButton = ({ children, to, variant, className }: Props) => {
  const baseStyle =
    'rounded-md px-6 text-sm sm:text-base whitespace-nowrap sm:px-10 py-2 cursor-pointer animate';
  const linkStyle =
    className || `${baseStyle} bg-secondary-500   hover:bg-primary-500 hover:text-white`;
  const buttonStyle =
    className || `${baseStyle} bg-secondary-500   hover:bg-primary-500 hover:text-white`;
  return variant === 'link' && to ? (
    <Link to={to} className={linkStyle}>
      {children}
    </Link>
  ) : (
    <button className={buttonStyle}>{children}</button>
  );
};

export default ActionButton;

import React, { useState, useEffect } from 'react';
import Logo from '@/assets/Logo.png';
import ActionButton from '@/utils/ActionButton';
import CustomLink from './Link';
import { navLinks, type SectionId } from '@/types/type';
import useMediaQuery from '@/hooks/useMediaQuery';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

const NavBar = (props: Props) => {
  const [activeSection, setActiveSection] = useState<SectionId | null>(navLinks[0]?.id || null);
  const [isTopPage, setIsTopPage] = useState<boolean>(true);
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const isAboveMediaScreen = useMediaQuery('(min-width: 1120px)');
  const navBarBG = isTopPage ? '' : 'bg-primary-100 drop-shadow';

  useEffect(() => {
    const handleScroll = () => {
      setIsMenuToggled(window.scrollY === 0);

      navLinks.forEach(({ id }) => {
        const element = document.getElementById(id);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          if (window.scrollY >= offsetTop - 100 && window.screenY < offsetBottom - 100) {
            setActiveSection(id);
          }
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSetActive = (sectionId: SectionId) => {
    setActiveSection(sectionId);
  };

  return (
    <nav className="relative h-[88px]">
      <div className={`animate fixed top-0 z-30 w-full ${navBarBG} ${isTopPage ? 'py-6' : 'py-4'}`}>
        <div className="mx-auto w-5/6 flex-between">
          <div className="flex-between gap-20 w-full">
            <img src={Logo} alt="Logo" />
            {isAboveMediaScreen ? (
              <div className="flex-between w-full">
                <div className="flex-between gap-8 text-sm">
                  {navLinks.map(({ id, label }) => (
                    <CustomLink
                      key={id}
                      section={id}
                      onClick={handleSetActive}
                      activeSection={activeSection}
                    >
                      {label}
                    </CustomLink>
                  ))}
                </div>
                <div className="flex-between gap-8">
                  <button className="rounded-md bg-primary-500 px-10 py-2 cursor-pointer hover:bg-secondary-400 hover:text-white animate">
                    Sign in
                  </button>
                  <ActionButton to="contactus" variant="link">
                    Became A memeber
                  </ActionButton>
                </div>
              </div>
            ) : (
              <>
                <button
                  className="rounded-full p-2 bg-secondary-400 animate"
                  onClick={() => setIsMenuToggled((prev) => !prev)}
                >
                  <Bars3Icon className="h-6 w-6 animate text-white" />
                </button>
                {/* Мобильное меню */}
                {!isAboveMediaScreen && isMenuToggled && (
                  <div className="fixed h-screen top-0 right-0 z-40 w-[300px] bg-secondary-400 drop-shadow-xl animation">
                    <div className="flex justify-end p-6">
                      <button onClick={() => setIsMenuToggled(false)}>
                        <XMarkIcon className="h-7 w-7 text-gray-600 animate" />
                      </button>
                    </div>
                    <div className="ml-[20%] flex flex-col gap-10 text-xl">
                      {navLinks.map(({ id, label }) => (
                        <CustomLink
                          key={id}
                          section={id}
                          onClick={(sectionId) => {
                            setActiveSection(sectionId);
                            setIsMenuToggled(false);
                          }}
                          activeSection={activeSection}
                        >
                          {label}
                        </CustomLink>
                      ))}
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

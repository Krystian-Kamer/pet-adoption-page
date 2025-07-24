'use client';
import { BiMenuAltRight } from 'react-icons/bi';
import { useState, useEffect } from 'react';
import { Sidebar } from '@/components/Sidebar';
import { Logo } from '@/components/Logo';
import { useScreenWidth } from '@/hooks/useScreenWidth';

export const Menu = () => {
  const width = useScreenWidth();

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    if (width >= 1024) {
      setIsSidebarOpen(true);
    }
  }, [width]);

  return (
    <>
      <Logo />
      <button
        className="fixed right-0 z-100 cursor-pointer lg:hidden"
        onClick={toggleSidebar}
      >
        <BiMenuAltRight
          className={`${isSidebarOpen ? 'text-semi-dark' : 'text-semi-dark'} h-16 w-16`}
        />
      </button>
      {isSidebarOpen ? <Sidebar /> : null}
    </>
  );
};

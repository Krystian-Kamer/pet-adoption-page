'use client';
import { BiMenuAltRight } from 'react-icons/bi';
import { useState } from 'react';
import { SidebarContent } from '@/components/SidebarContent';
import { Logo } from '@/components/Logo';

export const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <div className="fixed w-fit px-4 py-2">
        <Logo />
      </div>
      <button
        className="fixed right-0 z-100 cursor-pointer lg:hidden"
        onClick={toggleSidebar}
      >
        <BiMenuAltRight
          className={`${isSidebarOpen ? 'text-semi-dark' : 'text-semi-dark'} h-16 w-16`}
        />
      </button>

      {isSidebarOpen ? <SidebarContent /> : null}
    </>
  );
};

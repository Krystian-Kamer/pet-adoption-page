'use client';
import { useEffect, useState } from 'react';
import { WiMoonAltFirstQuarter } from 'react-icons/wi';

export const Theme = () => {
  const [theme, setTheme] = useState<'casual' | 'business'>('casual');

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'casual' ? 'business' : 'casual'));
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <button
      className="bg-light text-dark absolute top-0 right-0 m-4 cursor-pointer rounded-full duration-500 hover:rotate-180"
      onClick={toggleTheme}
    >
      <WiMoonAltFirstQuarter className="h-6 w-6" />
    </button>
  );
};

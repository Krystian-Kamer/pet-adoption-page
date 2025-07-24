import { FaPaintRoller } from 'react-icons/fa';
import { useEffect, useState } from 'react';

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
      className="sharpness hover:bg-semi-dark block w-full cursor-pointer py-2 text-start"
      onClick={toggleTheme}
    >
      <span className="mx-2 inline-block">
        <FaPaintRoller />
      </span>
      Zmień motyw
    </button>
  );
};

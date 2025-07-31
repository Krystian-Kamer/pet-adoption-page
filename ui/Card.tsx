import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
}

export const Card = ({ children }: CardProps) => {
  return (
    <div className="text-dark sharpness flex h-80 w-60 flex-col items-center overflow-hidden bg-white shadow">
      {children}
    </div>
  );
};

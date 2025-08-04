import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
}

export const Card = ({ children }: CardProps) => {
  return (
    <div className="text-dark sharpness m-1 flex h-fit w-96 flex-col items-center overflow-hidden bg-white shadow md:h-96 md:w-full">
      {children}
    </div>
  );
};

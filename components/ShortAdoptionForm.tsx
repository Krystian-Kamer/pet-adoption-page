'use client';
import Link from 'next/link';
import { useState } from 'react';

export const ShortAdoptionForm = () => {
  const [animal, setAnimal] = useState<'dog' | 'cat'>('cat');

  return (
    <div className="bg-dark sharpness text-light relative mb-10 flex h-96 w-full flex-col overflow-hidden p-4">
      <p className="text-light z-20 text-2xl sm:text-3xl md:mt-20">
        Kogo chciałbyś adoptować?
      </p>
      <div className="my-5 flex gap-x-10 underline">
        <button
          className="cursor-pointer uppercase sm:text-xl"
          onClick={() => setAnimal('dog')}
        >
          pies
        </button>
        <button
          className="cursor-pointer uppercase sm:text-xl"
          onClick={() => setAnimal('cat')}
        >
          kot
        </button>
      </div>
      <Link
        href="/zwierzeta-do-adopcji"
        className="bg-light text-dark sharpness mt-4 h-fit w-fit p-2 text-xl sm:text-2xl md:text-3xl lg:mt-0"
      >
        Przejdź do adopcji
      </Link>
      {animal === 'dog' ? (
        <img
          src="/dog.png"
          alt="obrazek kota"
          className="pointer-events-none absolute right-10 -bottom-17 h-70 scale-160 md:h-96 lg:right-30 lg:-bottom-10 lg:h-full"
        />
      ) : (
        <img
          src="/cat.png"
          alt="obrazek kota"
          className="pointer-events-none absolute right-10 -bottom-7 h-70 scale-130 md:h-96 lg:right-30 lg:-bottom-10 lg:h-full"
        />
      )}
    </div>
  );
};

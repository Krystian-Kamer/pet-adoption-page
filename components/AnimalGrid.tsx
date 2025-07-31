import { AnimalCard } from '@/components/AnimalCard';
import { Animal } from '@/animals';

type AnimalGridProps = {
  animals: Animal[];
  basePath: string;
};

export const AnimalGrid = ({ animals, basePath }: AnimalGridProps) => {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] place-items-center gap-4">
      {animals.map((animal) => (
        <AnimalCard
          key={animal.id}
          basePath={basePath}
          id={animal.id}
          image={animal.imageUrl}
          name={animal.name}
        />
      ))}
    </div>
  );
};

import { Title } from '@/ui/Title';
import { AnimalCard } from '@/ui/AnimalCard';
import { animals } from '@/animals';

export default function AnimalsForAdoptionPage() {
  return (
    <div>
      <Title title="Zwierzaki do adopcji" />
      <div className="bg-semi-dark h-50 w-full"></div>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-5">
        {animals.map((animal) => (
          <AnimalCard
            key={animal.id}
            image={animal.imageUrl}
            name={animal.name}
          />
        ))}
      </div>
    </div>
  );
}

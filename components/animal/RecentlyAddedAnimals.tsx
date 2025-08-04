import { Subtitle } from '@/ui/Subtitle';
import { AnimalSlick } from '@/components/animal/AnimalSlick';
import { animals } from '@/animals';

export const RecentlyAddedAnimals = () => {
  return (
    <div>
      <Subtitle subtitle="Ostatnio dodane zwierzaki" />
      <AnimalSlick animals={animals} basePath="/zwierzeta-do-adopcji" />
    </div>
  );
};

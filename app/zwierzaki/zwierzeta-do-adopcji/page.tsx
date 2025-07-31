import { Title } from '@/ui/Title';
import { animals } from '@/animals';
import AnimalFilterForm from '@/components/AnimalFilterForm';
import { AnimalGrid } from '@/components/AnimalGrid';

export default async function AnimalsForAdoptionPage() {
  const animalsList = animals;

  return (
    <div>
      <Title title="Zwierzaki do adopcji" />
      <AnimalFilterForm />
      <AnimalGrid animals={animalsList} basePath="zwierzeta-do-adopcji" />
    </div>
  );
}

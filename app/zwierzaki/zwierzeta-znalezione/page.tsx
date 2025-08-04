import { Title } from '@/ui/Title';
import { animals } from '@/animals';
import AnimalFilterForm from '@/components/animal/AnimalFilterForm';
import { AnimalGrid } from '@/components/animal/AnimalGrid';

export default function AnimalsFoundPage() {
  const animalsList = animals;

  return (
    <div>
      <Title title="Znalezione zwierzaki" />
      <AnimalFilterForm />
      <AnimalGrid animals={animalsList} basePath="zwierzeta-znalezione" />
    </div>
  );
}

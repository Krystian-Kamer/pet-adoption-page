import { Title } from '@/ui/Title';
import AnimalFilterForm from '@/components/AnimalFilterForm';
import { AnimalGrid } from '@/components/AnimalGrid';
import { animals } from '@/animals';

export default function AnimalsLostPage() {
  const animalsList = animals;

  return (
    <div>
      <Title title="Zagubione zwierzaki" />
      <AnimalFilterForm />
      <AnimalGrid animals={animalsList} basePath="zwierzeta-zagubione" />
    </div>
  );
}

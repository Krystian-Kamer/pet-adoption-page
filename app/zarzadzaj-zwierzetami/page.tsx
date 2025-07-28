import { Title } from '@/ui/Title';
import { animals } from '@/animals';
import AnimalFilterForm from '@/components/AnimalFilterForm';
import { AnimalGrid } from '@/components/AnimalGrid';

export default function ManageAnimalsPage() {
  const animalsList = animals;

  return (
    <div>
      <Title title="Zarządzaj zwierzętami" />
      <AnimalFilterForm />
      <AnimalGrid animals={animalsList} basePath="zarzadzaj-zwierzetami" />
    </div>
  );
}

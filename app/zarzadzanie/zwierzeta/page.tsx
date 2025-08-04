import { Title } from '@/ui/Title';
import { animals } from '@/animals';
import AnimalFilterForm from '@/components/animal/AnimalFilterForm';
import { AnimalGrid } from '@/components/animal/AnimalGrid';
import { Subtitle } from '@/ui/Subtitle';
import Link from 'next/link';
import { IoAdd } from 'react-icons/io5';

export default function ManageAnimalPage() {
  const animalsList = animals.filter((animal) => animal.species === 'dog');
  return (
    <div>
      <Title title="Zarządzaj zwierzętami" />
      <div className="mb-10 flex justify-center">
        <Link
          href="/zarzadzanie/zwierzeta/dodaj-zwierze"
          className="bg-dark hover:bg-dark/90 font-secondary sharpness text-light flex h-[80px] w-full items-center justify-center px-4 py-2 text-center text-xl md:px-8 md:text-3xl"
        >
          Dodaj zwierzę
        </Link>
      </div>
      <Subtitle subtitle="Zwierzęta w Twojej organizacji:" />
      <AnimalFilterForm />
      <AnimalGrid animals={animalsList} basePath="zwierzeta-do-adopcji" />
      <div className="mb-10"></div>
      <Subtitle subtitle="Zwierzęta już adoptowane:" />
      <AnimalGrid animals={animalsList} basePath="zwierzeta-do-adopcji" />
    </div>
  );
}

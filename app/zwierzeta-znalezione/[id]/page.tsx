import { animals } from '@/animals';
import { Title } from '@/ui/Title';
import { Subtitle } from '@/ui/Subtitle';
import { AnimalInfo } from '@/components/AnimalInfo';

interface AnimalPageProps {
  params: {
    id: string;
  };
}

export default function AnimalFoundPage({ params }: AnimalPageProps) {
  const animal = animals.find((a) => a.id === Number(params.id));

  if (!animal) {
    return (
      <div className="mt-10 text-center">
        <Title title="Nie znaleziono zwierzaka" />
        <p>Spróbuj ponownie lub skontaktuj się z administratorem.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      <AnimalInfo
        imageUrl={animal.imageUrl}
        name={animal.name}
        species={animal.species}
        gender={animal.gender}
        age={animal.age}
        chipNumber={animal.chipNumber}
        organization={animal.organization}
        phoneNumber={animal.phoneNumber}
        description={animal.description}
      />
      <div className="mt-10 text-center">
        <Subtitle subtitle="Skontaktuj się" />
      </div>
      <hr />
      <p className="mt-10 italic">FORMULARZ</p>
    </div>
  );
}

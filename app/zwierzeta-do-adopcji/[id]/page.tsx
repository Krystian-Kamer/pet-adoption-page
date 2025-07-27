import { animals } from '@/animals';
import { Title } from '@/ui/Title';
import { Subtitle } from '@/ui/Subtitle';

interface AnimalPageProps {
  params: {
    id: string;
  };
}

export default function AnimalForAdoptionPage({ params }: AnimalPageProps) {
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
      <img
        src={animal.imageUrl}
        alt={animal.name}
        className="sharpness border-dark/20 mb-4 h-full max-h-[600px] w-fit self-center border-1 bg-white p-2"
      />
      <div className="text-center">
        <Title title={animal.name} />
      </div>
      <ul className="mb-4">
        <li>
          <strong>Gatunek:</strong> {animal.species}
        </li>
        <li>
          <strong>Płeć:</strong> {animal.gender}
        </li>
        <li>
          <strong>Wiek:</strong> {animal.age} lata
        </li>
        <li>
          <strong>Chip:</strong> {animal.chipNumber}
        </li>
        <li>
          <strong>Organizacja:</strong> {animal.organization}
        </li>
        <li>
          <strong>Telefon:</strong> {animal.phoneNumber}
        </li>
      </ul>
      <div className="text-center">
        <Subtitle subtitle="Opis" />
      </div>
      <hr />
      <p className="my-30 italic">
        {animal.description} Lorem ipsum dolor sit amet, consectetur adipisicing
        elit. Aliquam corporis nesciunt odio porro reiciendis? Fugit harum ipsum
        laborum porro qui quis ratione saepe. Blanditiis consequatur dignissimos
        dolore dolorum excepturi explicabo facilis in nemo nulla, pariatur
        perferendis quas qui quod sapiente?
      </p>
      <div className="mt-10 text-center">
        <Subtitle subtitle="Skontaktuj się" />
      </div>
      <hr />
      <p className="mt-10 italic">FORMULARZ</p>
      <div className="mt-10 text-center">
        <Subtitle subtitle="Pozostałe zdjęcia" />
      </div>
      <div className="flex gap-5">
        <div className="h-40 w-40 bg-emerald-200"></div>
        <div className="h-40 w-40 bg-emerald-200"></div>
        <div className="h-40 w-40 bg-emerald-200"></div>
        <div className="h-40 w-40 bg-emerald-200"></div>
        <div className="h-40 w-40 bg-emerald-200"></div>
      </div>
    </div>
  );
}

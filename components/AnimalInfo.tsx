import { Title } from '@/ui/Title';
import { Subtitle } from '@/ui/Subtitle';

type AnimalInfoProps = {
  imageUrl: string;
  name: string;
  species: string;
  gender: string;
  age: string | number;
  chipNumber: string;
  organization: string;
  phoneNumber: string;
  description: string;
};

export const AnimalInfo = ({
  imageUrl,
  name,
  species,
  gender,
  age,
  chipNumber,
  organization,
  phoneNumber,
  description,
}: AnimalInfoProps) => {
  return (
    <>
      <img
        src={imageUrl}
        alt={name}
        className="sharpness border-dark/20 mb-4 h-full max-h-[600px] w-fit self-center border-1 bg-white p-2"
      />
      <div className="text-center">
        <Title title={name} />
      </div>
      <ul className="mb-4 text-gray-800 sm:text-lg">
        <li>
          <strong>Płeć:</strong> {gender}
        </li>
        <li>
          <strong>Wiek:</strong> {age}
        </li>
        <li>
          <strong>Nummer Chip:</strong> {chipNumber}
        </li>
        <li>
          <strong>Data przyjęcia:</strong> data przyjęcia
        </li>
        <li>
          <strong>Organizacja:</strong> {organization}
        </li>
        <li>
          <strong>Telefon:</strong> {phoneNumber}
        </li>
      </ul>
      <div className="text-center">
        <Subtitle subtitle="Opis" />
      </div>
      <hr className="mb-5" />
      <p className="text-gray-800 sm:text-lg lg:mb-10">
        {description} Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Aliquam corporis nesciunt odio porro reiciendis? Fugit harum ipsum
        laborum porro qui quis ratione saepe. Blanditiis consequatur dignissimos
        dolore dolorum excepturi explicabo facilis in nemo nulla, pariatur
        perferendis quas qui quod sapiente?
      </p>
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
    </>
  );
};

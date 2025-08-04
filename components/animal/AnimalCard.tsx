import Link from 'next/link';

type AnimalCardProps = {
  image: string;
  name: string;
  id: number;
  basePath: string;
};

export const AnimalCard = ({ image, name, id, basePath }: AnimalCardProps) => {
  return (
    <div className="text-dark sharpness m-1 flex h-80 w-60 flex-col items-center overflow-hidden bg-white shadow">
      <Link href={`/zwierzaki/${basePath}/${id}`}>
        <img src={image} alt={name} className="mb-2 h-60 w-full object-cover" />
        <p className="text-center text-xl font-semibold tracking-wide">
          {name}
        </p>
        <div className="flex justify-between px-2">
          <p className="text-start">Toruń</p>
          <p className="text-start">Wiek</p>
        </div>
      </Link>
    </div>
  );
};

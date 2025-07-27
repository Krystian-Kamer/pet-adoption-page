import Link from 'next/link';

type AnimalCardProps = {
  image: string;
  name: string;
  id: number;
  basePath: string;
};

export const AnimalCard = ({ image, name, id, basePath }: AnimalCardProps) => {
  return (
    <Link
      href={`/${basePath}/${id}`}
      className="sharpness text-dark flex h-70 w-60 flex-col items-center bg-white p-2 shadow"
    >
      <img
        src={image}
        alt={name}
        className="sharpness mb-2 h-60 w-full object-cover"
      />
      <p className="text-center font-semibold">{name}</p>
    </Link>
  );
};

import Link from 'next/link';

type AnimalCardProps = {
  image: string;
  name: string;
};

export const AnimalCard = ({ image, name }: AnimalCardProps) => {
  return (
    <Link
      href="/zwierzeta-do-adopcji"
      className="sharpness flex h-70 w-60 flex-col items-center bg-white p-2 shadow"
    >
      <img
        src={image}
        alt={name}
        className="mb-2 h-60 w-full rounded-md object-cover"
      />
      <p className="text-center font-semibold text-gray-800">{name}</p>
    </Link>
  );
};

import Link from 'next/link';
import { Card } from '@/ui/Card';

type AnimalCardProps = {
  image: string;
  name: string;
  id: number;
  basePath: string;
};

export const AnimalCard = ({ image, name, id, basePath }: AnimalCardProps) => {
  return (
    <Card>
      <Link href={`/zwierzaki/${basePath}/${id}`}>
        <img src={image} alt={name} className="mb-2 h-60 w-full object-cover" />
        <p className="text-center text-xl font-semibold tracking-wide">
          {name}
        </p>
        <p className="text-start">Toruń</p>
      </Link>
    </Card>
  );
};

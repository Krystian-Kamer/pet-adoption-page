import { Title } from '@/ui/Title';
import Link from 'next/link';
import { Subtitle } from '@/ui/Subtitle';

export default function ManageFundraisersPage() {
  return (
    <div>
      <Title title="Zarządzaj zbiórkami" />
      <div className="mb-10 flex justify-center">
        <Link
          href="/zarzadzanie/zbiorki/dodaj-zbiorke"
          className="bg-dark hover:bg-dark/90 font-secondary sharpness text-light flex h-[80px] w-full items-center justify-center px-4 py-2 text-center text-xl md:px-8 md:text-3xl"
        >
          Dodaj zbiórkę
        </Link>
      </div>
      <Subtitle subtitle="Zbiórki w Twojej organizacji:" />
    </div>
  );
}

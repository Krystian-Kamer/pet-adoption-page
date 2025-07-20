import { Logo } from '@/components/Logo';
import Link from 'next/link';
import { MdPets } from 'react-icons/md';
import { FaUser } from 'react-icons/fa';
import { FaInfoCircle } from 'react-icons/fa';
import { MdPermContactCalendar } from 'react-icons/md';
import { FaBuilding } from 'react-icons/fa6';
import { FaHandHoldingHeart } from 'react-icons/fa';
import { Theme } from '@/components/Theme';

export const SidebarContent = () => {
  const animalContent = (
    <div className="mb-4 flex flex-col md:mb-10">
      <p className="mb-2 uppercase">
        <span className="mr-2 inline-block">
          <MdPets />
        </span>
        Zwierzaki
      </p>
      <Link href="/zwierzeta-do-adopcji" className="sharpness py-2 pl-4">
        Adoptuj
      </Link>
      <Link href="/zwierzeta-zagubione" className="sharpness py-2 pl-4">
        Zagubione
      </Link>
      <Link href="/zwierzeta-znalezione" className="sharpness py-2 pl-4">
        Znalezione
      </Link>
    </div>
  );

  const userContent = (
    <div className="mb-4 flex flex-col md:mb-10">
      <p className="mb-2 uppercase">
        <span className="mr-2 inline-block">
          <FaUser />
        </span>
        Użytkownik
      </p>
      <Link href="/logowanie" className="sharpness py-2 pl-4">
        Zaloguj
      </Link>
      <Link href="/rejestracja" className="sharpness py-2 pl-4">
        Rejestracja
      </Link>
    </div>
  );

  const infoContent = (
    <div className="mb-4 flex flex-col md:mb-10">
      <p className="mb-2 uppercase">
        <span className="mr-2 inline-block">
          <FaInfoCircle />
        </span>
        Informacje
      </p>
      <Link href="/jak-pomoc" className="sharpness py-2 pl-4">
        Jak pomóc
      </Link>
      <Link href="/wolontariat" className="sharpness py-2 pl-4">
        Wolontariat
      </Link>
      <Link href="/o-adopcji" className="sharpness py-2 pl-4">
        O adopcji
      </Link>
      <Link href="/o-mnie" className="sharpness py-2 pl-4">
        O mnie
      </Link>
    </div>
  );

  {
    return (
      <aside className="text-light font-secondary bg-dark fixed z-50 flex h-screen w-50 flex-col px-4 py-2 text-sm tracking-wider md:py-10 md:text-base lg:text-lg">
        <Logo />
        <div className="mt-6 min-h-0 flex-1 overflow-y-auto pr-2">
          {animalContent}
          {userContent}
          {infoContent}
          <Link href="/kontakt" className="sharpness block py-2">
            <span className="mx-2 inline-block">
              <MdPermContactCalendar />
            </span>
            Kontakt
          </Link>
          <Link href="/organizacje" className="sharpness block py-2">
            <span className="mx-2 inline-block">
              <FaBuilding />
            </span>
            Organizacje
          </Link>
          <Link href="/zbiorki" className="sharpness block py-2">
            <span className="mx-2 inline-block">
              <FaHandHoldingHeart />
            </span>
            Zbiórki
          </Link>
          <Theme />
        </div>
      </aside>
    );
  }
};

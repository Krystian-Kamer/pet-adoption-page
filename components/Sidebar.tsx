import Link from 'next/link';
import { MdPets } from 'react-icons/md';
import { FaUser } from 'react-icons/fa';
import { FaInfoCircle } from 'react-icons/fa';
import { MdPermContactCalendar } from 'react-icons/md';
import { FaBuilding } from 'react-icons/fa6';
import { FaHandHoldingHeart } from 'react-icons/fa';
import { Theme } from '@/components/Theme';

export const Sidebar = () => {
  const isLoggedIn = true;

  const animalContent = (
    <div className="mb-4 flex flex-col md:mb-10">
      <p className="mb-2 uppercase">
        <span className="mr-2 inline-block">
          <MdPets />
        </span>
        Zwierzaki
      </p>
      <Link
        href="/zwierzeta-do-adopcji"
        className="sharpness hover:bg-semi-dark py-2 pl-4"
      >
        Adoptuj
      </Link>
      <Link
        href="/zwierzeta-zagubione"
        className="sharpness hover:bg-semi-dark py-2 pl-4"
      >
        Zagubione
      </Link>
      <Link
        href="/zwierzeta-znalezione"
        className="sharpness hover:bg-semi-dark py-2 pl-4"
      >
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

      {isLoggedIn ? (
        <>
          <Link
            className="sharpness hover:bg-semi-dark py-2 pl-4"
            href="/dodaj-zwierze"
          >
            Dodaj zwierzę
          </Link>
          <Link
            className="sharpness hover:bg-semi-dark py-2 pl-4"
            href="/dodaj-zbiorke"
          >
            Dodaj zbiórkę
          </Link>
          <Link
            className="sharpness hover:bg-semi-dark py-2 pl-4"
            href="/zarzadzaj-zwierzetami"
          >
            Zarządzaj zwierzętami
          </Link>
          <Link
            className="sharpness hover:bg-semi-dark py-2 pl-4"
            href="/personel"
          >
            Personel
          </Link>
          <Link
            className="sharpness hover:bg-semi-dark py-2 pl-4"
            href="/wiadomosci"
          >
            Wiadomości
          </Link>
          <Link
            className="sharpness hover:bg-semi-dark py-2 pl-4"
            href="/ustawienia"
          >
            Ustawienia
          </Link>
          <button className="sharpness hover:bg-semi-dark inline-block py-2 pl-4 text-start">
            Wyloguj
          </button>
        </>
      ) : (
        <>
          <Link
            href="/logowanie"
            className="sharpness hover:bg-semi-dark py-2 pl-4"
          >
            Zaloguj
          </Link>
          <Link
            href="/rejestracja"
            className="sharpness hover:bg-semi-dark py-2 pl-4"
          >
            Rejestracja
          </Link>
        </>
      )}
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
      <Link
        href="/jak-pomoc"
        className="sharpness hover:bg-semi-dark py-2 pl-4"
      >
        Jak pomóc
      </Link>
      <Link
        href="/wolontariat"
        className="sharpness hover:bg-semi-dark py-2 pl-4"
      >
        Wolontariat
      </Link>
      <Link
        href="/o-adopcji"
        className="sharpness hover:bg-semi-dark py-2 pl-4"
      >
        O adopcji
      </Link>
      <Link href="/o-mnie" className="sharpness hover:bg-semi-dark py-2 pl-4">
        O mnie
      </Link>
    </div>
  );

  {
    return (
      <aside className="text-light font-secondary bg-dark fixed z-50 flex h-screen w-50 flex-col px-4 py-20 text-sm tracking-wider md:text-base lg:pt-40 lg:text-lg">
        <div className="mt-6 min-h-0 flex-1 overflow-y-auto pr-2">
          {animalContent}
          {userContent}
          {infoContent}
          <Link
            href="/kontakt"
            className="sharpness hover:bg-semi-dark block py-2"
          >
            <span className="mx-2 inline-block">
              <MdPermContactCalendar />
            </span>
            Kontakt
          </Link>
          <Link
            href="/organizacje"
            className="sharpness hover:bg-semi-dark block py-2"
          >
            <span className="mx-2 inline-block">
              <FaBuilding />
            </span>
            Organizacje
          </Link>
          <Link
            href="/zbiorki"
            className="sharpness hover:bg-semi-dark block py-2"
          >
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

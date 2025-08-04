import Link from 'next/link';
import { MdPets } from 'react-icons/md';
import { FaUser } from 'react-icons/fa';
import { FaInfoCircle, FaSignOutAlt, FaClipboardList } from 'react-icons/fa';
import { Theme } from '@/components/Theme';

export const Sidebar = () => {
  const isLoggedIn = true;
  const userRole = 'admin';
  const userName = 'Jan Kowalski';

  const userHeader = isLoggedIn ? (
    <div className="border-semi-dark mb-6 border-b pb-4">
      <div className="flex items-start">
        <div className="bg-semi-dark mr-3 flex h-10 w-10 items-center justify-center rounded-full">
          <FaUser className="text-light" />
        </div>
        <div>
          <p className="text-light font-medium">{userName}</p>
          <p className="text-xs text-gray-400 capitalize">{userRole} </p>
        </div>
      </div>
    </div>
  ) : (
    <div className="mb-6"></div>
  );

  const animalContent = (
    <div className="mb-6 flex flex-col">
      <p className="text-light/90 mb-3 font-semibold uppercase">
        <span className="mr-2 inline-block">
          <MdPets />
        </span>
        Zwierzaki
      </p>
      <Link
        href="/zwierzaki/zwierzeta-do-adopcji"
        className="sharpness hover:bg-semi-dark py-2 pl-4"
      >
        Adoptuj
      </Link>
      <Link
        href="/zwierzaki/zwierzeta-zagubione"
        className="sharpness hover:bg-semi-dark py-2 pl-4"
      >
        Zagubione
      </Link>
      <Link
        href="/zwierzaki/zwierzeta-znalezione"
        className="sharpness hover:bg-semi-dark py-2 pl-4"
      >
        Znalezione
      </Link>
    </div>
  );

  const infoContent = (
    <div className="mb-6 flex flex-col">
      <p className="text-light/90 mb-3 font-semibold uppercase">
        <span className="mr-2 inline-block">
          <FaInfoCircle />
        </span>
        Informacje
      </p>
      <Link
        href="/informacje/jak-pomoc"
        className="sharpness hover:bg-semi-dark py-2 pl-4"
      >
        Jak pomóc
      </Link>
      <Link
        href="/informacje/o-adopcji"
        className="sharpness hover:bg-semi-dark py-2 pl-4"
      >
        O adopcji
      </Link>
      <Link
        href="/informacje/o-mnie"
        className="sharpness hover:bg-semi-dark py-2 pl-4"
      >
        O mnie
      </Link>
      <Link
        href="/informacje/kontakt"
        className="sharpness hover:bg-semi-dark py-2 pl-4"
      >
        Kontakt
      </Link>
    </div>
  );

  const authContent = !isLoggedIn && (
    <div className="mb-6 flex flex-col">
      <p className="text-light/90 mb-3 font-semibold uppercase">
        <span className="mr-2 inline-block">
          <FaUser />
        </span>
        Konto
      </p>
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
    </div>
  );

  const communityContent = (
    <div className="mb-6 flex flex-col">
      <p className="text-light/90 mb-3 font-semibold uppercase">
        <span className="mr-2 inline-block">
          <FaUser />
        </span>
        Organizacje
      </p>
      <Link
        href="/organizacje/wszystkie"
        className="sharpness hover:bg-semi-dark py-2 pl-4"
      >
        Wszystkie
      </Link>
      <Link
        href="/organizacje/aktualnosci"
        className="sharpness hover:bg-semi-dark py-2 pl-4"
      >
        Aktualności
      </Link>
      <Link
        href="/organizacje/zbiorki"
        className="sharpness hover:bg-semi-dark py-2 pl-4"
      >
        Zbiórki
      </Link>
      <Link
        href="/organizacje/wolontariat"
        className="sharpness hover:bg-semi-dark py-2 pl-4"
      >
        Wolontariat
      </Link>
    </div>
  );

  const logoutContent = isLoggedIn && (
    <div className="border-semi-dark mt-auto border-t pt-4">
      <button className="sharpness flex w-full cursor-pointer items-center py-2 pl-4 text-red-300 hover:bg-red-400 hover:text-white">
        <span className="mr-2">
          <FaSignOutAlt />
        </span>
        Wyloguj
      </button>
    </div>
  );

  const manageContent = isLoggedIn && (
    <div className="mb-6 flex flex-col">
      <p className="text-light/90 mb-3 font-semibold uppercase">
        <span className="mr-2 inline-block">
          <FaClipboardList />
        </span>
        Zarządzanie
      </p>
      <Link
        href="/zarzadzanie/zwierzeta"
        className="sharpness hover:bg-semi-dark py-2 pl-4"
      >
        Zwierzęta
      </Link>
      <Link
        href="/zarzadzanie/aktualnosci"
        className="sharpness hover:bg-semi-dark py-2 pl-4"
      >
        Aktualności
      </Link>
      <Link
        href="/zarzadzanie/zbiorki"
        className="sharpness hover:bg-semi-dark py-2 pl-4"
      >
        Zbiórki
      </Link>
      <Link
        href="/zarzadzanie/wolontariat"
        className="sharpness hover:bg-semi-dark py-2 pl-4"
      >
        Wolontariat
      </Link>
      <Link
        href="/zarzadzanie/personel"
        className="sharpness hover:bg-semi-dark py-2 pl-4"
      >
        Personel
      </Link>
      <Link
        href="/zarzadzanie/wiadomosci"
        className="sharpness hover:bg-semi-dark py-2 pl-4"
      >
        Wiadomości
      </Link>
    </div>
  );

  return (
    <aside className="text-light font-secondary bg-dark fixed z-50 flex h-screen w-50 px-4 pt-14 pb-10 text-sm tracking-wider md:text-base lg:text-base">
      <Theme />
      <div className="relative flex flex-col pr-2">
        {userHeader}
        {animalContent}
        {communityContent}
        {manageContent}
        {infoContent}
        {authContent}
        {logoutContent}
      </div>
    </aside>
  );
};

import Link from 'next/link';

export const Logo = () => {
  return (
    <Link
      href="/"
      className="bg-accent top:mt-10 fixed z-100 mt-2 ml-5 h-fit w-fit cursor-pointer self-start overflow-hidden rounded-full md:self-center lg:mt-5 lg:ml-8"
    >
      <img
        src="/logo.png"
        alt="logo"
        className="bg-accent h-16 w-16 rounded-full lg:h-30 lg:w-30"
      />
    </Link>
  );
};

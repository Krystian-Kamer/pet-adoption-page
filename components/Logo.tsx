import Link from 'next/link';

export const Logo = () => {
  return (
    <Link
      href="/"
      className="bg-accent h-fit w-fit cursor-pointer self-start overflow-hidden rounded-full md:self-center"
    >
      <img
        src="/logo.png"
        alt="logo"
        className="bg-accent h-16 w-16 rounded-full md:h-30 md:w-30"
      />
    </Link>
  );
};

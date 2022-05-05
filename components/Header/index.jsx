import Link from 'next/link';

const Header = () => {
  return (
    <header className="flex justify-between py-4 text-white">
      <h1>
        <Link href="/">
          <a>Manon.icu</a>
        </Link>
      </h1>

      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/contact">
          <a>Contact</a>
        </Link>
      </nav>
    </header>
  );
}

export default Header;

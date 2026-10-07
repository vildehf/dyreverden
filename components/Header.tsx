import Link from "next/link";
import SearchBar from "./SearchBar";
import MobileMenu from "./MobileMenu";

export default function Header() {
  return (
    <header>
      <Link href="/" className="header-logo">
        Dyreverden
      </Link>

      <nav className="desktop-nav" aria-label="Hovedmeny">
        <Link href="/">Hjem</Link>
        <Link href="/animals">Utforsk dyr</Link>
        <Link href="/about">Om</Link>
      </nav>

      <div className="desktop-search">
        <SearchBar />
      </div>

      <MobileMenu />
    </header>
  );
}

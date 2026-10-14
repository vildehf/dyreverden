import Link from "next/link";
import SearchBar from "../SearchBar/SearchBar";
import MobileMenu from "../MobileMenu/MobileMenu";
import styles from "../Header/Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>
        Dyreverden
      </Link>

      <nav className={styles.nav} aria-label="Hovedmeny">
        <Link href="/">Hjem</Link>
        <Link href="/animals">Utforsk dyr</Link>
        <Link href="/about">Om</Link>
      </nav>

      <div className={styles.search}>
        <SearchBar />
      </div>

      <MobileMenu />
    </header>
  );
}

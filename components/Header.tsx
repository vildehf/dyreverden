import Link from "next/link";

export default function Header() {
  return (
    <header>
      <Link href="/">Dyreverden</Link>

      <nav aria-label="Hovedmeny">
        <Link href="/">Hjem</Link>
        <Link href="/animals">Utforsk dyr</Link>
        <Link href="/about">Om</Link>
      </nav>
    </header>
  );
}

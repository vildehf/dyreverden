import Link from "next/link";

export default function NotFound() {
  return (
    <section>
      <h1>Dyret ble ikke funnet</h1>
      <p>Vi kunne ikke finne dyret du leter etter.</p>

      <Link href="/animals">Tilbake til alle dyr</Link>
    </section>
  );
}

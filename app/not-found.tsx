import Link from "next/link";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <section>
      <h1>Dyret ble ikke funnet</h1>
      <p>Vi kunne ikke finne dyret du leter etter.</p>

      <Link href="/animals" className={styles.link}>
        Tilbake til alle dyr
      </Link>
    </section>
  );
}

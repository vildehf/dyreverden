import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1>Oppdag dyreverden</h1>

        <div className={styles.intro}>
          <h2>Utforsk og lær</h2>
          <p>
            Søk etter dyr og finn informasjon om ulike arter fra hele verden.
          </p>

          <Link href="/about">Les mer om Dyreverden</Link>
        </div>
      </div>

      <div className={styles.heroImage}>
        <Image
          src="/Tiger.png"
          alt="tiger som går gjennom grønn skog"
          width={1636}
          height={1024}
          priority
        />
      </div>
    </section>
  );
}

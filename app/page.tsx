import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section>
        <h1>oppdag dyreverdenen</h1>
        <p>
          Utforsk ulike dyrearter, se bilder og lær mer om dyrene vi deler
          planet med.
        </p>

        <Link href="/animals">Utforsk dyr</Link>
      </section>
      <section>
        <h2>Utforsk og lær</h2>
        <p>
          Søk etter dyr og finn informasjon om ulike arter fra hele verden.
          Dyreverden bruker data fra iNaturalist for å vise navn og bilder.
        </p>

        <Link href="/about">Les ser om Dyreverden</Link>
      </section>
    </>
  );
}

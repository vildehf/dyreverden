import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <h1>oppdag dyreverdenen</h1>

          <p>
            Utforsk ulike dyrearter, se bilder og lær mer om dyrene vi deler
            planet med.
          </p>

          <Link href="/animals" className="primary-button">
            Utforsk dyr
          </Link>
        </div>
        <div className="hero-image">
          <Image
            src="/tiger-hero.jpg"
            alt="tiger"
            width={700}
            height={700}
            priority
          />
        </div>
      </section>

      <section className="intro">
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

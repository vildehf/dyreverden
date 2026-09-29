export default function AboutPage() {
  return (
    <div className="about-page">
      <section className="about-intro">
        <h1>Om dyreverden</h1>
        <p>
          Dyreverden er et nettsted hvor du kan utforske ulike dyrearter, se
          bilder og lære mer om dyr fra hele verden.
        </p>
      </section>

      <section className="about-section">
        <h2>Hvor kommer informasjonen fra?</h2>
        <p>
          Informasjonen og bildene på Dyreverden hentes fra iNaturalist gjennom
          deres API.
        </p>
      </section>

      <section className="about-section">
        <h2>Om prosjektet</h2>
        <p>
          Dyreverden er utviklet som en del av et skoleprosjekt i Next.js og
          TypeScript.
        </p>
      </section>
    </div>
  );
}

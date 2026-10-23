import styles from "./page.module.css";

export default function AboutPage() {
  return (
    <div className={styles.page}>
      <section className={styles.intro}>
        <h1>Om dyreverden</h1>
        <p>
          Dyreverden er et nettsted hvor du kan utforske ulike dyrearter, se
          bilder og lære mer om dyr fra hele verden.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Hvor kommer informasjonen fra?</h2>
        <p>
          Informasjonen og bildene på Dyreverden hentes fra iNaturalist gjennom
          deres API.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Om prosjektet</h2>
        <p>
          Dyreverden er utviklet av Vilde Hvitstein som en del av et
          skoleprosjekt i Next.js og TypeScript.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Målgruppe</h2>
        <p>
          Dyreverden passer for alle som er interessert i natur og dyreliv,
          uavhengig av forkunnskaper.
        </p>
      </section>
    </div>
  );
}

import AnimalGrid from "@/components/AnimalGrid/AnimalGrid";
import { type Animals } from "@/types/animal";
import styles from "./page.module.css";

export default async function AnimalsPage() {
  const response = await fetch(
    "https://api.inaturalist.org/v1/taxa?taxon_id=1&rank=species&per_page=12",
  );

  if (!response.ok) {
    throw new Error("Kunne ikke hente dyr");
  }

  const data = await response.json();
  const animals: Animals = data.results;

  return (
    <>
      <section className={styles.page}>
        <h1>Utforsk dyr</h1>
        <AnimalGrid animals={animals} />
      </section>
    </>
  );
}

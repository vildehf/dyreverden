import AnimalGrid from "@/components/AnimalGrid/AnimalGrid";
import styles from "./page.module.css";
import { searchAnimals } from "@/lib/api";

type Props = {
  searchParams: Promise<{ q?: string }>;
};

// Henter søkeordet fra URL-en og viser relevante søkeresultater.
export default async function SearchPage({ searchParams }: Props) {
  const { q } = await searchParams;
  // Viser en melding hvis brukeren åpner søkesiden uten å ha søkt.
  if (!q) {
    return (
      <section className={styles.page}>
        <h1>Du har ikke søkt etter noe dyr</h1>
      </section>
    );
  }

  const animals = await searchAnimals(q);
  // Viser en forklaring hvis søket ikke gir noen resultater.
  if (animals.length === 0) {
    return (
      <section className={styles.page}>
        <h1>Søkeresultater for: {q}</h1>
        <p>
          Ingen dyr funnet. Prøv å søke på dyrets engelske navn, for eksempel
          «Elephant» eller «Red Fox».
        </p>
      </section>
    );
  }

  return (
    <section className={styles.page}>
      <h1>Søkeresultater for: {q}</h1>
      <AnimalGrid animals={animals} />
    </section>
  );
}

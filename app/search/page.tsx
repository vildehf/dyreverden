import AnimalGrid from "@/components/AnimalGrid/AnimalGrid";
import styles from "./page.module.css";
import { searchAnimals } from "@/lib/api";

type Props = {
  searchParams: Promise<{ q?: string }>;
};

export default async function SearchPage({ searchParams }: Props) {
  const { q } = await searchParams;

  if (!q) {
    return (
      <section className={styles.page}>
        <h1>Du har ikke søkt etter noe dyr</h1>
      </section>
    );
  }

  const animals = await searchAnimals(q);

  if (animals.length === 0) {
    return (
      <section className={styles.page}>
        <h1>Søkeresultater for: {q}</h1>
        <p>Ingen dyr funnet.</p>
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

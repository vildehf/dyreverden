import AnimalGrid from "@/components/AnimalGrid/AnimalGrid";
import { getAnimals } from "@/lib/api";
import styles from "./page.module.css";

export default async function AnimalsPage() {
  const animals = await getAnimals();

  return (
    <>
      <section className={styles.page}>
        <h1>Utforsk dyr</h1>
        <AnimalGrid animals={animals} />
      </section>
    </>
  );
}

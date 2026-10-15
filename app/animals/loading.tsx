import AnimalGridSkeleton from "@/components/AnimalGrid/AnimalGridSkeleton";
import styles from "./page.module.css";

export default function Loading() {
  return (
    <section className={styles.page}>
      <h1>Utforsk dyr</h1>
      <AnimalGridSkeleton />
    </section>
  );
}

import AnimalCard from "../AnimalCard/AnimalCard";
import { type Animals } from "@/types/animal";
import styles from "./AnimalGrid.module.css";

type Props = {
  animals: Animals;
};

export default function AnimalGrid({ animals }: Props) {
  return (
    <section className={styles.grid}>
      {animals.map((animal) => (
        <AnimalCard key={animal.id} animal={animal} />
      ))}
    </section>
  );
}

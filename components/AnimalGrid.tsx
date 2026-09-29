import AnimalCard from "./AnimalCard";
import { type Animals } from "@/types/animal";

type Props = {
  animals: Animals;
};

export default function AnimalGrid({ animals }: Props) {
  return (
    <section className="animal-grid">
      {animals.map((animal) => (
        <AnimalCard key={animal.id} animal={animal} />
      ))}
    </section>
  );
}

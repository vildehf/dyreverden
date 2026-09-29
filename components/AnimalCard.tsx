import Image from "next/image";
import { type Animal } from "@/types/animal";

type Props = {
  animal: Animal;
};

export default function AnimalCard({ animal }: Props) {
  return (
    <article>
      {animal.default_photo && (
        <Image
          src={animal.default_photo.medium_url}
          width={300}
          height={300}
          alt={animal.preferred_common_name ?? animal.name}
        />
      )}

      <h2>{animal.preferred_common_name ?? animal.name}</h2>
      <p>Vitenskapelig navn: {animal.name}</p>
    </article>
  );
}

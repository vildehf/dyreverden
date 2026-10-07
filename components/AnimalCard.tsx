import Image from "next/image";
import { type Animal } from "@/types/animal";
import Link from "next/link";

type Props = {
  animal: Animal;
};

export default function AnimalCard({ animal }: Props) {
  return (
    <article className="animal-card">
      {animal.default_photo && (
        <div className="animal-card-image">
          <Image
            src={animal.default_photo.medium_url}
            fill
            alt={animal.preferred_common_name ?? animal.name}
          />
        </div>
      )}

      <h2>
        <Link href={`/animals/${animal.id}`}>
          {animal.preferred_common_name ?? animal.name}
        </Link>
      </h2>
      <p>{animal.name}</p>
    </article>
  );
}

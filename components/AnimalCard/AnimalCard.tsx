import Image from "next/image";
import { type Animal } from "@/types/animal";
import Link from "next/link";
import styles from "./AnimalCard.module.css";

type Props = {
  animal: Animal;
  eager?: boolean;
};

export default function AnimalCard({ animal, eager = false }: Props) {
  return (
    <article className={styles.card}>
      <div className={styles.photoContainer}>
        <div className={styles.image}>
          {animal.default_photo ? (
            <Image
              src={animal.default_photo.medium_url}
              fill
              sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
              loading={eager ? "eager" : "lazy"}
              alt={animal.preferred_common_name ?? animal.name}
            />
          ) : (
            <div className={styles.placeholder}>
              <span aria-hidden="true">✿</span>
              <span>Bilde ikke tilgjengelig</span>
            </div>
          )}
        </div>

        {animal.default_photo?.attribution && (
          <p className={styles.attribution}>
            Foto: {animal.default_photo.attribution}
          </p>
        )}
      </div>

      <h2>
        <Link href={`/animals/${animal.id}`}>
          {animal.preferred_common_name ?? animal.name}
        </Link>
      </h2>

      <p>{animal.name}</p>
    </article>
  );
}

import Image from "next/image";
import { type Animal } from "@/types/animal";
import { getAnimalById } from "@/lib/api";
import { notFound } from "next/navigation";
import styles from "./page.module.css";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function AnimalPage({ params }: Props) {
  const { id } = await params;

  const animal = await getAnimalById(id);

  if (!animal) {
    notFound();
  }

  function getConservationStatus(status: string) {
    const statuses: Record<string, string> = {
      LC: "Livskraftig",
      NT: "Nær truet",
      VU: "Sårbar",
      EN: "Sterkt truet",
      CR: "Kritisk truet",
      EW: "Utdødd i vill tilstand",
      EX: "Utdødd",
    };

    return statuses[status] ?? status;
  }

  return (
    <section className={styles.detail}>
      <div className={styles.image}>
        {animal.default_photo && (
          <Image
            src={animal.default_photo.medium_url}
            width={500}
            height={500}
            loading="eager"
            alt={animal.preferred_common_name ?? animal.name}
          />
        )}
      </div>

      <div className={styles.content}>
        <h1>{animal.preferred_common_name ?? animal.name}</h1>

        <p>
          <span>Vitenskapelig navn</span>
          {animal.name}
        </p>

        {animal.iconic_taxon_name && (
          <p>
            <span>Dyregruppe</span>
            {animal.iconic_taxon_name}
          </p>
        )}

        {animal.observations_count !== undefined && (
          <p>
            <span>Observasjoner på iNaturalist</span>
            {animal.observations_count}
          </p>
        )}

        <p>
          <span>Bevaringsstatus</span>

          {animal.conservation_status ? (
            <>
              {getConservationStatus(animal.conservation_status.status)} (
              {animal.conservation_status.status})
              <br />
              {animal.conservation_status.authority}
            </>
          ) : (
            "Ingen bevaringsstatus tilgjengelig"
          )}
        </p>
      </div>
    </section>
  );
}

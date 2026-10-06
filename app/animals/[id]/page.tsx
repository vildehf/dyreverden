import Image from "next/image";
import { type Animal } from "@/types/animal";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function AnimalPage({ params }: Props) {
  const { id } = await params;

  const response = await fetch(`https://api.inaturalist.org/v1/taxa/${id}`);

  if (!response.ok) {
    notFound();
  }

  const data = await response.json();

  if (!data.results?.length) {
    notFound();
  }

  const animal: Animal = data.results[0];

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
    <section className="animal-detail">
      <div className="animal-detail-image">
        {animal.default_photo && (
          <Image
            src={animal.default_photo.medium_url}
            width={500}
            height={500}
            alt={animal.preferred_common_name ?? animal.name}
          />
        )}
      </div>

      <div className="animal-detail-content">
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

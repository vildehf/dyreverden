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

  return (
    <section>
      <h1>{animal.preferred_common_name ?? animal.name}</h1>

      {animal.default_photo && (
        <Image
          src={animal.default_photo.medium_url}
          width={500}
          height={500}
          alt={animal.preferred_common_name ?? animal.name}
        />
      )}

      <p>Vitenskapelig navn: {animal.name}</p>
      {animal.iconic_taxon_name && (
        <p>Dyregruppe: {animal.iconic_taxon_name}</p>
      )}
      {animal.conservation_status && (
        <p>
          Bevaringsstatus: {animal.conservation_status.status} (
          {animal.conservation_status.authority})
        </p>
      )}
    </section>
  );
}

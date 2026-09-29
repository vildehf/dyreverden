import Image from "next/image";
import { type Animals } from "@/types/animal";

export default async function AnimalsPage() {
  const response = await fetch(
    "https://api.inaturalist.org/v1/taxa?taxon_id=1&rank=species&per_page=12",
  );

  if (!response.ok) {
    throw new Error("Kunne ikke hente dyr");
  }

  const data = await response.json();
  const animals: Animals = data.results;

  return (
    <>
      <h1>Utforsk dyr</h1>

      <section>
        {animals.map((animal) => (
          <article key={animal.id}>
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
        ))}
      </section>
    </>
  );
}

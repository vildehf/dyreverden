import { type Animals, type Animal } from "@/types/animal";

export async function getAnimals(): Promise<Animals> {
  const response = await fetch(
    "https://api.inaturalist.org/v1/taxa?taxon_id=1&rank=species&per_page=12",
  );

  if (!response.ok) {
    throw new Error("Kunne ikke hente dyr");
  }

  const data = await response.json();

  return data.results;
}

export async function getAnimalById(id: string): Promise<Animal | null> {
  const response = await fetch(`https://api.inaturalist.org/v1/taxa/${id}`);

  if (!response.ok) {
    return null;
  }

  const data = await response.json();

  return data.results?.[0] ?? null;
}

export async function searchAnimals(query: string): Promise<Animals> {
  const response = await fetch(
    `https://api.inaturalist.org/v1/taxa/autocomplete?q=${encodeURIComponent(query)}&taxon_id=1`,
  );

  if (!response.ok) {
    throw new Error("Kunne ikke hente søkeresultater");
  }

  const data = await response.json();

  return data.results.slice(0, 6);
}

import { type Animals, type Animal } from "@/types/animal";

function filterPhotoLicense(animal: Animal): Animal {
  const photo = animal.default_photo;

  if (!photo) {
    return animal;
  }

  const allowedLicenses = [
    "cc0",
    "cc-by",
    "cc-by-nc",
    "cc-by-sa",
    "cc-by-nc-sa",
  ];

  if (
    !photo.license_code ||
    !allowedLicenses.includes(photo.license_code.toLowerCase())
  ) {
    return {
      ...animal,
      default_photo: undefined,
    };
  }

  return animal;
}

export async function getAnimals(): Promise<Animals> {
  const response = await fetch(
    "https://api.inaturalist.org/v1/taxa?taxon_id=1&rank=species&per_page=12",
  );

  if (!response.ok) {
    throw new Error("Kunne ikke hente dyr");
  }

  const data = await response.json();

  return (data.results as Animals).map(filterPhotoLicense);
}

export async function getAnimalById(id: string): Promise<Animal | null> {
  const response = await fetch(`https://api.inaturalist.org/v1/taxa/${id}`);

  if (response.status === 404) {
    return null;
  }

  if (!response.ok) {
    throw new Error("Kunne ikke hente dyret");
  }

  const data = await response.json();

  const animal: Animal | undefined = data.results?.[0];

  return animal ? filterPhotoLicense(animal) : null;
}

export async function searchAnimals(query: string): Promise<Animals> {
  const response = await fetch(
    `https://api.inaturalist.org/v1/taxa?q=${encodeURIComponent(query)}&taxon_id=1&rank=species&per_page=30`,
  );

  if (!response.ok) {
    throw new Error("Kunne ikke hente søkeresultater");
  }

  const data = await response.json();

  const search = query.toLowerCase().trim();
  const animals: Animals = data.results.filter((animal: Animal) => {
    const name = (animal.preferred_common_name ?? animal.name).toLowerCase();

    return name.includes(search);
  });

  animals.sort((a, b) => {
    const nameA = (a.preferred_common_name ?? a.name).toLowerCase();
    const nameB = (b.preferred_common_name ?? b.name).toLowerCase();

    if (nameA === search) return -1;
    if (nameB === search) return 1;

    return 0;
  });

  return animals.slice(0, 6).map(filterPhotoLicense);
}

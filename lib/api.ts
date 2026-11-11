import { type Animals, type Animal } from '@/types/animal'

// Sjekker om dyrets bilde har en tillatt Creative Commons-lisens.
function filterPhotoLicense(animal: Animal): Animal {
  const photo = animal.default_photo

  if (!photo) {
    return animal
  }

  const allowedLicenses = ['cc0', 'cc-by', 'cc-by-nc', 'cc-by-sa', 'cc-by-nc-sa']

  if (!photo.license_code || !allowedLicenses.includes(photo.license_code.toLowerCase())) {
    return {
      ...animal,
      default_photo: undefined,
    }
  }

  return animal
}

// Henter en liste med dyrearter fra iNaturalist API-et.
export async function getAnimals(): Promise<Animals> {
  const response = await fetch(
    'https://api.inaturalist.org/v1/taxa?taxon_id=1&rank=species&per_page=12',
  )

  if (!response.ok) {
    throw new Error('Kunne ikke hente dyr')
  }

  const data = await response.json()

  return (data.results as Animals).map(filterPhotoLicense)
}

// Henter ett dyr basert på ID og returnerer null hvis dyret ikke finnes.
export async function getAnimalById(id: string): Promise<Animal | null> {
  // Avviser ugyldige ID-er før vi sender en forespørsel til API-et.
  const numericId = Number(id)

  if (!/^[1-9]\d*$/.test(id) || !Number.isSafeInteger(numericId)) {
    return null
  }

  const response = await fetch(`https://api.inaturalist.org/v1/taxa/${id}`)

  if (response.status === 404) {
    return null
  }

  if (!response.ok) {
    throw new Error('Kunne ikke hente dyret')
  }

  const data = await response.json()
  const animal: Animal | undefined = data.results?.[0]

  if (!animal) {
    return null
  }

  // Godtar bare arter som tilhører dyreriket.
  if (!animal.ancestor_ids?.includes(1)) return null
  if (animal.rank !== 'species') return null

  return filterPhotoLicense(animal)
}

// Søker etter dyrearter og viser opptil seks relevante resultater.
export async function searchAnimals(
  query: string,
  sort: string = 'relevance',
  group: string = 'all',
): Promise<Animals> {
  const response = await fetch(
    `https://api.inaturalist.org/v1/taxa?q=${encodeURIComponent(query)}&taxon_id=1&rank=species&per_page=30`,
  )

  if (!response.ok) {
    throw new Error('Kunne ikke hente søkeresultater')
  }

  const data = await response.json()
  const search = query.toLowerCase().trim()

  const animals: Animals = data.results.filter((animal: Animal) => {
    const commonName = (animal.preferred_common_name ?? '').toLowerCase()
    const scientificName = animal.name.toLowerCase()
    const matchesSearch = commonName.includes(search) || scientificName.includes(search)
    const matchesGroup = group === 'all' || animal.iconic_taxon_name === group

    return matchesSearch && matchesGroup
  })

  // Sorterer alfabetisk eller etter relevans.
  if (sort === 'alphabetical') {
    animals.sort((a, b) => {
      const nameA = a.preferred_common_name ?? a.name
      const nameB = b.preferred_common_name ?? b.name

      return nameA.localeCompare(nameB, 'no')
    })
  } else {
    animals.sort((a, b) => {
      const nameA = (a.preferred_common_name ?? a.name).toLowerCase()
      const nameB = (b.preferred_common_name ?? b.name).toLowerCase()

      if (nameA === search && nameB !== search) return -1
      if (nameB === search && nameA !== search) return 1

      return 0
    })
  }

  return animals.slice(0, 6).map(filterPhotoLicense)
}

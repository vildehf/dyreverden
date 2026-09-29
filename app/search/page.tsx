import AnimalGrid from "@/components/AnimalGrid";
import { type Animals } from "@/types/animal";

type Props = {
  searchParams: Promise<{ q?: string }>;
};

export default async function SearchPage({ searchParams }: Props) {
  const { q } = await searchParams;

  if (!q) {
    return <h1>Du har ikke søkt etter noe dyr</h1>;
  }

  const response = await fetch(
    `https://api.inaturalist.org/v1/taxa/autocomplete?q=${encodeURIComponent(q)}&taxon_id=1`,
  );

  if (!response.ok) {
    throw new Error("Kunne ikke hente søkeresultater");
  }

  const data = await response.json();
  const animals: Animals = data.results.slice(0, 6);

  if (animals.length === 0) {
    return (
      <>
        <h1>Søkeresultater for: {q}</h1>
        <p>Ingen dyr funnet.</p>
      </>
    );
  }

  return (
    <>
      <h1>søkeresultater for: {q}</h1>
      <AnimalGrid animals={animals} />
    </>
  );
}

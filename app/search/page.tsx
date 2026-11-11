import AnimalGrid from '@/components/AnimalGrid/AnimalGrid'
import styles from './page.module.css'
import { searchAnimals } from '@/lib/api'
import type { Metadata } from 'next'

type Props = {
  searchParams: Promise<{
    q?: string | string[]
    sort?: string | string[]
    group?: string | string[]
  }>
}

export const metadata: Metadata = {
  title: 'Søk',
}

// Henter søkeordet fra URL-en og viser relevante søkeresultater.
export default async function SearchPage({ searchParams }: Props) {
  const params = await searchParams
  const q = (Array.isArray(params.q) ? params.q[0] : (params.q ?? '')).trim()
  const sortParam = Array.isArray(params.sort) ? params.sort[0] : params.sort
  const sort = sortParam === 'alphabetical' ? 'alphabetical' : 'relevance'
  const groupParam = Array.isArray(params.group) ? params.group[0] : params.group
  const allowedGroups = ['Mammalia', 'Aves', 'Reptilia', 'Amphibia']
  const group = groupParam && allowedGroups.includes(groupParam) ? groupParam : 'all'
  // Viser en melding hvis brukeren åpner søkesiden uten å ha søkt.
  if (!q) {
    return (
      <section className={styles.page}>
        <h1>Du har ikke søkt etter noe dyr</h1>
      </section>
    )
  }

  const animals = await searchAnimals(q, sort, group) // Viser en forklaring hvis søket ikke gir noen resultater.
  if (animals.length === 0) {
    return (
      <section className={styles.page}>
        <h1>Søkeresultater for: {q}</h1>
        <p>
          Ingen dyr funnet. Prøv å søke på dyrets engelske navn, for eksempel «Elephant» eller «Red
          Fox».
        </p>
      </section>
    )
  }

  return (
    <section className={styles.page}>
      <h1>Søkeresultater for: {q}</h1>
      <p>Viser opptil 6 søkeresultater.</p>

      <form action="/search" method="get" className={styles.sortForm}>
        <input type="hidden" name="q" value={q} />

        <label htmlFor="group">Dyregruppe:</label>

        <select id="group" name="group" defaultValue={group}>
          <option value="all">Alle dyr</option>
          <option value="Mammalia">Pattedyr</option>
          <option value="Aves">Fugler</option>
          <option value="Reptilia">Reptiler</option>
          <option value="Amphibia">Amfibier</option>
        </select>

        <label htmlFor="sort">Sorter etter: </label>

        <select id="sort" name="sort" defaultValue={sort}>
          <option value="relevance">Relevans</option>
          <option value="alphabetical">Alfabetisk (A–Å)</option>
        </select>

        <button type="submit">Sorter</button>
      </form>

      <AnimalGrid animals={animals} />
    </section>
  )
}

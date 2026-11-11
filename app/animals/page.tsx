import AnimalGrid from '@/components/AnimalGrid/AnimalGrid'
import { getAnimals } from '@/lib/api'
import styles from './page.module.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Utforsk dyr',
}

export const revalidate = 3600

export default async function AnimalsPage() {
  const animals = await getAnimals()

  return (
    <section className={styles.page}>
      <h1>Utforsk dyr</h1>
      <AnimalGrid animals={animals} />
    </section>
  )
}

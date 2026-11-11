import Link from 'next/link'
import styles from './not-found.module.css'

export default function NotFound() {
  return (
    <section>
      <h1>Siden ble ikke funnet</h1>
      <p>Vi kunne ikke finne siden du leter etter.</p>

      <Link href="/" className={styles.link}>
        Tilbake til forsiden
      </Link>
    </section>
  )
}

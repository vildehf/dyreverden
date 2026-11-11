'use client'

import styles from './error.module.css'

export default function Error({ reset }: { reset: () => void }) {
  return (
    <section className={styles.error}>
      <h1>Noe gikk galt</h1>
      <p>Vi kunne ikke hente informasjonen akkurat nå</p>
      <button type="button" className={styles.button} onClick={() => reset()}>
        Prøv igjen
      </button>
    </section>
  )
}

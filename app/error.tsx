"use client";

export default function Error({ reset }: { reset: () => void }) {
  return (
    <section>
      <h1>Noe gikk galt</h1>
      <p>Vi kunne ikke hente informasjonen akkurat nå</p>
      <button onClick={() => reset()}>Prøv igjen</button>
    </section>
  );
}

"use client";

import Form from "next/form";
import styles from "../SearchBar/SearchBar.module.css";

export default function SearchBar() {
  return (
    <Form
      action="/search"
      className={styles.form}
      onSubmit={(event) => {
        const form = event.currentTarget;
        setTimeout(() => form.reset(), 0);
      }}
    >
      <input
        className={styles.input}
        type="search"
        name="q"
        required
        autoComplete="off"
        placeholder="Søk etter dyr"
      />
      <button type="submit" className={styles.button} aria-label="Søk">
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.35-4.35" />
        </svg>
      </button>
    </Form>
  );
}

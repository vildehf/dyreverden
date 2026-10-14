import Form from "next/form";
import styles from "../SearchBar/SearchBar.module.css";

export default function SearchBar() {
  return (
    <Form action="/search" className={styles.form}>
      <input
        className={styles.input}
        type="search"
        name="q"
        required
        autoComplete="off"
        placeholder="Søk etter dyr"
      />
      <button className={styles.button} type="submit">
        Søk
      </button>
    </Form>
  );
}

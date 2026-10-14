import styles from "../Footer/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.logo}>Dyreverden</p>

      <p className={styles.tagline}>Utforsk. Oppdag. Lær.</p>

      <p className={styles.copyright}>© 2026 Dyreverden</p>
    </footer>
  );
}

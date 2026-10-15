import gridStyles from "./AnimalGrid.module.css";
import styles from "./AnimalGridSkeleton.module.css";

export default function AnimalGridSkeleton() {
  return (
    <div role="status" aria-label="Laster inn dyr">
      <p>Laster inn dyr...</p>

      <div className={gridStyles.grid} aria-hidden="true">
        {Array.from({ length: 6 }, (_, index) => (
          <div className={styles.card} key={index}>
            <div className={styles.image}></div>
            <div className={styles.title}></div>
            <div className={styles.subtitle}></div>
          </div>
        ))}
      </div>
    </div>
  );
}

import styles from './styles.module.css'

export function SectionItem() {
  return (
    <button className={styles.container} type="button">
      <div className={`${styles.image_container} ${styles.selected}`}>
        <img src="https://preodemo.gumlet.io/usr/venue/7602/section/646fbe4c64a6f.png" />
      </div>
      <span className={`${styles.selected}`}>Burgers</span>
    </button>
  )
}

import styles from './styles.module.css'

type SectionItemProps = {
  name: string
  image: string
  selected: boolean
  onSelect: () => void
}

export function SectionItem({
  name,
  image,
  selected,
  onSelect,
}: SectionItemProps) {
  return (
    <button
      className={styles.container}
      type="button"
      onClick={() => onSelect()}
    >
      <div
        className={`${styles.image_container} ${selected && styles.selected}`}
      >
        <img src={image} />
      </div>
      <span className={`${selected && styles.selected}`}>{name}</span>
    </button>
  )
}

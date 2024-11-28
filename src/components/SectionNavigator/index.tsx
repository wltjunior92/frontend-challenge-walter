import { SectionItem } from './SectionItem'
import styles from './styles.module.css'

export function SectionNavigator() {
  return (
    <nav className={styles.container}>
      <div className={styles.content}>
        <SectionItem />
        <SectionItem />
        <SectionItem />
      </div>
    </nav>
  )
}

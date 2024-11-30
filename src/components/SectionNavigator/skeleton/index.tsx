import '../../../global.css'

import styles from './styles.module.css'

export function SectionNavigatorSkeleton() {
  return (
    <nav className={styles.container}>
      <div className={styles.content}>
        <div className={`${styles.item_skeleton} skeleton`} />
        <div className={`${styles.item_skeleton} skeleton`} />
        <div className={`${styles.item_skeleton} skeleton`} />
      </div>
    </nav>
  )
}

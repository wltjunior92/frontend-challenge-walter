import { Menu } from '../Menu'
import { MenuMobile } from '../MenuMobile'
import styles from './styles.module.css'

export function Header() {
  return (
    <header className={styles.header}>
      <Menu />
      <MenuMobile />
    </header>
  )
}

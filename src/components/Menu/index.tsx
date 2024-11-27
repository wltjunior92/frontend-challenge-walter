import { Link, useLocation } from 'react-router-dom'

import styles from './styles.module.css'

export function Menu() {
  const { pathname } = useLocation()
  return (
    <>
      <nav className={styles.menu}>
        <div className={styles.menu_item}>
          <Link data-current={pathname === '/'} to="/">
            <span>MENU</span>
          </Link>
        </div>
        <div className={styles.menu_item}>
          <Link data-current={pathname === '/sign-in'} to="/sign-in">
            <span>ENTRAR</span>
          </Link>
        </div>
        <div className={styles.menu_item}>
          <Link data-current={pathname === '/contact'} to="/contact">
            <span>CONTATO</span>
          </Link>
        </div>
      </nav>
    </>
  )
}

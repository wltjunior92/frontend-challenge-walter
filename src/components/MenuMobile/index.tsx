import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

import menuIcon from '../../assets/menuIcon.svg'
import styles from './styles.module.css'

export function MenuMobile() {
  const [isOpen, setIsOpen] = useState(false)

  const { pathname } = useLocation()

  const getCurrentPageName = () => {
    switch (pathname) {
      case '/':
        return 'Menu'
      case '/sign-in':
        return 'Entrar'
      case '/contact':
        return 'Contato'
      default:
        return 'MENU'
    }
  }

  const toggleOpenMenu = () => {
    setIsOpen(open => !open)
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <span className={styles.page_title}>{getCurrentPageName()}</span>
        <button
          type="button"
          className={styles.menu_icon}
          onClick={toggleOpenMenu}
        >
          <img src={menuIcon} alt="Menu Icon" />
        </button>
      </div>
      <nav className={`${styles.menu} ${!isOpen && styles.closed}`}>
        <div
          className={`${styles.menu_item} ${pathname === '/' && styles.hidden}`}
        >
          <Link to="/">
            <span>MENU</span>
          </Link>
        </div>
        <div
          className={
            `${styles.menu_item} ${pathname === '/sign-in' && styles.hidden}`
          }
        >
          <Link to="/sign-in">
            <span>ENTRAR</span>
          </Link>

        </div>
        <div
          className={
            `${styles.menu_item} ${pathname === '/contact' && styles.hidden}`
          }
        >
          <Link to="/contact">
            <span>CONTATO</span>
          </Link>
        </div>
      </nav>
    </div>
  )
}

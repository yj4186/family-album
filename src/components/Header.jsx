import { NavLink } from 'react-router-dom'
import Logo from './Logo'
import styles from './Header.module.css'

const NAV_ITEMS = [
  { to: '/', label: '홈', end: true },
  { to: '/about', label: '소개', end: false },
  { to: '/gallery', label: '갤러리', end: false },
]

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Logo />
        <nav aria-label="주요 메뉴">
          <ul className={styles.nav}>
            {NAV_ITEMS.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.end}
                  className={({ isActive }) =>
                    isActive ? `${styles.link} ${styles.active}` : styles.link
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header

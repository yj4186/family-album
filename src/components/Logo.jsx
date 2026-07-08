import { Link } from 'react-router-dom'
import styles from './Logo.module.css'

function Logo() {
  return (
    <Link to="/" className={styles.logo} aria-label="가족앨범 홈으로 이동">
      <svg className={styles.icon} viewBox="0 0 64 40" role="img" aria-hidden="true">
        <defs>
          <linearGradient id="cloudGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#4a90d9" />
            <stop offset="100%" stopColor="#2c5f9e" />
          </linearGradient>
        </defs>
        <g fill="url(#cloudGradient)">
          <rect x="12" y="20" width="40" height="15" rx="7.5" />
          <circle cx="20" cy="22" r="10" />
          <circle cx="33" cy="15" r="13" />
          <circle cx="45" cy="21" r="9" />
        </g>
      </svg>
      <span className={styles.wordmark}>가족앨범</span>
    </Link>
  )
}

export default Logo

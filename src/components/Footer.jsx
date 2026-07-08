import styles from './Footer.module.css'

const SOCIAL_LINKS = [
  { label: 'Instagram', href: '#' },
  { label: 'YouTube', href: '#' },
]

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p className={styles.copyright}>© 2026 가족앨범. All rights reserved.</p>
        <ul className={styles.social}>
          {SOCIAL_LINKS.map((link) => (
            <li key={link.label}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
        <p className={styles.contact}>contact@familyalbum.example.com</p>
      </div>
    </footer>
  )
}

export default Footer

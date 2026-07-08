import { Link } from 'react-router-dom'
import styles from './Home.module.css'

const HERO_IMAGE = {
  url: 'https://images.pexels.com/photos/16299046/pexels-photo-16299046.jpeg?auto=compress&cs=tinysrgb&w=1200',
  alt: '햇살 아래 편안하게 잠든 강아지',
}

function Home() {
  return (
    <section className={styles.hero}>
      <div className={styles.text}>
        <h1>제이와 꿈이의 가족앨범에 오신 것을 환영합니다</h1>
        <p>우리 가족의 소소한 일상과 꿈이의 사진들을 모아두었어요.</p>
        <div className={styles.actions}>
          <Link to="/about" className={styles.primaryButton}>
            가족 소개 보기
          </Link>
          <Link to="/gallery" className={styles.secondaryButton}>
            갤러리 보기
          </Link>
        </div>
      </div>
      <img className={styles.heroImage} src={HERO_IMAGE.url} alt={HERO_IMAGE.alt} />
    </section>
  )
}

export default Home

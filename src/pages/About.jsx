import family from '../data/family.json'
import styles from './About.module.css'

function About() {
  return (
    <section className={styles.about}>
      <h1>가족 소개</h1>
      <p className={styles.intro}>제이와 꿈이, 단 둘이지만 누구보다 다정한 우리 가족을 소개합니다.</p>
      <div className={styles.cards}>
        {family.map((member) => (
          <article key={member.id} className={styles.card}>
            <img src={member.photoUrl} alt={member.name} className={styles.photo} />
            <h2>{member.name}</h2>
            <p className={styles.role}>{member.role}</p>
            <p className={styles.bio}>{member.bio}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default About

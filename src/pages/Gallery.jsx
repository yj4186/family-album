import gallery from '../data/gallery.json'
import styles from './Gallery.module.css'

function Gallery() {
  return (
    <section className={styles.gallery}>
      <h1>갤러리</h1>
      <p className={styles.intro}>꿈이를 닮은 강아지 사진들을 모아봤어요.</p>
      <div className={styles.grid}>
        {gallery.map((photo) => (
          <figure key={photo.id} className={styles.item}>
            <img src={photo.url} alt={photo.alt} loading="lazy" />
          </figure>
        ))}
      </div>
    </section>
  )
}

export default Gallery

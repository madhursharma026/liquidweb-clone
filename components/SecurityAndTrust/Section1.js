import styles from '../../styles/AboutUs/AboutUs.module.css'
import CommonStyle from '../../styles/commomStyle.module.css'

export default function Section1() {
  return (
    <div
      style={{
        background:
          'url("https://www.liquidweb.com/wp-content/uploads/2024/05/gradient-1-1.png")',
        backgroundSize: 'cover',
        backgroundPosition: '51% 41%',
        backgroundAttachment: 'scroll',
        backgroundRepeat: 'no-repeat',
        color: 'white',
      }}
    >
      <div className={styles.contentContainer}>
        <div className={CommonStyle.ContainerWidth}>
          <h1 className="mt-5" style={{ fontSize: 'calc(2vw + 2vh + 1vmin)' }}>
            Certifications
          </h1>
        </div>
      </div>
    </div>
  )
}

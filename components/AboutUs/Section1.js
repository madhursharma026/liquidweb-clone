import styles from '../../styles/AboutUs/AboutUs.module.css'
import CommonStyle from '../../styles/commomStyle.module.css'

export default function Section1() {
  return (
    <div className={styles.contentContainer}>
      <div className={CommonStyle.ContainerWidth}>
        <h1 className={`${styles.mainHeading} mt-4`}>
          At Liquid Web, we’re committed to excellence in hosting
        </h1>
        <p
          className="mt-3 pb-lg-5"
          style={{
            fontSize: '20px',
            letterSpacing: '1.4px',
            maxWidth: '800px',
          }}
        >
          With 18 state-of-the-art data centers, we offer unbeatable reliability
          and peak performance. <b>Anytime, anywhere.</b>
        </p>
      </div>
    </div>
  )
}

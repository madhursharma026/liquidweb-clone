import CommonStyle from '../../styles/commomStyle.module.css'
import styles from '../../styles/Support/support.module.css'

export default function Section4() {
  return (
    <div className={`${CommonStyle.ContainerWidth} py-5 my-5`}>
      <h1 className="fw-normal">Ampleharvest.org: A migration success story</h1>
      <div className="row mt-4">
        <div className="col-lg-6 mt-4">
          <div className={`${styles.cardContainer} h-100 rounded-3`}>
            <div className={`p-md-5 rounded-3 ${styles.testimonialCard}`}>
              <img
                src="/supportSection2Image5.png" // Replace with actual logo
                alt="AmpleHarvest.org"
                className={styles.testimonialLogo}
              />
              <h3 className={`mt-5 fw-lighter`}>
                “Our mission requires VPS hosting that is up to the task, and we
                found that.”
              </h3>
              <button
                className={`rounded-pill mt-3 text-center ${styles.customButtonWhite}`}
                style={{
                  marginRight: '1rem',
                }}
              >
                Read the customer story
                <span className={styles.hiddenArrow}> →</span>
              </button>
            </div>
          </div>
        </div>
        <div className="col-lg-6 mt-4">
          <img
            src="/supportSection2Image4.png" // Replace with actual logo
            alt="#ImgNotFound"
            className="w-100 img-fluid h-100 rounded-3"
          />
        </div>
        <div className="col-lg-4 col-md-6 mt-4">
          <div
            className={`d-flex flex-column justify-content-center align-items-center text-center p-4 rounded-3 h-100 ${styles.cardContainer}`}
          >
            <img
              src="/supportSection2Image6.png"
              alt="Wave Icon"
              className="mb-3"
            />
            <h2 className={styles.percentage}>4,000%</h2>
            <p className={styles.description}>
              faster support response <br /> than previous host
            </p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mt-4">
          <img
            src="/supportSection2Image7.jpg"
            alt="#ImgNotFound"
            className="w-100 rounded-3"
          />
        </div>
        <div className="col-lg-4 col-md-6 mt-4">
          <div
            className={`d-flex flex-column justify-content-center align-items-center text-center p-4 rounded-3 h-100 bg-black ${styles.cardContainer}`}
          >
            <img
              src="/supportSection2Image8.png"
              alt="Wave Icon"
              className="mb-3"
            />
            <h2 className={`text-white ${styles.percentage}`}>4.8 billion</h2>
            <p className={`text-white ${styles.description}`}>
              impressions scaled
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

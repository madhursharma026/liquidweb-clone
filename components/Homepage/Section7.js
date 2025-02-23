import CommonStyle from '../../styles/commomStyle.module.css'
import styles from '../../styles/Homepage/Homepage.module.css'

const Section7 = () => {
  return (
    <div className={CommonStyle.ContainerWidth}>
      <div className={`${styles.videoBackground2} rounded-4`}>
        <video className={styles.video2} autoPlay loop muted playsInline>
          <source
            src="https://www.liquidweb.com/wp-content/uploads/2024/10/AdobeStock_705424691_more_compressed_crunch.webm"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        <div className={styles.content2}>
          <div className={styles.contentContainer2}>
            <div className="row p-md-5 p-3">
              <div className="col-lg-6 p-3">
                <div style={{ maxWidth: '400px' }}>
                  <h1
                    className="fw-normal text-white"
                    style={{ fontSize: '2.5rem', lineHeight: '70px' }}
                  >
                    Get started with{' '}
                    <span
                      className="border rounded px-2"
                      style={{ whiteSpace: 'nowrap' }}
                    >
                      Liquid Web
                    </span>
                  </h1>
                </div>
              </div>

              <div className="col-lg-6 text-white p-3">
                <div style={{ maxWidth: '400px' }}>
                  <p className="fw-normal mb-3 fs-6">
                    Our experienced support specialists make setting up web
                    hosting services or transitioning from your current host
                    stress-free.
                  </p>
                  <button
                    type="button"
                    className="btn btn-light rounded-pill mt-3"
                  >
                    Explore All Hosting
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-dark text-white ms-3 rounded-pill mt-3"
                  >
                    Chat with an expert
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section7

import CommonStyle from '../../styles/commomStyle.module.css'
import styles from '../../styles/Homepage/Homepage.module.css'

const Section4 = () => {
  return (
    <div className={`${CommonStyle.ContainerWidth} pt-md-5`}>
      <div className={`${styles.videoBackground2} rounded-4 mt-5`}>
        <video className={styles.video2} autoPlay loop muted playsInline>
          <source src="/lastSectionVideoBG.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className={styles.content2}>
          <div className={styles.contentContainer2}>
            <div className="row p-md-5 p-3">
              <div className="col-lg-6 p-3">
                <div style={{ maxWidth: '400px' }}>
                  <h1
                    className="fw-normal text-white"
                    style={{ fontSize: '2.5rem', lineHeight: '60px' }}
                  >
                    Seamless set up and{' '}
                    <span
                      className="border rounded px-2"
                      style={{ whiteSpace: 'nowrap' }}
                    >
                      migration
                    </span>
                  </h1>
                </div>
              </div>

              <div className="col-lg-6 text-white p-3">
                <div style={{ maxWidth: '400px' }}>
                  <p className="fw-normal mb-3 fs-6">
                    Our expert support team ensures a smooth, stress-free
                    experience when setting up your web hosting or switching
                    from your current provider.
                  </p>
                  <button
                    type="button"
                    className="btn btn-light rounded-pill mt-3"
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

export default Section4

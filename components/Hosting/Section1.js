import CommonStyle from '../../styles/commomStyle.module.css'
import styles from '../../styles/VpsHosting/VpsHosting.module.css'

const Icon = ({ path }) => (
  <svg
    width="15px"
    viewBox="0 0 1024 1024"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path d={path}></path>
  </svg>
)

export default function Section1() {
  return (
    <div className="p-0">
      <div className={styles.contentContainer}>
        <div className={CommonStyle.ContainerWidth}>
          <div className="row mt-5">
            {/* Left Column */}
            <div className="col-md-6">
              <span
                className="border px-2 py-1 rounded text-primary"
                style={{ letterSpacing: '1.4px', fontSize: '12px' }}
              >
                Hosting services
              </span>
              <h1 className={`${styles.mainHeading} mt-4`}>
                Our hosting services
              </h1>
              <p>
                Scaling your hosting is a breeze with Liquid Web. Our managed
                hosting caters to businesses of all sizes, from early-stage
                startups to mature companies needing enterprise hosting
                environments.
              </p>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <button
                  className={`rounded-pill text-center ${styles.customButton}`}
                  style={{
                    marginRight: '1rem',
                  }}
                >
                  Explore Hosting Services
                  <span className={styles.hiddenArrow}> →</span>
                </button>

                <button
                  className="rounded-pill bg-white text-black"
                  style={{
                    alignItems: 'center',
                    display: 'inline-flex',
                    padding: '0.5rem 1rem',
                    border: '1px solid #000',
                  }}
                >
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    width="40"
                    className="img-fluid rounded-circle"
                    style={{ marginRight: '0.5rem' }}
                  >
                    <source src="/chatWithAnExpertVideo.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>

                  <span style={{ marginRight: '0.25rem' }}>
                    Chat with an expert
                  </span>
                </button>
              </div>
            </div>
            {/* Right Column */}
            <div className="col-md-6 mt-md-0 mt-5 d-flex flex-column justify-content-center">
              <div className="d-flex align-items-center justify-content-center">
                <img
                  src="/hostingServiceSection1Image.png"
                  alt="#ImgNotFound"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

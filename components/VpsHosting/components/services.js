import { useEffect, useState } from 'react'
import styles from '../../../styles/VpsHosting/VpsHosting.module.css'

const Services = ({
  title,
  description,
  btnNeeded,
  btnText,
  videoContainerORGraphContainer,
}) => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsOpen((prev) => !prev)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  const [expanded, setExpanded] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setExpanded(true)
      setTimeout(() => setExpanded(false), 2000) // Close after 2 seconds
    }, 4000) // Open after 1 second

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="row align-items-center mt-5 pt-md-5">
      <div className="col-md-6">
        <div>
          <h1 className="fw-normal lh-2" style={{ maxWidth: '300px' }}>
            {title}
          </h1>
          <p
            className="fw-normal mt-3"
            style={{ fontSize: '18px', maxWidth: '450px' }}
          >
            {description}
          </p>
          {btnNeeded ? (
            <button
              className={`rounded-pill text-center mt-5 ${styles.customButton}`}
            >
              {btnText} <span className={styles.hiddenArrow}>→</span>
            </button>
          ) : (
            <></>
          )}
        </div>
      </div>

      <div className="col-md-6 mt-md-0 mt-3 text-center">
        {videoContainerORGraphContainer === 'video' ? (
          <div className={`${styles.circleWrapper} w-100`}>
            <div className={styles.circleContainer}>
              <div
                className={`${styles.circle} ${
                  isOpen ? styles.circleOpen : styles.circleClose
                }`}
              ></div>
              <video
                src="/scalability.mp4"
                autoPlay
                loop
                muted
                className={`rounded-4 ${styles.circleVideo} ms-5 mt-5`}
              />
            </div>
          </div>
        ) : null}

        {videoContainerORGraphContainer === 'graph' ? (
          <div className={styles.graphContainer}>
            <div className={styles.barsWrapper}>
              {[
                { label: 'Rackspace', width: '25%' },
                { label: 'DigitalOcean', width: '50%' },
                { label: 'Amazon', width: '75%' },
                { label: 'Liquid Web', width: '100%', black: true },
              ].map(({ label, width, black }, index) => (
                <div key={index} className={styles.barContainer}>
                  <span className={styles.label}>{label}</span>
                  <div className={styles.barBackground}>
                    <div
                      className={`${
                        black ? styles.barFillBlack : styles.barFillWhite
                      } ${expanded ? styles.expanded : styles.collapsed}`}
                      style={{ width: expanded ? width : '0%' }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default Services

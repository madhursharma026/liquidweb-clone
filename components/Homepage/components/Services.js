import styles from '../../../styles/Homepage/Homepage.module.css'

const Services = () => {
  return (
    <div className="row align-items-center mt-5 pt-md-5">
      {/* Left Side - Text */}
      <div className="col-lg-6">
        <div style={{ maxWidth: '400px' }}>
          <h2 className="fw-normal lh-2">
            Unbeatable
            <br />
            Hosting Uptime
          </h2>
          <p className="fw-normal mt-3" style={{ fontSize: '18px' }}>
            100% guaranteed network uptime means your business is always online,
            so you never miss a customer, a sale, or an opportunity to grow.
          </p>
          <button
            className={`rounded-pill text-center mt-2 ${styles.customButton}`}
          >
            Review our SLA <span className={styles.hiddenArrow}>→</span>
          </button>
        </div>
      </div>

      {/* Right Side - Circle Graphic */}
      <div className="col-lg-6 mt-lg-0 mt-3 text-center">
        <div className={`${styles.circleWrapper} w-100`}>
          <div className={`${styles.circle} my-md-5`}>
            <span className={styles.circleText}>
              100%
              <br />
              Uptime
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services

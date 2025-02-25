import styles from '../../../styles/Homepage/Homepage.module.css'

const Services = ({ title, description, btnText, imageOrVideo, sourceURL }) => {
  return (
    <div className="row align-items-center mt-5 pt-md-5">
      <div className="col-md-6">
        <h1 className="fw-normal lh-2" style={{ maxWidth: '340px' }}>
          {title}
        </h1>
        <p
          className="fw-normal mt-3"
          style={{ fontSize: '18px', maxWidth: '450px' }}
        >
          {description}
        </p>
        <button
          className={`rounded-pill text-center mt-2 ${styles.customButton}`}
          style={{ padding: '5px 20px' }}
        >
          {btnText} <span className={styles.hiddenArrow}>→</span>
        </button>
      </div>

      <div className="col-md-6 mt-md-0 mt-3 text-center">
        {imageOrVideo === 'image' ? (
          <img src={sourceURL} alt="Service visual" className="w-100 h-auto" />
        ) : imageOrVideo === 'video' ? (
          <video autoPlay loop muted playsInline className="w-100 h-auto">
            <source src={sourceURL} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : null}
      </div>
    </div>
  )
}

export default Services

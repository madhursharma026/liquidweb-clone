import Link from 'next/link'
import styles from '../../../styles/Homepage/Homepage.module.css'

const Business = ({ title, imgURL, videoURL, discription, btnText }) => {
  const mediaStyle = {
    width: '100%',
    height: '250px',
    objectFit: 'cover', // Ensures content fills the container without distortion
    borderRadius: '8px', // Consistent rounded corners
  }

  const containerStyle = {
    width: '100%',
    height: '250px',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '8px',
  }

  return (
    <div className="border-0 p-3">
      <hr />
      <h4 className="fw-normal">{title}</h4>

      <div style={containerStyle}>
        {videoURL ? (
          <video style={mediaStyle} autoPlay loop muted playsInline>
            <source src={videoURL} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <img src={imgURL} alt="Reseller Hosting" style={mediaStyle} />
        )}
      </div>

      <p className="mt-3 text-muted">{discription}</p>

      <Link
        href="#"
        style={{ fontSize: '14px' }}
        className={`btn ${styles.customButtonWhite} btn btn-outline-dark rounded-pill`}
      >
        {btnText} <span className={`pe-2 ${styles.hiddenArrow}`}>→</span>
      </Link>
    </div>
  )
}

export default Business

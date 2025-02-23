import CommonStyle from '../../styles/commomStyle.module.css'
import Styles from '../../styles/VpsHosting/VpsHosting.module.css'

export default function Section5() {
  return (
    <div className={`${CommonStyle.ContainerWidth} my-5 py-lg-5`}>
      {/* Video Background Section */}
      <div className={Styles.videoBackground2}>
        <video className={Styles.video2} autoPlay loop muted playsInline>
          <source
            src="https://www.liquidweb.com/wp-content/uploads/2024/09/Cloud-small.webm"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        {/* Content Overlay */}
        <div className={Styles.content2}>
          <div className={Styles.contentContainer2}>
            <div className="row p-md-5 p-3">
              <div className="col-lg-6 p-3">
                <button type="button" className="btn btn-light">
                  Dev-friendly
                </button>
                <h1
                  className="fw-normal text-white mt-3"
                  style={{ fontSize: '2.5rem', lineHeight: '55px' }}
                >
                  VPS hosting <br /> starting at just $5
                </h1>
              </div>

              <div className="col-lg-6 text-white p-3">
                <p className="fs-5 mb-5">
                  Experience the power of our VPS hosting for as little as $5 a
                  month—excellent value without sacrificing performance or
                  reliability.
                </p>
                <button
                  type="button"
                  className="btn btn-light rounded-pill mt-3"
                >
                  Explore Cloud VPS Hosting
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

      {/* Customer Review Section */}
      <div className={`mt-5 ${Styles.videoBackground2} text-white`}>
        <img
          src="https://www.liquidweb.com/wp-content/uploads/2024/08/illy-bg-1.png"
          alt="Background Image"
          className={`w-100 ${Styles.video2}`}
        />

        <div className="row p-md-5 p-3">
          <div className="col-lg-8 p-3">
            <img
              src="https://www.liquidweb.com/wp-content/uploads/2024/09/5-stars.svg"
              alt="5 Stars Rating"
            />
            <p className="mt-4 fs-3">Liquid Web is a synonym for excellence</p>
            <p>
              Hosting on Liquid Web has always been a delight. Been with these
              folks for the past 9+ years, have used their Cloud and dedicated
              solutions. Unparalleled tech support round the clock, great server
              performance and uptime. Would highly recommend to everyone.
            </p>
          </div>

          <div className="col-lg-4 text-white p-3 text-end">
            <button
              type="button"
              className="btn btn-outline-dark text-white ms-3 rounded-pill mt-5"
            >
              Read More Reviews
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

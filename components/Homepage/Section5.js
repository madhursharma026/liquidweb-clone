import CommonStyle from '../../styles/commomStyle.module.css'
import styles from '../../styles/Homepage/Homepage.module.css'

const Section5 = () => {
  return (
    <div className={`my-5 ${CommonStyle.ContainerWidth}`}>
      <div
        className="p-md-5 p-3 rounded row"
        style={{
          background:
            'linear-gradient(45deg,#E7EF7B,#F9FBDE,#FFFEFE,#FDF6ED,#F1DCC3,#BBD7E3,#B9E1F9,#B9E1F9)',
        }}
      >
        <div className="col-md-5">
          <p
            className="fw-normal"
            style={{ fontSize: '45px', lineHeight: '60px' }}
          >
            Can’t decide? <br /> We can{' '}
            <span
              className="px-2 rounded border"
              style={{ background: '#F5F4FF' }}
            >
              help
            </span>
          </p>
          <h5 className="fw-normal mt-5 pb-5" style={{ maxWidth: '450px' }}>
            Liquid Web is famous for our 24/7 live support—let’s get started.
            Chat with an expert now to find the web hosting service that’s just
            right for you.
          </h5>
          <button
            className={`rounded-pill text-center mt-4 ${styles.customButton}`}
          >
            Chat with an expert <span className={styles.hiddenArrow}>→</span>
          </button>
        </div>

        <div className="col-md-6 d-md-block d-none offset-md-1">
          <div className="d-flex align-items-center h-100">
            <div className="row">
              {[
                'https://www.liquidweb.com/wp-content/uploads/2024/10/AdobeStock_965548416-resized.webm',
                'https://www.liquidweb.com/wp-content/uploads/2024/10/AdobeStock_607994846_resized-2.webm',
              ].map((src, index) => (
                <div key={index} className="col-6">
                  <video
                    className="w-100 rounded-pill p-xxl-5 p-xl-4 p-lg-3 p-md-2"
                    autoPlay
                    loop
                    muted
                    playsInline
                  >
                    <source src={src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section5

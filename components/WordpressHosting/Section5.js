import CommonStyle from '../../styles/commomStyle.module.css'

const Section5 = () => {
  return (
    <div className={`${CommonStyle.ContainerWidth} mt-5 py-5`}>
      <section
        className="position-relative overflow-hidden py-5"
        style={{
          borderRadius: '24px',
          minHeight: '600px',
          backgroundColor: '#000', // fallback background if video doesn't load
        }}
      >
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 1,
          }}
        >
          <source src="/technicalSupport247Video.mp4" type="video/mp4" />
          {/* Add a fallback for browsers that don't support video */}
        </video>

        {/* Dark Overlay for contrast */}
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            background: 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.8))',
            zIndex: 2,
          }}
        />

        {/* Content Wrapper */}
        <div
          className="position-relative text-white h-100 d-flex flex-column justify-content-center p-4 p-md-5"
          style={{ zIndex: 3 }}
        >
          <div className="row">
            <div className="col-lg-8">
              {/* Left Column - Primary Info */}
              <div className="mb-4">
                <h1
                  className="fw-bold display-4 mb-0"
                  style={{ lineHeight: '1.2' }}
                >
                  24/7
                </h1>
                <p className="fs-4 mt-1">
                  support helped maximize
                  <br />
                  business efficiency
                </p>
              </div>
              <div className="mb-5">
                <span
                  style={{
                    background: 'rgba(255,255,255,0.15)',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '0.5rem',
                    fontSize: '0.9rem',
                  }}
                >
                  WordPress runs better on Sleeknode
                </span>
                <blockquote className="mt-3 mb-0">
                  <p className="fs-5 fst-italic">
                    “We can quickly create new accounts and set up
                    applications.”
                  </p>
                  <footer className="blockquote-footer text-white-50 mt-1">
                    Rob Riggs, President, Your Design Online
                  </footer>
                </blockquote>
              </div>
            </div>
            <div className="col-lg-4"></div>
          </div>

          {/* Bottom CTA Container */}
          <div
            className="rounded-4 mt-auto p-3 p-md-4"
            style={{
              background: 'rgba(0,0,0,0.25)',
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(255,255,255,0.1)',
            }}
          >
            <div className="d-flex flex-column flex-md-row align-items-start align-items-md-center justify-content-between">
              <div className="mb-3 mb-md-0">
                <p className="mb-1 fs-5">
                  Let our experts help you get your
                  <br />
                  projects up and running without delay.
                </p>
              </div>
              <button
                className="btn btn-light fw-semibold text-nowrap"
                style={{ borderRadius: '30px' }}
              >
                Chat with a WordPress expert
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Section5

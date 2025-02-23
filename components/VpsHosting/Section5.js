import CommonStyle from '../../styles/commomStyle.module.css'
import Styles from '../../styles/VpsHosting/VpsHosting.module.css'

export default function Section5() {
  return (
    <div className={`${CommonStyle.ContainerWidth} pt-5`}>
      <p className={`${Styles.Heading} mt-md-5 mt-3`}>
        How VPS hosting helped <br /> AmpleHarvest.org cultivate success
      </p>

      <section className="container-fluid my-5">
        <div className="row align-items-stretch">
          {/* Left Column - Image */}
          <div className="col-lg-4 col-md-6 mb-4 mb-lg-0 d-flex">
            <div className="flex-fill">
              <img
                src="https://www.liquidweb.com/wp-content/uploads/2024/08/farm-image2.webp"
                alt="A thriving farm supported by VPS hosting"
                className="rounded-4 w-100 h-100 d-block"
              />
            </div>
          </div>

          {/* Middle Column - Content */}
          <div className="col-lg-4 col-md-6 mb-4 mb-lg-0 d-flex">
            <div
              className="flex-fill d-flex flex-column p-4 rounded-4 text-dark"
              style={{ background: '#EBDACE' }}
            >
              <p className="fs-5 mb-0">
                We moved high-traffic AmpleHarvest.org to cloud VPS hosting,
                equipping them with real-time security reports to enhance their
                defenses against hackers and code injections.
              </p>
            </div>
          </div>

          {/* Right Column - Stats */}
          <div className="col-lg-4 d-flex">
            <div className="flex-fill">
              <div className="row g-3 h-100">
                <div className="col-lg-12 col-md-6">
                  <div className="p-4 border rounded d-flex flex-column justify-content-center h-100 rounded-4">
                    <h1 className="display-5 mb-0">1.8 billion</h1>
                    <p className="text-muted mb-0">Impressions scaled</p>
                  </div>
                </div>
                <div className="col-lg-12 col-md-6">
                  <div className="p-4 border rounded d-flex flex-column justify-content-center h-100 rounded-4">
                    <h1 className="display-5 mb-0">4,000%</h1>
                    <p className="text-muted mb-0">
                      Faster support response than their previous host
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

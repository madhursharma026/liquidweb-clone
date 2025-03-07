import CommonStyle from '../../styles/commomStyle.module.css'

const Section4 = () => {
  const titleStyle = { fontSize: 'calc(4vw + 2vh + 2vmin)' }
  const subTitleStyle = { fontSize: '16px', marginTop: '-20px' }
  const statStyle = { fontSize: 'calc(2vw + 1vh + 1vmin)' }

  return (
    <div className={`my-5 py-5 ${CommonStyle.ContainerWidth}`}>
      <div className="card p-sm-5 p-3">
        <div className="card-body">
          <span
            className="border px-2 py-1 rounded text-primary"
            style={{ fontSize: '12px', letterSpacing: '1.4px' }}
          >
            The best hosting provider for 27 years
          </span>

          <div className="row">
            <div className="col-lg-5">
              <h1 className={`${CommonStyle.mainHeading} mt-4`}>
                Partner with an industry leader
              </h1>
              <p
                className="mt-3 pb-lg-5"
                style={{ fontSize: '17px', letterSpacing: '1.4px' }}
              >
                At Sleeknode, we don’t just keep pace with the ever-evolving
                hosting landscape—we set the standard. With our deep technical
                expertise and innovative solutions, we’re a leader in the space.
              </p>
            </div>

            <div className="col-lg-6 offset-lg-1 d-lg-block d-none">
              <p style={titleStyle} className="fw-lighter">
                180K+
              </p>
              <p style={subTitleStyle}>happy customers in 150+ countries</p>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-5">
              <div
                className="card bg-dark text-white p-sm-4 p-2"
                style={{
                  background: 'url(/Cloudintheageofai.gif)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <div className="card-body">
                  <div className="text-end mb-3">
                    <span
                      className="border px-2 py-1 rounded"
                      style={{ fontSize: '10px', letterSpacing: '1.4px' }}
                    >
                      Our Latest Webinar
                    </span>
                  </div>
                  <p className="fs-2 lh-1">Cloud IN</p>
                  <p className="text-end fs-2 lh-1">THE AGE</p>
                  <p className="text-center fs-2 lh-1">OF AI</p>
                </div>
              </div>

              <p className="fs-6 fw-semibold mt-3">
                Navigating SEO’s evolution in the AI era
              </p>
            </div>

            <div className="col-lg-6 offset-lg-1 mt-lg-0">
              {/* Mobile view for customers count */}
              <p
                style={titleStyle}
                className="fw-normal d-lg-none d-block mt-5"
              >
                180K+
              </p>
              <p style={subTitleStyle}>happy customers in 150+ countries</p>
              <div className="row">
                <div className="col-lg-6">
                  <p style={statStyle}>50K+</p>
                  <p style={subTitleStyle}>
                    servers powering customers around the globe
                  </p>
                </div>
                <div className="col-lg-6">
                  <p style={statStyle}>8.5K+</p>
                  <p style={subTitleStyle}>
                    networks that are just 1 hop away from our uplinks
                  </p>
                </div>
                <div className="col-lg-6">
                  <p style={statStyle}>450</p>
                  <p style={subTitleStyle}>
                    highly trained support team members ready to tackle your
                    toughest challenges
                  </p>
                </div>
                <div className="col-lg-6">
                  <p style={statStyle}>300</p>
                  <p style={subTitleStyle}>
                    hours of training new support techs get during their first
                    year on the job
                  </p>
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

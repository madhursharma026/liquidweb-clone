import CommonStyle from '../../styles/commomStyle.module.css'

const Section4 = () => {
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
                className="mt-3 pb-5"
                style={{ fontSize: '17px', letterSpacing: '1.4px' }}
              >
                At Liquid Web, we don’t just keep pace with the ever-evolving
                hosting landscape—we set the standard. With our deep technical
                expertise and innovative solutions, we’re a leader in the space.
              </p>

              <div className="card bg-dark text-white p-sm-4 p-2 mt-5">
                <div className="card-body">
                  <div className="text-end mb-3">
                    <span
                      className="border px-2 py-1 rounded"
                      style={{ fontSize: '10px', letterSpacing: '1.4px' }}
                    >
                      Our Latest Webinar
                    </span>
                  </div>
                  <p className="fs-2 lh-1">SEO IN</p>
                  <p className="text-end fs-2 lh-1">THE AGE</p>
                  <p className="text-center fs-2 lh-1">OF AI</p>
                </div>
              </div>

              <p className="fs-6 fw-semibold mt-3">
                Navigating SEO’s evolution in the AI era
              </p>
            </div>

            <div className="col-lg-6 offset-lg-1 mt-lg-0 mt-5">
              {/* Placeholder for future content */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section4

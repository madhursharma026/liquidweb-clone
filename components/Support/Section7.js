import CommonStyle from '../../styles/commomStyle.module.css'

export default function Section7() {
  return (
    <div
      style={{
        background:
          'url("/supportSection2Image11.png") no-repeat center center',
        backgroundSize: 'cover',
      }}
    >
      <div className={`${CommonStyle.ContainerWidth} mb-5 p-md-5 p-3`}>
        <div className="row py-5">
          <div className="col-lg-6 d-flex flex-column justify-content-center align-items-center">
            <h1 className="text-white fw-normal pb-4">Get started today</h1>
          </div>
          <div className="col-lg-6">
            <div className={`container d-flex justify-content-center`}>
              <div className={`card p-md-5 p-3`}>
                <div className="card-body">
                  <h2 className="card-title">Give us a try, worry-free</h2>
                  <p className="card-text">
                    Since we don’t require contracts, you’re never stuck with a
                    plan that doesn’t work for you—and you get a full refund if
                    you cancel service within the first 30 days of activation.
                  </p>
                  <button className="btn btn-outline-dark">
                    Hosting solutions
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

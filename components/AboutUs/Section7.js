import CommonStyle from '../../styles/commomStyle.module.css'
import styles from '../../styles/Support/support.module.css'

export default function Section7() {
  const formFields = [
    {
      id: 'firstName',
      label: 'First Name*',
      type: 'text',
      placeholder: 'First Name',
      required: true,
    },
    {
      id: 'lastName',
      label: 'Last Name*',
      type: 'text',
      placeholder: 'Last Name',
      required: true,
    },
    {
      id: 'email',
      label: 'Email*',
      type: 'email',
      placeholder: 'Email',
      required: true,
    },
    {
      id: 'phone',
      label: 'Phone Number',
      type: 'tel',
      placeholder: 'Phone Number',
      required: false,
    },
    {
      id: 'company',
      label: 'Company',
      type: 'text',
      placeholder: 'Company',
      required: false,
    },
  ]

  return (
    <div
      style={{
        background:
          'linear-gradient(45deg, #895045, #604A62, #94666E, #A8776E, #D1957A)',
      }}
    >
      <div className={`${CommonStyle.ContainerWidth} my-5 py-lg-5`}>
        <div className="row p-md-5">
          {/* Left Section */}
          <div className="col-lg-6 d-flex align-items-center">
            <p
              className={`mt-md-5 mt-3 text-white`}
              style={{ fontSize: 'calc(2vw + 2vh + 1vmin)' }}
            >
              Get started today
            </p>
          </div>

          {/* Right Section - Contact Form */}
          <div className="col-lg-6 mt-lg-0 mt-4">
            <div class="card" style={{ background: '#E7DFE3' }}>
              <div class="card-body p-5">
                <p className="fs-1 fw-lighter">Find your ideal hosting</p>
                <p className="fs-4">
                  No matter your needs, we’ve got you covered.
                </p>
                <button
                  className={`rounded-pill ms-2 text-center mt-4 ${styles.customButton}`}
                >
                  VPS Hosting <span className={styles.hiddenArrow}>→</span>
                </button>
                <button
                  className={`rounded-pill ms-2 text-center mt-4 ${styles.customButton}`}
                >
                  Cloud Hosting <span className={styles.hiddenArrow}>→</span>
                </button>
                <button
                  className={`rounded-pill ms-2 text-center mt-4 ${styles.customButton}`}
                >
                  Dedicate Server Hosting{' '}
                  <span className={styles.hiddenArrow}>→</span>
                </button>
                <button
                  className={`rounded-pill ms-2 text-center mt-4 ${styles.customButton}`}
                >
                  Wordpress <span className={styles.hiddenArrow}>→</span>
                </button>
                <button
                  className={`rounded-pill ms-2 text-center mt-4 ${styles.customButton}`}
                >
                  All Hosting <span className={styles.hiddenArrow}>→</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

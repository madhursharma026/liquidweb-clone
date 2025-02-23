import CommonStyle from '../../styles/commomStyle.module.css'
import Styles from '../../styles/VpsHosting/VpsHosting.module.css'

export default function Section5() {
  return (
    <div
      style={{
        background:
          'linear-gradient(45deg, #FAFFF8, #E4FAD1, #F3BCA8, #FAE0D7, #FEFDFD)',
      }}
    >
      <div className={`${CommonStyle.ContainerWidth} my-5 py-lg-5`}>
        <div className="row p-md-5">
          {/* Left Section */}
          <div className="col-lg-6 d-flex align-items-center">
            <p className={`${Styles.mainHeading} mt-md-5 mt-3 fs-1`}>
              Find the right
              <br className="d-lg-block d-none" />{' '}
              <span
                className="px-2 rounded border"
                style={{ background: '#F5F4FF', whiteSpace: 'nowrap' }}
              >
                hosting solution
              </span>
              <br className="d-lg-block d-none" /> with our help
            </p>
          </div>

          {/* Right Section - Contact Form */}
          <div className="col-lg-6 mt-lg-0 mt-4">
            <div
              className={`${Styles.gradientContainer} p-3 p-sm-5 rounded-4 shadow`}
            >
              <h2 className="mb-4">Get in touch with an expert</h2>
              <form>
                {[
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
                  },
                  {
                    id: 'company',
                    label: 'Company',
                    type: 'text',
                    placeholder: 'Company',
                  },
                ].map(({ id, label, type, placeholder, required }) => (
                  <div className="mb-3" key={id}>
                    <label htmlFor={id} className="form-label">
                      {label}
                    </label>
                    <input
                      type={type}
                      className="form-control"
                      id={id}
                      placeholder={placeholder}
                      required={required}
                    />
                  </div>
                ))}

                <button
                  type="submit"
                  className="btn btn-dark w-100 rounded-pill"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

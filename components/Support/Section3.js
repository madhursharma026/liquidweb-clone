import CommonStyle from '../../styles/commomStyle.module.css'
import styles from '../../styles/VpsHosting/VpsHosting.module.css'

const Section3 = () => {
  return (
    <div style={{ background: '#FAF9F7' }}>
      <div className={`${CommonStyle.ContainerWidth} py-5`}>
        <div className="section scrolling-section">
          <p className={`${styles.Heading} mt-md-5 mt-3 d-lg-none d-block`}>
            Our time-tested process
          </p>
          <div className="row">
            <div className="col-xl-8 col-lg-7" style={{ overflowY: 'auto' }}>
              <p className={`${styles.Heading} mt-md-5 mt-3 d-lg-block d-none`}>
                Our time-tested process
              </p>
              <div
                className="text-center pb-5 d-lg-none d-block"
                style={{ width: '100%', margin: 'auto' }}
              >
                <img
                  src="/supportSection2Image3.png"
                  alt="#ImgNotFound"
                  className="w-100 rounded-3"
                  style={{ height: '400px', objectFit: 'cover' }}
                />
              </div>
              <div className="row">
                <div className="col-10">
                  <p
                    className="mt-4 text-semibold"
                    style={{ fontSize: '20px' }}
                  >
                    Step 1: Migration prep
                  </p>
                  <p style={{ fontSize: '15px', marginTop: '-12px' }}>
                    Before we begin your migration, you’ll update the PHP code
                    and database versions on the source server. You’ll verify
                    the amount of disk space needed to include backup drives or
                    plans. You’ll also make sure you have DNS information for
                    each domain you’re moving.
                  </p>
                </div>
                <div className="col-2 text-center d-flex align-items-center justify-content-center">
                  <svg
                    width={'18px'}
                    viewBox="0 0 512 512"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path d="M502.63 214.63l-45.25-45.25c-6-6-14.14-9.37-22.63-9.37H384V80c0-26.51-21.49-48-48-48H176c-26.51 0-48 21.49-48 48v80H77.25c-8.49 0-16.62 3.37-22.63 9.37L9.37 214.63c-6 6-9.37 14.14-9.37 22.63V320h128v-16c0-8.84 7.16-16 16-16h32c8.84 0 16 7.16 16 16v16h128v-16c0-8.84 7.16-16 16-16h32c8.84 0 16 7.16 16 16v16h128v-82.75c0-8.48-3.37-16.62-9.37-22.62zM320 160H192V96h128v64zm64 208c0 8.84-7.16 16-16 16h-32c-8.84 0-16-7.16-16-16v-16H192v16c0 8.84-7.16 16-16 16h-32c-8.84 0-16-7.16-16-16v-16H0v96c0 17.67 14.33 32 32 32h448c17.67 0 32-14.33 32-32v-96H384v16z"></path>
                  </svg>
                </div>
                <hr />
                <div className="col-10">
                  <p
                    className="mt-4 text-semibold"
                    style={{ fontSize: '20px' }}
                  >
                    Step 2: Data move
                  </p>
                  <p style={{ fontSize: '15px', marginTop: '-12px' }}>
                    Next, one of our migration specialists begins the initial
                    sync by accessing your source server. They compare software
                    versions, extract data, and restore your sites on the
                    destination server.
                  </p>
                </div>
                <div className="col-2 text-center d-flex align-items-center justify-content-center">
                  <svg
                    width={'18px'}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
                    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
                  </svg>
                </div>
                <hr />
                <div className="col-10">
                  <p
                    className="mt-4 text-semibold"
                    style={{ fontSize: '20px' }}
                  >
                    Step 3: Validation
                  </p>
                  <p style={{ fontSize: '15px', marginTop: '-12px' }}>
                    Then, we log into your site on the destination server to
                    make sure it functions just as smoothly in the new
                    environment as it did on the source server.
                  </p>
                </div>
                <div className="col-2 text-center d-flex align-items-center justify-content-center">
                  <svg
                    width={'18px'}
                    viewBox="0 0 1024 1024"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path d="M399.393 1003.392c-34.392 0-63.052-13.683-85.981-41.050l-286.232-346.698c-9.985-11.464-17.011-22.559-21.079-33.283s-6.102-21.818-6.102-33.283c0-26.257 8.69-47.89 26.071-64.901 17.751-17.381 39.939-26.072 66.565-26.072 29.585 0 54.177 12.019 73.777 36.056l230.76 285.677 453.2-716.135c11.462-17.381 23.296-29.585 35.501-36.611 12.576-7.396 27.923-11.094 46.042-11.094 26.624 0 48.634 8.506 66.010 25.517 17.382 17.011 26.074 38.46 26.074 64.347 0 9.615-1.664 19.599-4.992 29.955s-8.506 21.079-15.533 32.173l-516.437 790.467c-20.34 29.952-49.555 44.934-87.645 44.934z"></path>
                  </svg>
                </div>
                <hr />
                <div className="col-10">
                  <p
                    className="mt-4 text-semibold"
                    style={{ fontSize: '20px' }}
                  >
                    Step 4: Quality assurance and issue resolution
                  </p>
                  <p style={{ fontSize: '15px', marginTop: '-12px' }}>
                    Following our work, we hand the reins to you for
                    comprehensive testing. Since you’re intimately familiar with
                    your site, it’s crucial for you to do a thorough examination
                    and promptly notify us of any glitches or concerns for swift
                    resolution.
                  </p>
                </div>
                <div className="col-2 text-center d-flex align-items-center justify-content-center">
                  <svg
                    width={'18px'}
                    viewBox="0 0 1024 1024"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path d="M579.857 1024c-8.493 0-15.815-2.931-21.965-8.787-6.15-5.562-9.958-12.736-11.422-21.523-7.322-46.566-14.936-85.664-22.844-117.293s-18.157-57.549-30.751-77.754c-12.3-20.211-28.408-36.32-48.323-48.326-19.915-12.301-45.394-22.112-76.438-29.434-30.751-7.61-68.969-14.496-114.656-20.646-9.079-1.171-16.547-4.832-22.404-10.982-5.857-6.438-8.786-14.054-8.786-22.842s2.929-16.256 8.786-22.406c5.857-6.441 13.472-10.248 22.844-11.42 45.394-4.979 83.613-10.982 114.657-18.011 31.336-7.029 57.108-16.694 77.316-28.994 20.208-12.593 36.608-29.14 49.201-49.64s22.697-46.712 30.312-78.634c7.615-31.922 14.643-71.313 21.086-118.171 1.464-8.786 5.272-15.961 11.422-21.525s13.471-8.347 21.965-8.347c8.493 0 15.814 2.782 21.965 8.347s9.957 12.739 11.421 21.525c7.028 46.858 14.497 86.249 22.404 118.171 7.905 31.629 18.010 57.694 30.311 78.195 12.595 20.208 28.845 36.462 48.762 48.762 20.211 12.3 45.69 22.111 76.435 29.433 31.046 7.028 69.414 13.325 115.098 18.89 9.082 1.464 16.55 5.418 22.406 11.861 5.856 6.15 8.787 13.472 8.787 21.965 0 8.787-2.931 16.403-8.787 22.842-5.856 6.445-13.472 10.106-22.848 10.982-45.389 4.979-83.757 11.13-115.091 18.451-31.046 7.027-56.819 16.691-77.318 28.992-20.205 12.013-36.461 28.41-48.762 49.203-12.301 20.499-22.406 46.714-30.311 78.637-7.614 32.211-14.643 71.603-21.086 118.17-1.464 8.787-5.272 15.962-11.421 21.523-5.857 5.856-13.179 8.787-21.965 8.787zM265.32 535.063c-11.715 0-18.304-6.296-19.768-18.89-3.515-28.701-7.176-51.251-10.982-67.652-3.515-16.401-9.518-28.701-18.012-36.901-8.493-8.493-21.086-14.789-37.779-18.89-16.693-4.393-39.83-8.786-69.409-13.179-13.179-2.050-19.768-8.639-19.768-19.768s5.857-17.718 17.572-19.768c29.873-5.564 53.302-10.543 70.288-14.936 17.279-4.393 30.164-10.69 38.658-18.89s14.643-20.207 18.451-36.022c3.807-16.108 7.468-38.365 10.982-66.772 1.464-12.593 8.054-18.89 19.768-18.89s18.304 6.004 19.768 18.012c3.807 29.579 7.614 52.716 11.421 69.409s9.811 29.286 18.012 37.78c8.493 8.2 21.233 14.35 38.218 18.45 16.986 3.807 40.562 7.761 70.727 11.861 4.979 0.586 9.079 2.782 12.3 6.589 3.514 3.514 5.272 7.907 5.272 13.179 0 10.836-5.711 17.425-17.133 19.768-30.458 5.272-54.18 10.25-71.166 14.936-16.986 4.393-29.725 10.689-38.218 18.89-8.2 8.2-14.204 20.354-18.012 36.461s-7.614 38.512-11.421 67.213c-0.586 5.271-2.782 9.664-6.589 13.179-3.514 3.221-7.907 4.832-13.179 4.832zM479.258 219.648c-7.322 0-11.568-3.807-12.74-11.421-2.929-17.865-5.564-31.776-7.907-41.733s-6.15-17.572-11.421-22.844c-4.979-5.272-12.593-9.225-22.844-11.861-10.25-2.929-24.747-6.004-43.491-9.225-7.907-1.464-11.861-5.711-11.861-12.74 0-6.736 3.807-10.982 11.422-12.739 18.743-3.515 33.386-6.736 43.93-9.665s18.304-6.883 23.283-11.861c5.272-5.272 8.932-12.886 10.982-22.843 2.343-9.957 4.979-23.576 7.907-40.855 1.172-7.907 5.418-11.861 12.74-11.861 7.028 0 11.129 3.807 12.3 11.422 2.929 17.865 5.564 31.922 7.907 42.172s6.004 18.011 10.982 23.283c5.272 4.979 13.033 8.932 23.283 11.861 10.543 2.636 25.186 5.418 43.93 8.347 7.614 1.464 11.421 5.711 11.421 12.739s-3.661 11.276-10.982 12.74c-19.036 3.514-33.826 6.736-44.369 9.665-10.25 2.929-17.865 7.028-22.844 12.3s-8.786 12.886-11.422 22.844c-2.343 9.957-4.979 23.722-7.907 41.293-1.171 7.322-5.272 10.982-12.3 10.982z"></path>
                  </svg>
                </div>
                <hr />
                <div className="col-10">
                  <p
                    className="mt-4 text-semibold"
                    style={{ fontSize: '20px' }}
                  >
                    Step 5: DNS update
                  </p>
                  <p style={{ fontSize: '15px', marginTop: '-12px' }}>
                    For Liquid Web customers, we assist with your individual DNS
                    configurations, and in certain situations, we may ask for
                    your involvement, providing guidance along the way. New
                    customers will need to handle DNS updates independently.
                    Expect downtime during this process, though we actively work
                    to minimize it.
                  </p>
                </div>
                <div className="col-2 text-center d-flex align-items-center justify-content-center">
                  <svg
                    width={'18px'}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <rect
                      x="2"
                      y="3"
                      width="20"
                      height="14"
                      rx="2"
                      ry="2"
                    ></rect>
                    <line x1="8" y1="21" x2="16" y2="21"></line>
                    <line x1="12" y1="17" x2="12" y2="21"></line>
                  </svg>
                </div>
                <hr />
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 offset-lg-1 text-center pt-5 d-lg-block d-none"
              style={{
                position: 'sticky',
                top: 100,
                left: 0,
                maxHeight: '60vh',
              }}
            >
              <div style={{ maxWidth: '450px', margin: 'auto' }}>
                <img
                  src="/supportSection2Image3.png"
                  alt="#ImgNotFound"
                  className="w-100 rounded-3"
                  style={{ height: '400px', objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section3

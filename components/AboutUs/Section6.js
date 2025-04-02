import CommonStyle from '../../styles/commomStyle.module.css'
import styles from '../../styles/Support/support.module.css'

export default function Section6() {
  return (
    <div className={`${CommonStyle.ContainerWidth} py-5 my-5`}>
      <h1 className="fw-normal">Every day, we strive to:</h1>
      <div className="row mt-4">
        <div className="col-md-6 mt-4">
          <div
            className={`h-100 rounded-3 p-lg-3`}
            style={{ background: '#EDEBE7' }}
          >
            <div className="p-4">
              <h3 className="fw-normal">Help wherever we can</h3>
              <p className={`text-muted mt-5`}>
                We do the job we’re hired to do and then look for other ways we
                can offer assistance and raise our hand. All of us have
                permission to help build better products, better services, and a
                better company.
              </p>
              <div>
                <svg
                  className="mt-4"
                  width={'30px'}
                  viewBox="0 0 640 512"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path d="M434.7 64h-85.9c-8 0-15.7 3-21.6 8.4l-98.3 90c-.1.1-.2.3-.3.4-16.6 15.6-16.3 40.5-2.1 56 12.7 13.9 39.4 17.6 56.1 2.7.1-.1.3-.1.4-.2l79.9-73.2c6.5-5.9 16.7-5.5 22.6 1 6 6.5 5.5 16.6-1 22.6l-26.1 23.9L504 313.8c2.9 2.4 5.5 5 7.9 7.7V128l-54.6-54.6c-5.9-6-14.1-9.4-22.6-9.4zM544 128.2v223.9c0 17.7 14.3 32 32 32h64V128.2h-96zm48 223.9c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16zM0 384h64c17.7 0 32-14.3 32-32V128.2H0V384zm48-63.9c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16c0-8.9 7.2-16 16-16zm435.9 18.6L334.6 217.5l-30 27.5c-29.7 27.1-75.2 24.5-101.7-4.4-26.9-29.4-24.8-74.9 4.4-101.7L289.1 64h-83.8c-8.5 0-16.6 3.4-22.6 9.4L128 128v223.9h18.3l90.5 81.9c27.4 22.3 67.7 18.1 90-9.3l.2-.2 17.9 15.5c15.9 13 39.4 10.5 52.3-5.4l31.4-38.6 5.4 4.4c13.7 11.1 33.9 9.1 45-4.7l9.5-11.7c11.2-13.8 9.1-33.9-4.6-45.1z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 mt-4">
          <div className={`${styles.cardContainer} h-100 rounded-3 p-lg-3`}>
            <div className="p-4">
              <h3 className="fw-normal">Be good to people </h3>
              <p className={`text-muted mt-5`}>
                We treat people with kindness and respect because it’s the right
                thing to do. It also leads to more generous interactions with
                our customers, our communities, and each other.
              </p>
              <div>
                <svg
                  className="mt-4"
                  width={'30px'}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mt-4">
          <div className={`bg-black text-white h-100 rounded-3 p-lg-3`}>
            <div className="p-4">
              <h3 className="fw-normal">Do excellent work</h3>
              <p className={`mt-5`}>
                We create the best products, deliver the best service, and
                continuously refine everything we do. This ensures that all our
                actions and decisions lead to tangible, meaningful results.
              </p>
              <div>
                <svg
                  className="mt-4"
                  width={'30px'}
                  viewBox="0 0 512 512"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path d="M502.63 214.63l-45.25-45.25c-6-6-14.14-9.37-22.63-9.37H384V80c0-26.51-21.49-48-48-48H176c-26.51 0-48 21.49-48 48v80H77.25c-8.49 0-16.62 3.37-22.63 9.37L9.37 214.63c-6 6-9.37 14.14-9.37 22.63V320h128v-16c0-8.84 7.16-16 16-16h32c8.84 0 16 7.16 16 16v16h128v-16c0-8.84 7.16-16 16-16h32c8.84 0 16 7.16 16 16v16h128v-82.75c0-8.48-3.37-16.62-9.37-22.62zM320 160H192V96h128v64zm64 208c0 8.84-7.16 16-16 16h-32c-8.84 0-16-7.16-16-16v-16H192v16c0 8.84-7.16 16-16 16h-32c-8.84 0-16-7.16-16-16v-16H0v96c0 17.67 14.33 32 32 32h448c17.67 0 32-14.33 32-32v-96H384v16z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mt-4">
          <div className={`${styles.cardContainer} h-100 rounded-3 p-lg-3`}>
            <div className="p-4">
              <h3 className="fw-normal">Keep our eyes forward</h3>
              <p className={`mt-5`}>
                We champion imaginative ideas and pioneer leading-edge
                solutions. As trailblazers, we thrive on pushing boundaries,
                meeting evolving challenges, and exceeding expectations.
              </p>
              <div>
                <svg
                  className="mt-4"
                  width={'30px'}
                  viewBox="0 0 1024 1024"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path d="M469.333 512c0-212.077-105.064-384-234.666-384s-234.667 171.923-234.667 384c0 212.077 105.064 384 234.667 384s234.666-171.923 234.666-384zM389.258 521.177c-1.469 89.878-24.417 167.45-56.92 220.634-34.444 56.365-71.286 74.189-97.672 74.189s-63.228-17.824-97.672-74.189c-33.604-54.989-56.995-136.040-56.995-229.811s23.39-174.824 56.995-229.813c34.444-56.362 71.286-74.187 97.672-74.187s63.228 17.825 97.672 74.187c4.54 7.429 8.893 15.334 13.028 23.681-13.279-4.664-27.56-7.201-42.433-7.201-70.692 0-128 57.308-128 128s57.308 128 128 128c33.264 0 63.565-12.689 86.325-33.49zM365.527 394.57c3.581 20.305-7.626 39.254-25.031 42.323s-34.416-10.904-37.997-31.21c-3.58-20.305 7.627-39.254 25.031-42.323s34.417 10.904 37.997 31.21z"></path>
                  <path d="M1024 512c0-212.077-105.062-384-234.669-384-129.6 0-234.664 171.923-234.664 384s105.064 384 234.664 384c129.606 0 234.669-171.923 234.669-384zM943.923 521.177c-1.466 89.878-24.416 167.45-56.915 220.634-34.445 56.365-71.29 74.189-97.677 74.189-26.381 0-63.226-17.824-97.67-74.189-33.606-54.989-56.994-136.040-56.994-229.811s23.388-174.824 56.994-229.813c34.445-56.362 71.29-74.187 97.67-74.187 26.387 0 63.232 17.825 97.677 74.187 4.538 7.429 8.89 15.334 13.024 23.681-13.28-4.664-27.558-7.201-42.432-7.201-70.694 0-128 57.308-128 128s57.306 128 128 128c33.267 0 63.565-12.689 86.323-33.49zM920.192 394.57c3.584 20.305-7.622 39.254-25.030 42.323-17.402 3.069-34.413-10.904-37.997-31.21-3.578-20.305 7.629-39.254 25.030-42.323 17.408-3.069 34.419 10.904 37.997 31.21z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mt-4">
          <div className={`${styles.cardContainer} h-100 rounded-3 p-lg-3`}>
            <div className="p-4">
              <h3 className="fw-normal">Make meaningful change</h3>
              <p className={`mt-5`}>
                We actively encourage our employees to volunteer their time to
                charitable organizations and community initiatives. Each of us
                plays a role in fostering positive societal outcomes.
              </p>
              <div>
                <svg
                  className="mt-4"
                  width={'30px'}
                  viewBox="0 0 1024 1024"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path d="M579.857 1024c-8.493 0-15.815-2.931-21.965-8.787-6.15-5.562-9.958-12.736-11.422-21.523-7.322-46.566-14.936-85.664-22.844-117.293s-18.157-57.549-30.751-77.754c-12.3-20.211-28.408-36.32-48.323-48.326-19.915-12.301-45.394-22.112-76.438-29.434-30.751-7.61-68.969-14.496-114.656-20.646-9.079-1.171-16.547-4.832-22.404-10.982-5.857-6.438-8.786-14.054-8.786-22.842s2.929-16.256 8.786-22.406c5.857-6.441 13.472-10.248 22.844-11.42 45.394-4.979 83.613-10.982 114.657-18.011 31.336-7.029 57.108-16.694 77.316-28.994 20.208-12.593 36.608-29.14 49.201-49.64s22.697-46.712 30.312-78.634c7.615-31.922 14.643-71.313 21.086-118.171 1.464-8.786 5.272-15.961 11.422-21.525s13.471-8.347 21.965-8.347c8.493 0 15.814 2.782 21.965 8.347s9.957 12.739 11.421 21.525c7.028 46.858 14.497 86.249 22.404 118.171 7.905 31.629 18.010 57.694 30.311 78.195 12.595 20.208 28.845 36.462 48.762 48.762 20.211 12.3 45.69 22.111 76.435 29.433 31.046 7.028 69.414 13.325 115.098 18.89 9.082 1.464 16.55 5.418 22.406 11.861 5.856 6.15 8.787 13.472 8.787 21.965 0 8.787-2.931 16.403-8.787 22.842-5.856 6.445-13.472 10.106-22.848 10.982-45.389 4.979-83.757 11.13-115.091 18.451-31.046 7.027-56.819 16.691-77.318 28.992-20.205 12.013-36.461 28.41-48.762 49.203-12.301 20.499-22.406 46.714-30.311 78.637-7.614 32.211-14.643 71.603-21.086 118.17-1.464 8.787-5.272 15.962-11.421 21.523-5.857 5.856-13.179 8.787-21.965 8.787zM265.32 535.063c-11.715 0-18.304-6.296-19.768-18.89-3.515-28.701-7.176-51.251-10.982-67.652-3.515-16.401-9.518-28.701-18.012-36.901-8.493-8.493-21.086-14.789-37.779-18.89-16.693-4.393-39.83-8.786-69.409-13.179-13.179-2.050-19.768-8.639-19.768-19.768s5.857-17.718 17.572-19.768c29.873-5.564 53.302-10.543 70.288-14.936 17.279-4.393 30.164-10.69 38.658-18.89s14.643-20.207 18.451-36.022c3.807-16.108 7.468-38.365 10.982-66.772 1.464-12.593 8.054-18.89 19.768-18.89s18.304 6.004 19.768 18.012c3.807 29.579 7.614 52.716 11.421 69.409s9.811 29.286 18.012 37.78c8.493 8.2 21.233 14.35 38.218 18.45 16.986 3.807 40.562 7.761 70.727 11.861 4.979 0.586 9.079 2.782 12.3 6.589 3.514 3.514 5.272 7.907 5.272 13.179 0 10.836-5.711 17.425-17.133 19.768-30.458 5.272-54.18 10.25-71.166 14.936-16.986 4.393-29.725 10.689-38.218 18.89-8.2 8.2-14.204 20.354-18.012 36.461s-7.614 38.512-11.421 67.213c-0.586 5.271-2.782 9.664-6.589 13.179-3.514 3.221-7.907 4.832-13.179 4.832zM479.258 219.648c-7.322 0-11.568-3.807-12.74-11.421-2.929-17.865-5.564-31.776-7.907-41.733s-6.15-17.572-11.421-22.844c-4.979-5.272-12.593-9.225-22.844-11.861-10.25-2.929-24.747-6.004-43.491-9.225-7.907-1.464-11.861-5.711-11.861-12.74 0-6.736 3.807-10.982 11.422-12.739 18.743-3.515 33.386-6.736 43.93-9.665s18.304-6.883 23.283-11.861c5.272-5.272 8.932-12.886 10.982-22.843 2.343-9.957 4.979-23.576 7.907-40.855 1.172-7.907 5.418-11.861 12.74-11.861 7.028 0 11.129 3.807 12.3 11.422 2.929 17.865 5.564 31.922 7.907 42.172s6.004 18.011 10.982 23.283c5.272 4.979 13.033 8.932 23.283 11.861 10.543 2.636 25.186 5.418 43.93 8.347 7.614 1.464 11.421 5.711 11.421 12.739s-3.661 11.276-10.982 12.74c-19.036 3.514-33.826 6.736-44.369 9.665-10.25 2.929-17.865 7.028-22.844 12.3s-8.786 12.886-11.422 22.844c-2.343 9.957-4.979 23.722-7.907 41.293-1.171 7.322-5.272 10.982-12.3 10.982z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 mt-4">
          <div
            className={`h-100 rounded-3 p-lg-3`}
            style={{ background: '#EDEBE7' }}
          >
            <div className="p-4">
              <p className="fs-2">
                “We deeply value providing unparalleled support, ensuring our
                customers have a seamless experience with our services.”
              </p>
              <h5 className="mt-4">Aspen Kron</h5>
              <p className="mt-2 fs-5">Chief Customer Officer, Liquid Web</p>
              <button
                className={`rounded-pill text-center ${styles.customButton}`}
              >
                Explore Hosting <span className={styles.hiddenArrow}> →</span>
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-6 mt-4">
          <img
            src="/AboutUsSection4Img.png"
            alt="#ImgNotFound"
            className="w-100 h-100 rounded"
          />
        </div>
      </div>
    </div>
  )
}

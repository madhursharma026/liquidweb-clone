import CommonStyle from '../../styles/commomStyle.module.css'
import styles from '../../styles/VpsHosting/VpsHosting.module.css'

const Icon = ({ path }) => (
  <svg
    width="15px"
    viewBox="0 0 1024 1024"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path d={path}></path>
  </svg>
)

export default function Section1() {
  // SVG paths for different icons
  const icons = {
    speed:
      'M174.653 1024c-58.218 0-101.974-14.464-131.268-43.386-28.923-28.55-43.385-71.565-43.385-129.043v-679.143c0-57.476 14.462-100.49 43.385-129.043 29.294-28.923 73.050-43.385 131.268-43.385h674.691c58.221 0 101.792 14.462 130.714 43.385 29.293 28.553 43.942 71.567 43.942 129.043v679.143c0 57.478-14.65 100.493-43.942 129.043-28.922 28.922-72.493 43.386-130.714 43.386h-674.691zM261.423 550.101c0 7.416 2.41 13.535 7.231 18.355 5.191 4.45 11.495 6.675 18.911 6.675h194.677l-104.013 278.668c-4.82 12.237-4.635 22.246 0.556 30.035 5.562 7.789 13.164 11.866 22.805 12.237 9.641 0 18.355-5.005 26.142-15.021l314.264-394.358c6.304-7.416 9.453-14.833 9.453-22.248s-2.592-13.535-7.782-18.355c-4.819-4.821-10.938-7.231-18.355-7.231h-194.678l104.013-278.666c4.82-12.237 4.45-22.063-1.112-29.48-5.192-7.787-12.608-11.681-22.249-11.681-9.27-0.371-17.985 4.45-26.142 14.461l-314.264 394.36c-6.303 7.046-9.455 14.462-9.455 22.249z',
    managed:
      'M512 1024c-69.94 0-135.864-13.382-197.773-40.16-61.574-26.771-115.953-63.744-163.137-110.931-47.184-47.181-84.162-101.562-110.933-163.136-26.771-61.907-40.157-127.833-40.157-197.773s13.386-135.697 40.157-197.27c26.771-61.908 63.582-116.455 110.431-163.64 47.185-47.184 101.564-84.162 163.137-110.933 61.908-26.771 127.833-40.157 197.773-40.157s135.862 13.386 197.775 40.157c61.907 26.771 116.454 63.749 163.635 110.933 47.187 47.185 84.16 101.731 110.931 163.64 26.778 61.574 40.16 127.331 40.16 197.27s-13.382 135.866-40.16 197.773c-26.771 61.574-63.744 115.955-110.931 163.136-47.181 47.187-101.728 84.16-163.635 110.931-61.574 26.778-127.334 40.16-197.274 40.16zM512 947.699c38.149 0 75.964-5.184 113.443-15.558 37.814-10.042 73.283-24.762 106.416-44.173 33.126-19.072 62.579-42.163 88.346-69.267-18.074-28.781-42.835-53.21-74.291-73.286-31.123-20.416-66.758-35.808-106.918-46.182-39.822-10.707-82.154-16.064-126.996-16.064-45.511 0-88.345 5.357-128.502 16.064s-75.796 26.266-106.918 46.682c-30.787 20.077-55.216 44.339-73.286 72.787 25.768 27.104 55.216 50.195 88.345 69.267 33.464 19.411 68.936 34.131 106.416 44.173 37.48 10.374 75.461 15.558 113.945 15.558zM512 597.836c32.125 0.335 61.072-7.697 86.839-24.094 26.102-16.732 46.851-39.488 62.243-68.267s23.091-61.072 23.091-96.879c0-33.798-7.699-64.753-23.091-92.863s-36.14-50.531-62.243-67.263c-26.102-17.066-55.048-25.6-86.839-25.6-32.125 0-61.239 8.534-87.341 25.6-26.102 16.732-46.849 39.153-62.243 67.263s-22.923 59.064-22.589 92.863c0 35.807 7.53 67.932 22.589 96.377 15.393 28.444 35.974 51.032 61.741 67.764 26.102 16.397 55.383 24.764 87.843 25.098z',
    support:
      'M174.653 1024c-58.218 0-101.974-14.464-131.268-43.386-28.923-28.55-43.385-71.565-43.385-129.043v-679.143c0-57.476 14.462-100.49 43.385-129.043 29.294-28.923 73.050-43.385 131.268-43.385h674.691c58.221 0 101.792 14.462 130.714 43.385 29.293 28.553 43.942 71.567 43.942 129.043v679.143c0 57.478-14.65 100.493-43.942 129.043-28.922 28.922-72.493 43.386-130.714 43.386h-674.691zM449.981 782.598c9.641 0 18.355-2.221 26.143-6.675 7.787-4.448 14.647-11.123 20.58-20.019l261.421-412.161c3.341-5.562 6.49-11.495 9.459-17.799 2.963-6.303 4.448-12.607 4.448-18.911 0-12.979-4.819-23.176-14.464-30.592-9.638-7.787-20.39-11.681-32.256-11.681-16.32 0-29.664 8.529-40.051 25.586l-237.504 381.564-112.913-145.727c-7.046-9.27-13.905-15.574-20.58-18.911-6.303-3.338-13.534-5.006-21.692-5.006-12.608 0-23.176 4.635-31.704 13.905-8.529 8.9-12.794 19.653-12.794 32.261 0 6.303 1.113 12.607 3.338 18.911 2.596 5.933 5.933 11.681 10.012 17.243l139.611 171.317c7.416 9.638 15.018 16.499 22.805 20.576 7.787 4.083 16.501 6.118 26.142 6.118z',
  }

  return (
    <div className="p-0">
      <div className={styles.contentContainer}>
        <div className={CommonStyle.ContainerWidth}>
          <div className="row">
            {/* Left Column */}
            <div className="col-md-6">
              <span
                className="border px-2 py-1 rounded text-primary"
                style={{ letterSpacing: '1.4px', fontSize: '12px' }}
              >
                VPS Hosting
              </span>
              <h1 className={`${styles.mainHeading} mt-4`}>
                <span
                  className="px-2 rounded border"
                  style={{ background: '#F5F4FF', whiteSpace: 'nowrap' }}
                >
                  High-performance
                </span>{' '}
                VPS hosting that delivers unrivaled power
              </h1>
              <ul
                className="ps-0"
                style={{ listStyleType: 'none', marginLeft: '-20px' }}
              >
                <li className="mt-2 ms-4 d-flex align-items-center">
                  <Icon path={icons.speed} />
                  <span className="ps-3">The fastest VPS speeds available</span>
                </li>
                <li className="mt-2 ms-4 d-flex align-items-center">
                  <Icon path={icons.managed} />
                  <span className="ps-3">Fully managed VPS options</span>
                </li>
                <li className="mt-2 ms-4 d-flex align-items-center">
                  <Icon path={icons.support} />
                  <span className="ps-3">24/7 live support</span>
                </li>
              </ul>
              <p className="text-muted fw-normal fs-4">Starting at $5/mo</p>
              <div>
                <button
                  className={`rounded-pill text-center mt-4 ${styles.customButton}`}
                >
                  Compare All VPS Hosting Plans{' '}
                  <span className={styles.hiddenArrow}>→</span>
                </button>
                <button
                  className={`rounded-pill bg-white text-black mt-4 ms-3 ${styles.customButton}`}
                >
                  Build Now <span className={styles.hiddenArrow}>→</span>
                </button>
              </div>
            </div>
            {/* Right Column */}
            <div className="col-md-6 mt-md-0 mt-3 d-flex flex-column justify-content-center">
              <div className="d-flex align-items-center justify-content-center w-100">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  width={700}
                  height={500}
                  className="img-fluid"
                >
                  <source src="/VPSHostingSection1Video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

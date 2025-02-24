import styles from '../../../styles/Homepage/Homepage.module.css'

const Pricing = ({
  price,
  offers,
  cardTitle,
  buttonText,
  showFeatures,
  darkORLightBG,
  toggleFeatures,
  cardDescription,
}) => {
  return (
    <div
      className="card shadow-sm border-0 rounded-4 p-4"
      style={{ backgroundColor: '#fafafa' }}
    >
      <span
        className="text-primary fw-semibold mb-2 text-end"
        style={{ fontSize: '0.8rem' }}
      >
        <span
          className="px-2 py-1 rounded border"
          style={{ background: '#F0EEF8' }}
        >
          {offers}
        </span>
      </span>
      <p className="fs-3 mt-3">{cardTitle}</p>
      <p className="fs-6">{cardDescription}</p>
      <p className="mt-3 lh-1" style={{ fontSize: '0.75rem' }}>
        Starting at
      </p>
      <h2 className="fw-semibold lh-1">
        <span>${price}</span>/mo
      </h2>
      <button
        className={`rounded-pill mt-3 ${styles.customButton}`}
        style={{ padding: '5px 10px', fontSize: '15px' }}
      >
        Explore {buttonText} metal <span className={styles.hiddenArrow}>→</span>
      </button>
      <div
        className="d-flex justify-content-between align-items-center mt-4"
        onClick={toggleFeatures}
        style={{ cursor: 'pointer' }}
      >
        <span className="fw-semibold">Features</span>
        <span className="text-muted">{showFeatures ? '▲' : '▼'}</span>
      </div>

      {showFeatures && (
        <ul
          className="list-unstyled mt-3"
          style={{ visibility: darkORLightBG === 'dark' ? 'hidden' : '' }}
        >
          <li
            className="mb-2"
            style={{
              fontSize: '14px',
            }}
          >
            <svg
              width={'14px'}
              className="me-2"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
            6-32 cores
          </li>
          <li className="mb-2" style={{ fontSize: '14px' }}>
            <svg
              width={'14px'}
              className="me-2"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
            32-128 GB memory
          </li>
          <li className="mb-2" style={{ fontSize: '14px' }}>
            <svg
              width={'14px'}
              className="me-2"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
            10 TB bandwidth
          </li>
          <li className="mb-2" style={{ fontSize: '14px' }}>
            <svg
              width={'14px'}
              className="me-2"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
            Root access
          </li>
          <li className="mb-2" style={{ fontSize: '14px' }}>
            <svg
              width={'14px'}
              className="me-2"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
            24/7 expert support
          </li>
          <li className="mb-2" style={{ fontSize: '14px' }}>
            <svg
              width={'14px'}
              className="me-2"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
            Linux
          </li>
          <li className="mb-2" style={{ fontSize: '14px' }}>
            <svg
              width={'14px'}
              className="me-2"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
            Hassle-free migration
          </li>
          <li className="mb-2" style={{ fontSize: '14px' }}>
            <svg
              width={'14px'}
              className="me-2"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
            500GB Acronis Cyber Backup
          </li>
          <li className="mb-2" style={{ fontSize: '14px' }}>
            <svg
              width={'14px'}
              className="me-2"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
            cPanel, Plesk, or InterWorx control panel
          </li>
          <li className="mb-2" style={{ fontSize: '14px' }}>
            <svg
              width={'14px'}
              className="me-2"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
            Expert management of your server
          </li>
        </ul>
      )}
    </div>
  )
}

export default Pricing

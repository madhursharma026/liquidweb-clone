import styles from '../../../styles/Homepage/Homepage.module.css'

const Pricing = ({
  price,
  offers,
  features,
  cardTitle,
  buttonText,
  showFeatures,
  toggleFeatures,
  cardDescription,
}) => {
  return (
    <div
      className="card shadow-sm border-0 rounded-4 p-4"
      style={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#fafafa',
      }}
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
      <p className="fs-6" style={{ minHeight: '50px' }}>
        {cardDescription}
      </p>
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
        Explore {buttonText} Hosting{' '}
        <span className={styles.hiddenArrow}>→</span>
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
        <ul className="list-unstyled mt-3">
          {features.map((feature, index) => (
            <li key={index} className="mb-2" style={{ fontSize: '14px' }}>
              <svg
                width="14px"
                className="me-2"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
              {feature}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Pricing

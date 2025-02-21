import Link from 'next/link'
import { useState } from 'react'

const Pricing = ({
  offers,
  cardTitle,
  cardDescription,
  price,
  buttonText,
  lastChance,
}) => {
  const [showFeatures, setShowFeatures] = useState(false)

  const FeatureItem = ({ text }) => (
    <li>
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
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
        <polyline points="22 4 12 14.01 9 11.01"></polyline>
      </svg>
      {text}
    </li>
  )

  return (
    <>
      <h6
        className={`bg-primary m-0 p-2 text-end rounded-top text-white ${
          !lastChance ? 'invisible' : ''
        }`}
      >
        {lastChance ? 'Last Chance' : 'Blank Space'}
      </h6>

      <div
        className={`card shadow-sm p-4 ${
          lastChance
            ? 'border border-primary rounded-0 rounded-bottom'
            : 'border-0'
        }`}
        style={{ backgroundColor: '#fafafa' }}
      >
        <span
          className="text-primary fw-semibold mb-2 text-end"
          style={{ fontSize: '0.8rem' }}
        >
          {offers}
        </span>
        <h4 className="fw-semibold">{cardTitle}</h4>
        <p className="text-muted">{cardDescription}</p>
        <p className="text-muted mt-3 mb-1" style={{ fontSize: '0.9rem' }}>
          Starting at
        </p>
        <h2 className="fw-semibold">
          <span className="fw-bold">${price}</span>/mo
        </h2>
        <p className="text-muted" style={{ fontSize: '0.85rem' }}>
          Our best deal on VPS.
        </p>
        <Link href="#">
          <button className="btn btn-dark rounded-pill w-100 py-2 mb-3">
            Browse {buttonText} hosting
          </button>
        </Link>

        {/* Features Toggle */}
        <div
          className="d-flex justify-content-between align-items-center"
          onClick={() => setShowFeatures(!showFeatures)}
          style={{ cursor: 'pointer' }}
        >
          <span className="fw-semibold">Features</span>
          <span className="text-muted">{showFeatures ? '▲' : '▼'}</span>
        </div>

        {/* Features List */}
        {showFeatures && (
          <ul className="list-unstyled mt-3" style={{ fontSize: '14px' }}>
            {[
              'Linux & Windows',
              'Fully or self-managed',
              '10G network',
              'Fully customizable',
              'Unlimited websites',
              'Hosting add-ons',
            ].map((feature, index) => (
              <FeatureItem key={index} text={feature} />
            ))}
          </ul>
        )}
      </div>
    </>
  )
}

export default Pricing

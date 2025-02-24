import Link from 'next/link'

const Pricing = ({
  cardTitle,
  cardDescription,
  price,
  bestDeal,
  originalPrice,
}) => {
  return (
    <>
      {bestDeal ? (
        <h6 className="bg-primary m-0 p-2 text-end rounded-top text-white">
          Best Deal
        </h6>
      ) : (
        <h6
          className="bg-primary m-0 p-2 text-end rounded-top text-white"
          style={{ visibility: 'hidden' }}
        >
          Best Deal
        </h6>
      )}
      <div
        className="card shadow-sm border-0 p-4"
        style={{ backgroundColor: '#fafafa' }}
      >
        <h4
          className={`fw-semibold ${bestDeal ? 'text-primary' : 'text-dark'}`}
        >
          {cardTitle}
        </h4>
        <Link href="#">
          <button
            className="btn fw-semibold mb-3 mt-4 "
            style={{ fontSize: '14px', background: '#ECECEC' }}
          >
            Save 83%
          </button>
        </Link>
        <p className="text-muted">{cardDescription}</p>
        <p className="fw-semibold fs-4">
          <span className="fw-bold">{price}</span>/mo*
        </p>
        <p className="text-muted" style={{ marginTop: '-10px' }}>
          Discounted from <del>{originalPrice}</del>
        </p>
        <Link href="#">
          <button className="btn btn-dark rounded-pill py-2 mb-3">
            Get Plans
          </button>
        </Link>
        <hr />
        <ul className="list-unstyled mt-3">
          <li>
            <b>1</b> Website
          </li>
          <li>
            <b>10</b> GB Web Space{' '}
          </li>
          <li>
            <b>~ 10,000</b> Visits Monthly
          </li>
          <li>
            <b>Unmetered</b> Traffic
          </li>
          <p className="fs-5 my-1 fw-semibold">Core Features</p>
          <li>Free Domain</li>
          <li>Free SSL</li>
          <li>Free Email</li>
          <li>Free Email Migrator</li>
          <li>Free CDN</li>
          <li>Daily Backup</li>
          <li>Enhanced Security</li>
          <li>Out-of-the-Box Caching</li>
          <li>100% Renewable Energy Match</li>
          <li>30-Days Money-Back</li>
          <li>Collaborators Available</li>
          <p className="fs-5 my-1 fw-semibold">SiteGround Site Builder</p>
          <li>Easy Site Building</li>
          <li>AI Content Generation</li>
          <li>Professional Templates</li>
          <li>Free Image Gallery</li>
          <li>Built-in SEO</li>
          <p className="fs-5 my-1 fw-semibold">Managed WordPress Features</p>
          <li>Free WP Auto-Install</li>
          <li>Free WP Auto-Migrator</li>
          <li>WordPress Autoupdates</li>
          <li>Speed Optimizer WP Plugin</li>
          <li>Security Optimizer WP Plugin</li>
          <li>WooCommerce Enabled</li>
          <li>WP-CLI and SSH</li>
        </ul>
      </div>
    </>
  )
}

export default Pricing

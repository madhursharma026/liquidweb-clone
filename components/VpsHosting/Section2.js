import CommonStyle from '../../styles/commomStyle.module.css'
import Styles from '../../styles/VpsHosting/VpsHosting.module.css'
import Pricing from './components/pricing'

export default function Section2() {
  // Data for Pricing Cards
  const pricingCards = [
    {
      offers: 'Best Offers',
      cardTitle: '1 GB RAM',
      cardDescription: 'Best web hosting for flexibility and affordability',
      price: '5',
      buttonText: 'VPS',
    },
    {
      offers: 'Best Offers',
      cardTitle: '1 GB RAM',
      cardDescription: 'Best web hosting for flexibility and affordability',
      price: '5',
      buttonText: 'VPS',
    },
    {
      bestDeal: true,
      offers: 'Best Offers',
      cardTitle: '1 GB RAM',
      cardDescription: 'Best web hosting for flexibility and affordability',
      price: '5',
      buttonText: 'VPS',
    },
    {
      offers: 'Best Offers',
      cardTitle: '1 GB RAM',
      cardDescription: 'Best web hosting for flexibility and affordability',
      price: '5',
      buttonText: 'VPS',
    },
  ]

  // Data for Trusted Logos
  const trustedLogos = [
    '/logo1.png',
    '/logo2.png',
    '/logo3.png',
    '/logo4.png',
    '/logo5.png',
    '/logo6.png',
    '/logo7.png',
    '/logo8.png',
  ]

  return (
    <div className={CommonStyle.ContainerWidth}>
      {/* Pricing Cards Section */}
      <div className="row justify-content-center">
        {pricingCards.map((card, index) => (
          <div key={index} className="col-xl-3 col-md-6 mt-3">
            <Pricing {...card} />
          </div>
        ))}
      </div>

      {/* Promotions Section */}
      <div
        className="p-md-4 p-3 rounded mt-3"
        style={{ background: '#F1F0FF' }}
      >
        <p>
          These options are just the beginning.{' '}
          <b>Compare all VPS hosting plans →</b>
        </p>
        <p className="pe-5" style={{ fontSize: '14px' }}>
          <svg
            width="14px"
            className="me-2"
            viewBox="0 0 1024 1024"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path d="M579.857 1024c-8.493 0-15.815-2.931-21.965-8.787-6.15-5.562-9.958-12.736-11.422-21.523-7.322-46.566-14.936-85.664-22.844-117.293s-18.157-57.549-30.751-77.754c-12.3-20.211-28.408-36.32-48.323-48.326-19.915-12.301-45.394-22.112-76.438-29.434-30.751-7.61-68.969-14.496-114.656-20.646-9.079-1.171-16.547-4.832-22.404-10.982-5.857-6.438-8.786-14.054-8.786-22.842s2.929-16.256 8.786-22.406c5.857-6.441 13.472-10.248 22.844-11.42 45.394-4.979 83.613-10.982 114.657-18.011 31.336-7.029 57.108-16.694 77.316-28.994 20.208-12.593 36.608-29.14 49.201-49.64s22.697-46.712 30.312-78.634c7.615-31.922 14.643-71.313 21.086-118.171 1.464-8.786 5.272-15.961 11.422-21.525s13.471-8.347 21.965-8.347c8.493 0 15.814 2.782 21.965 8.347s9.957 12.739 11.421 21.525c7.028 46.858 14.497 86.249 22.404 118.171 7.905 31.629 18.010 57.694 30.311 78.195 12.595 20.208 28.845 36.462 48.762 48.762 20.211 12.3 45.69 22.111 76.435 29.433 31.046 7.028 69.414 13.325 115.098 18.89 9.082 1.464 16.55 5.418 22.406 11.861 5.856 6.15 8.787 13.472 8.787 21.965 0 8.787-2.931 16.403-8.787 22.842-5.856 6.445-13.472 10.106-22.848 10.982-45.389 4.979-83.757 11.13-115.091 18.451-31.046 7.027-56.819 16.691-77.318 28.992-20.205 12.013-36.461 28.41-48.762 49.203-12.301 20.499-22.406 46.714-30.311 78.637-7.614 32.211-14.643 71.603-21.086 118.17-1.464 8.787-5.272 15.962-11.421 21.523-5.857 5.856-13.179 8.787-21.965 8.787zM265.32 535.063c-11.715 0-18.304-6.296-19.768-18.89-3.515-28.701-7.176-51.251-10.982-67.652-3.515-16.401-9.518-28.701-18.012-36.901-8.493-8.493-21.086-14.789-37.779-18.89-16.693-4.393-39.83-8.786-69.409-13.179-13.179-2.05-19.768-8.639-19.768-19.768s5.857-17.718 17.572-19.768c29.873-5.564 53.302-10.543 70.288-14.936 17.279-4.393 30.164-10.69 38.658-18.89s14.643-20.207 18.451-36.022c3.807-16.108 7.468-38.365 10.982-66.772 1.464-12.593 8.054-18.89 19.768-18.89s18.304 6.004 19.768 18.012c3.807 29.579 7.614 52.716 11.421 69.409s9.811 29.286 18.012 37.78c8.493 8.2 21.233 14.35 38.218 18.45 16.986 3.807 40.562 7.761 70.727 11.861 4.979 0.586 9.079 2.782 12.3 6.589 3.514 3.514 5.272 7.907 5.272 13.179 0 10.836-5.711 17.425-17.133 19.768-30.458 5.272-54.18 10.25-71.166 14.936-16.986 4.393-29.725 10.689-38.218 18.89-8.2 8.2-14.204 20.354-18.012 36.461s-7.614 38.512-11.421 67.213c-0.586 5.271-2.782 9.664-6.589 13.179-3.514 3.221-7.907 4.832-13.179 4.832zM479.258 219.648c-7.322 0-11.568-3.807-12.74-11.421-2.929-17.865-5.564-31.776-7.907-41.733s-6.15-17.572-11.421-22.844c-4.979-5.272-12.593-9.225-22.844-11.861-10.25-2.929-24.747-6.004-43.491-9.225-7.907-1.464-11.861-5.711-11.861-12.74 0-6.736 3.807-10.982 11.422-12.739 18.743-3.515 33.386-6.736 43.93-9.665s18.304-6.883 23.283-11.861c5.272-5.272 8.932-12.886 10.982-22.843 2.343-9.957 4.979-23.576 7.907-40.855 1.172-7.907 5.418-11.861 12.74-11.861 7.028 0 11.129 3.807 12.3 11.422 2.929 17.865 5.564 31.922 7.907 42.172s6.004 18.011 10.982 23.283c5.272 4.979 13.033 8.932 23.283 11.861 10.543 2.636 25.186 5.418 43.93 8.347 7.614 1.464 11.421 5.711 11.421 12.739s-3.661 11.276-10.982 12.74c-19.036 3.514-33.826 6.736-44.369 9.665-10.25 2.929-17.865 7.028-22.844 12.3s-8.786 12.886-11.422 22.844c-2.343 9.957-4.979 23.722-7.907 41.293-1.171 7.322-5.272 10.982-12.3 10.982z"></path>
          </svg>
          Promotions are valid for new accounts only and do not apply to
          upgrades of existing VPS servers. Please reach out to our team if
          you’re upgrading your existing Sleeknode hardware.
        </p>
      </div>

      {/* Trusted Logos Section */}
      <div className="my-5">
        <h3 className="text-muted fw-normal">Trusted by top brands</h3>
        <div className="row justify-content-center align-items-center">
          {[
            '/logo1.png',
            '/logo2.png',
            '/logo3.png',
            '/logo4.png',
            '/logo5.png',
            '/logo6.png',
            '/logo7.png',
            '/logo8.png',
          ].map((src, index) => (
            <div key={index} className="col-lg col-md-3 col-4 pt-5 text-center">
              <img
                src={src}
                alt="Company Logo"
                className={`img-fluid ${Styles.logoImg}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

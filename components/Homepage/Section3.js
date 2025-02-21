import CommonStyle from '../../styles/commomStyle.module.css'
import styles from '../../styles/Homepage/Homepage.module.css'
import Business from './components/Business'

const hostingServices = [
  {
    title: 'Reseller hosting',
    videoURL: '',
    imgURL:
      'https://www.liquidweb.com/wp-content/uploads/2024/10/iStock-2012746941.webp',
    description:
      'For agencies and small firms that want to offer VPS website hosting themselves',
    btnText: 'Explore reseller hosting',
  },
  {
    title: 'Ecommerce hosting',
    videoURL: '',
    imgURL:
      'https://www.liquidweb.com/wp-content/uploads/2024/10/iStock-1569566040.webp',
    description:
      'For high-demand Magento stores and high-touch WooCommerce support',
    btnText: 'Explore ecommerce hosting',
  },
  {
    title: 'HIPAA compliant hosting',
    videoURL:
      'https://www.liquidweb.com/wp-content/uploads/2024/10/hipaa_iteration-2.webm',
    imgURL: '',
    description:
      'For medical and healthcare businesses that need absolute privacy and security',
    btnText: 'Explore HIPAA compliant hosting',
  },
  {
    title: 'WordPress hosting',
    videoURL: '',
    imgURL:
      'https://www.liquidweb.com/wp-content/uploads/2024/10/iStock-2153366944-2.webp',
    description:
      'For WordPress users who demand speed, security, and seamless management',
    btnText: 'Explore WordPress hosting',
  },
  {
    title: 'PCI compliant hosting',
    videoURL:
      'https://www.liquidweb.com/wp-content/uploads/2024/10/ecomm-resized.webm',
    imgURL: '',
    description:
      'For protecting sensitive data and maintaining industry standards',
    btnText: 'Explore PCI Compliant hosting',
  },
  {
    title: 'Enterprise hosting',
    videoURL: '',
    imgURL:
      'https://www.liquidweb.com/wp-content/uploads/2024/10/iStock-2158997979-2.webp',
    description:
      'For enterprise-level web teams that need flexibility, security, and support',
    btnText: 'Explore enterprise hosting',
  },
]

const Section3 = () => {
  return (
    <div className={`my-5 ${CommonStyle.ContainerWidth}`}>
      <div className="row">
        <div className="col-md-6">
          <h1
            className="fw-normal d-md-block d-none"
            style={{ fontSize: '46px', maxWidth: '500px' }}
          >
            The best website hosting services to elevate your{' '}
            <span
              className="px-2 rounded border"
              style={{ background: '#F5F4FF' }}
            >
              business
            </span>
          </h1>
          <h1
            className="fw-normal d-md-none d-block"
            style={{ fontSize: '30px', maxWidth: '400px' }}
          >
            The best website hosting services to elevate your{' '}
            <span
              className="px-2 rounded border"
              style={{ background: '#F5F4FF' }}
            >
              business
            </span>
          </h1>
        </div>
        <div className="col-md-6">
          <div
            className="d-flex justify-content-md-end justify-content-start align-items-end"
            style={{ height: '100%' }}
          >
            <button
              className={`rounded-pill text-center mt-4 ${styles.customButtonWhite} btn btn-outline-dark`}
            >
              Explore All Hosting Services{' '}
              <span className={`pe-2 ${styles.hiddenArrow}`}>→</span>
            </button>
          </div>
        </div>
      </div>

      <div className="row justify-content-center align-items-center">
        {hostingServices.map((service, index) => (
          <div key={index} className="col-lg-4 col-md-6 mt-3">
            <Business {...service} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Section3

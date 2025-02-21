import CommonStyle from '../../styles/commomStyle.module.css'
import Styles from '../../styles/Homepage/Homepage.module.css'
import Pricing from './components/Pricing'

const Section2 = () => {
  const pricingData = [
    {
      offers: 'Best Offers',
      cardTitle: 'VPS hosting',
      cardDescription: 'Best web hosting for flexibility and affordability',
      price: '5',
      buttonText: 'VPS',
    },
    {
      offers: 'Up to 75% off—ends soon!',
      cardTitle: 'Managed WordPress',
      cardDescription: 'Best hosting for scalability and reliability',
      price: '5.25',
      buttonText: 'Wordpress',
      lastChance: true,
    },
    {
      offers: '50% Off',
      cardTitle: 'Bare metal hosting',
      cardDescription: 'Best hosting for dedicated resources and total control',
      price: '39.50',
      buttonText: 'Bare Metal',
    },
    {
      offers: '30% Off',
      cardTitle: 'GPU server hosting',
      cardDescription: 'Best for peak processing power and speed',
      price: '0.86',
      buttonText: 'GPU Server',
    },
  ]

  const logos = [
    'https://www.liquidweb.com/wp-content/uploads/2024/02/logo-gadget-gaurd.avif',
    'https://www.liquidweb.com/wp-content/uploads/2024/10/MLB-white.svg',
    'https://www.liquidweb.com/wp-content/uploads/2024/10/topps-white.svg',
    'https://www.liquidweb.com/wp-content/uploads/2024/09/solidwp.svg',
    'https://www.liquidweb.com/wp-content/uploads/2024/09/populi-lockup-1.svg',
    'https://www.liquidweb.com/wp-content/uploads/2024/10/brightedge.avif',
    'https://www.liquidweb.com/wp-content/uploads/2024/09/NC_State_University_brick_logo-1.svg',
    'https://www.liquidweb.com/wp-content/uploads/2024/09/datamaas-logo-final-2-1.svg',
  ]

  return (
    <div className={`${CommonStyle.ContainerWidth} my-5`}>
      <p className="fs-3">
        Our{' '}
        <span className="px-2 rounded border" style={{ background: '#F5F4FF' }}>
          most popular
        </span>{' '}
        hosting services
      </p>
      <div className="row justify-content-center">
        {pricingData.map((item, index) => (
          <div key={index} className="col-xl-3 col-md-6 mt-3">
            <Pricing {...item} />
          </div>
        ))}
      </div>

      <p className="mt-5 fs-5">
        187K brands—and counting—level up with Liquid Web
      </p>

      <div className="mb-5">
        <div className="row justify-content-center align-items-center">
          {logos.map((logo, index) => (
            <div key={index} className="col-lg col-md-3 col-4 mt-5 text-center">
              <img
                src={logo}
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

export default Section2

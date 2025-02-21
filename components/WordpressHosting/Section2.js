import CommonStyle from '../../styles/commomStyle.module.css'
import Styles from '../../styles/VpsHosting/VpsHosting.module.css'
import Pricing from './components/pricing'

const pricingPlans = [
  {
    offers: '75% off 3 mos',
    cardTitle: 'Managed WordPress',
    cardDescription:
      'Simplify site management and free up time without sacrificing compatibility',
    price: '$5.25/mo',
    buttonText: 'VPS',
  },
  {
    offers: '75% off 3 mos',
    cardTitle: 'Managed WordPress',
    cardDescription:
      'Simplify site management and free up time without sacrificing compatibility',
    price: '$5.25/mo',
    buttonText: 'VPS',
  },
  {
    offers: '75% off 3 mos',
    cardTitle: 'Managed WordPress',
    cardDescription:
      'Simplify site management and free up time without sacrificing compatibility',
    price: '$5.25/mo',
    buttonText: 'VPS',
  },
]

const brandLogos = [
  'https://www.liquidweb.com/wp-content/uploads/2024/02/logo-gadget-gaurd.avif',
  'https://www.liquidweb.com/wp-content/uploads/2024/10/MLB-white.svg',
  'https://www.liquidweb.com/wp-content/uploads/2024/10/topps-white.svg',
  'https://www.liquidweb.com/wp-content/uploads/2024/09/solidwp.svg',
  'https://www.liquidweb.com/wp-content/uploads/2024/09/populi-lockup-1.svg',
  'https://www.liquidweb.com/wp-content/uploads/2024/10/brightedge.avif',
  'https://www.liquidweb.com/wp-content/uploads/2024/09/NC_State_University_brick_logo-1.svg',
  'https://www.liquidweb.com/wp-content/uploads/2024/09/datamaas-logo-final-2-1.svg',
]

export default function Section2() {
  return (
    <div className={`${CommonStyle.ContainerWidth} mt-5 py-5`}>
      <h1 className={`${Styles.Heading} mt-md-5 mt-3`}>
        WordPress hosting plans for any brand
      </h1>

      <div className="row justify-content-center">
        {pricingPlans.map((plan, index) => (
          <div className="col-md-4 mt-3" key={index}>
            <Pricing {...plan} />
          </div>
        ))}
      </div>

      <div className="my-5">
        <h3 className="text-muted fw-normal">Trusted by top brands</h3>
        <div className="row justify-content-center align-items-center">
          {brandLogos.map((logo, index) => (
            <div className="col-lg col-md-3 col-4 mt-3 text-center" key={index}>
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

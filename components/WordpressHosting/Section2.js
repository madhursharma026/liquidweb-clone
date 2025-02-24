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
          <div className={`col-lg col-md-3 col-4 pt-5 text-center`}>
            <img
              src={'/logo1.png'}
              alt="Company Logo"
              className={`img-fluid ${Styles.logoImg}`}
            />
          </div>
          <div className={`col-lg col-md-3 col-4 pt-5 text-center`}>
            <img
              src={'/logo2.png'}
              alt="Company Logo"
              className={`img-fluid ${Styles.logoImg}`}
            />
          </div>
          <div className={`col-lg col-md-3 col-4 pt-5 text-center`}>
            <img
              src={'/logo3.png'}
              alt="Company Logo"
              className={`img-fluid ${Styles.logoImg}`}
            />
          </div>
          <div className={`col-lg col-md-3 col-4 pt-5 text-center`}>
            <img
              src={'/logo4.png'}
              alt="Company Logo"
              className={`img-fluid ${Styles.logoImg}`}
            />
          </div>
          <div className={`col-lg col-md-3 col-4 pt-5 text-center`}>
            <img
              src={'/logo5.png'}
              alt="Company Logo"
              className={`img-fluid ${Styles.logoImg}`}
            />
          </div>
          <div className={`col-lg col-md-3 col-4 pt-5 text-center`}>
            <img
              src={'/logo6.png'}
              alt="Company Logo"
              className={`img-fluid ${Styles.logoImg}`}
            />
          </div>
          <div className={`col-lg col-md-3 col-4 pt-5 text-center`}>
            <img
              src={'/logo7.png'}
              alt="Company Logo"
              className={`img-fluid ${Styles.logoImg}`}
            />
          </div>
          <div className={`col-lg col-md-3 col-4 pt-5 text-center`}>
            <img
              src={'/logo8.png'}
              alt="Company Logo"
              className={`img-fluid ${Styles.logoImg}`}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

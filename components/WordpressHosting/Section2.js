import { useEffect, useRef } from 'react'
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

export default function Section2() {
  const myRef = useRef(null)

  useEffect(() => {
    if (myRef.current) {
      // Store the offset top value adjusted by 150 pixels in localStorage
      localStorage.setItem(
        'wordpressPricingSection',
        myRef.current.offsetTop - 50
      )
    }
  }, [])
  return (
    <div className={`${CommonStyle.ContainerWidth} mt-5 py-5`} ref={myRef}>
      <h1 className={`${Styles.Heading} mt-md-5 mt-3`}>
        WordPress hosting plans for any brand
      </h1>

      {/* Pricing Cards */}
      <div className="row justify-content-center">
        {pricingPlans.map((plan, index) => (
          <div className="col-md-4 mt-3" key={index}>
            <Pricing {...plan} />
          </div>
        ))}
      </div>

      {/* Trusted Logos Section */}
      <div className="my-5">
        <h3 className="text-muted fw-normal">Trusted by top brands</h3>
        <div className="row justify-content-center align-items-center">
          {trustedLogos.map((src, index) => (
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

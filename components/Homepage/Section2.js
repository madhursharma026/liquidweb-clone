import { useState } from 'react'
import CommonStyle from '../../styles/commomStyle.module.css'
import Styles from '../../styles/Homepage/Homepage.module.css'
import Pricing from './components/Pricing'

const Section2 = () => {
  const [showFeatures, setShowFeatures] = useState(false)

  const toggleFeatures = () => {
    setShowFeatures((prev) => !prev)
  }

  const pricingData = [
    {
      offers: 'Up to 50% off 3 mos',
      cardTitle: 'Bare metal',
      cardDescription: 'For raw power and control',
      price: '39.50',
      buttonText: 'bare',
      darkORLightBG: 'light',
    },
    {
      offers: 'Up to 50% off 3 mos',
      cardTitle: 'Managed metal',
      cardDescription: 'For peak security and support',
      price: '99.50',
      buttonText: 'managed',
      darkORLightBG: 'light',
    },
    {
      offers: 'Scale without limits',
      cardTitle: 'Custom metal',
      cardDescription: 'For remarkable customization',
      price: '23.40',
      buttonText: 'custom',
      darkORLightBG: 'dark',
    },
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
          <div key={index} className="col-lg-4 col-md-6 mt-3">
            <Pricing
              {...item}
              showFeatures={showFeatures}
              toggleFeatures={toggleFeatures}
            />
          </div>
        ))}
      </div>

      <p className="mt-5 fs-5">
        187K brands—and counting—level up with Liquid Web
      </p>

      <div className="mb-5">
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

export default Section2

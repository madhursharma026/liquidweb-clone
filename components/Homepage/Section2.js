import { useEffect, useRef, useState } from 'react'
import CommonStyle from '../../styles/commomStyle.module.css'
import Styles from '../../styles/Homepage/Homepage.module.css'
import Pricing from './components/Pricing'

const Section2 = () => {
  const myRef = useRef(null)
  const [showFeatures, setShowFeatures] = useState(false)

  useEffect(() => {
    if (myRef.current) {
      // Store the offset top value adjusted by 150 pixels in localStorage
      localStorage.setItem('homePricingSection', myRef.current.offsetTop - 150)
    }
  }, [])

  const toggleFeatures = () => setShowFeatures((prev) => !prev)

  const pricingData = [
    {
      offers: 'Up to 50% off 3 mos',
      cardTitle: 'Web Hosting',
      cardDescription: 'For raw power and control',
      price: '39.50',
      buttonText: 'Web',
      buttonURL: 'web-hosting',
      features: [
        'Unlimited Websites',
        '400,000 Visits Monthly',
        'Unmetered Traffic',
        'Cloudlinux',
        'Litespeed',
        'Free SSL',
        'Free CDN',
        'Daily Backup',
        'Enhanced Security',
      ],
    },
    {
      offers: 'Up to 50% off 3 mos',
      cardTitle: 'Wordpress Hosting',
      cardDescription: 'Best hosting for scalability and reliability',
      price: '5.25',
      buttonText: 'Wordpress',
      buttonURL: 'wordpress-hosting',
      features: [
        'Free staging sites',
        '1-250 sites',
        '10-20 workers PHP/site',
        'Unlimited traffic',
        '24/7 expert support',
        '100% uptime',
        'Dedicated IP addresses',
      ],
    },
    {
      offers: 'Scale without limits',
      cardTitle: 'VPS Hosting',
      cardDescription: 'Best web hosting for flexibility and affordability',
      price: '23.40',
      buttonText: 'VPS',
      buttonURL: 'vps-hosting',
      features: [
        'Linux & Windows',
        'Fully or self-managed',
        '10G network',
        'Fully customizable',
        'Unlimited websites',
        'Hosting add-ons',
      ],
    },
  ]

  const logos = [
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
    <div className={`${CommonStyle.ContainerWidth} my-5`} ref={myRef}>
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
        187K brands—and counting—level up with Sleeknode
      </p>

      <div className="mb-5">
        <div className="row justify-content-center align-items-center">
          {logos.map((logo, idx) => (
            <div key={idx} className="col-lg col-md-3 col-4 pt-5 text-center">
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

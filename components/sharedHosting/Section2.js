import { useEffect, useRef } from 'react'
import CommonStyle from '../../styles/commomStyle.module.css'
import Pricing from './components/pricing'

export default function Section2() {
  const myRef = useRef(null)

  useEffect(() => {
    if (myRef.current) {
      // Store the offset top value adjusted by 150 pixels in localStorage
      localStorage.setItem('webPricingSection', myRef.current.offsetTop - 100)
    }
  }, [])
  return (
    <section className={`${CommonStyle.ContainerWidth}`} ref={myRef}>
      <h1>Web Hosting Plans</h1>
      <p className="fs-5">
        For a limited time, get a <b>free domain</b> and{' '}
        <b> free site transfer</b> on <b>all plans</b>
      </p>

      <div className="row justify-content-center">
        <div className="col-lg-4 col-md-6 mt-lg-0 mt-3">
          <Pricing
            cardTitle="StartUp"
            cardDescription="For small business sites"
            price="$2.99"
            originalPrice="$17.99/mo.*"
          />
        </div>
        <div className="col-lg-4 col-md-6 mt-lg-0 mt-3">
          <Pricing
            cardTitle="GrowBig"
            cardDescription="Perfect for Your Growing Business"
            price="$4.99"
            originalPrice="$29.99/mo.*"
            bestDeal={true}
          />
        </div>
        <div className="col-lg-4 col-md-6 mt-lg-0 mt-3">
          <Pricing
            cardTitle="GoGeek"
            cardDescription="More Power for Bigger Sites"
            price="$7.99"
            originalPrice="$44.99/mo.*"
          />
        </div>
      </div>
    </section>
  )
}

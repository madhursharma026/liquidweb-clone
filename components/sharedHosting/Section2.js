import CommonStyle from '../../styles/commomStyle.module.css'
import Pricing from './components/pricing'

export default function Section2() {
  return (
    <div
      className={`${CommonStyle.ContainerWidth}`}
      style={{ marginTop: '-50px' }}
    >
      <h1>Web Hosting Plans</h1>
      <p className="fs-5">
        For a limited time, get a <b>free domain</b> and
        <b> free site transfer</b> on
        <b> all plans</b>
      </p>

      <div className="row justify-content-center">
        <div className="col-lg-4 col-md-6 mt-lg-0 mt-3">
          <Pricing
            cardTitle={'StartUp'}
            cardDescription={'For small business sites'}
            price={'$2.99'}
            originalPrice={'$17.99/mo.*'}
          />
        </div>
        <div className="col-lg-4 col-md-6 mt-lg-0 mt-3">
          <Pricing
            cardTitle={'GrowBig'}
            cardDescription={'Perfect for Your Growing Business'}
            price={'$4.99'}
            originalPrice={'$29.99/mo.*'}
            bestDeal={true}
          />
        </div>
        <div className="col-lg-4 col-md-6 mt-lg-0 mt-3">
          <Pricing
            cardTitle={'GoGeek'}
            cardDescription={'More Power for Bigger Sites'}
            price={'$7.99'}
            originalPrice={'$44.99/mo.*'}
          />
        </div>
      </div>
    </div>
  )
}

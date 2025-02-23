import Styles from '../../styles/Footer/Footer.module.css'
import CommonStyle from '../../styles/commomStyle.module.css'

const Footer = () => {
  return (
    <div className={`${CommonStyle.ContainerWidth} mb-5`}>
      <hr />
      <h5 className="pt-3 text-center">Related hosting content</h5>
      <div className="d-flex justify-content-center w-100 mt-4 pb-3">
        <h6 className={`px-3`}>VPS Hosting Plans</h6>
        <h6 className={`px-3`}>Wordpress Hosting</h6>
        <h6 className={`px-3`}>All Hosting</h6>
      </div>
      <hr />

      <div className="mt-5">
        <div className="mb-5">
          <div className="row justify-content-center align-items-center">
            <div className="col-xl col-lg-2 col-md-3 col-sm-4 col-6 mt-5 text-center">
              <img
                src={
                  'https://www.liquidweb.com/wp-content/uploads/2024/05/HIPAA.png'
                }
                alt="Company Logo"
                className={`img-fluid ${Styles.logoImg}`}
              />
            </div>
            <div className="col-xl col-lg-2 col-md-3 col-sm-4 col-6 mt-5 text-center">
              <img
                src={
                  'https://www.liquidweb.com/wp-content/uploads/2024/05/RedHat.png'
                }
                alt="Company Logo"
                className={`img-fluid ${Styles.logoImg}`}
              />
            </div>
            <div className="col-xl col-lg-2 col-md-3 col-sm-4 col-6 mt-5 text-center">
              <img
                src={
                  'https://www.liquidweb.com/wp-content/uploads/2024/05/cPanel-U.png'
                }
                alt="Company Logo"
                className={`img-fluid ${Styles.logoImg}`}
              />
            </div>
            <div className="col-xl col-lg-2 col-md-3 col-sm-4 col-6 mt-5 text-center">
              <img
                src={
                  'https://www.liquidweb.com/wp-content/uploads/2024/05/SSAE-16.png'
                }
                alt="Company Logo"
                className={`img-fluid ${Styles.logoImg}`}
              />
            </div>
            <div className="col-xl col-lg-2 col-md-3 col-sm-4 col-6 mt-5 text-center">
              <img
                src={
                  'https://www.liquidweb.com/wp-content/uploads/2024/05/CCNA.png'
                }
                alt="Company Logo"
                className={`img-fluid ${Styles.logoImg}`}
              />
            </div>
            <div className="col-xl col-lg-2 col-md-3 col-sm-4 col-6 mt-5 text-center">
              <img
                src={
                  'https://www.liquidweb.com/wp-content/uploads/2024/05/Microsoft-Partner.png'
                }
                alt="Company Logo"
                className={`img-fluid ${Styles.logoImg}`}
              />
            </div>
            <div className="col-xl col-lg-2 col-md-3 col-sm-4 col-6 mt-5 text-center">
              <img
                src={
                  'https://www.liquidweb.com/wp-content/uploads/2024/05/AICPA.png'
                }
                alt="Company Logo"
                className={`img-fluid ${Styles.logoImg}`}
              />
            </div>
            <div className="col-xl col-lg-2 col-md-3 col-sm-4 col-6 mt-5 text-center"></div>
            <div className="col-xl col-lg-2 col-md-3 col-sm-4 col-6 mt-5 text-center"></div>
            <div className="col-xl col-lg-2 col-md-3 col-sm-4 col-6 mt-5 text-center">
              <img
                src={
                  'https://hostadvice.com/awards/2025-best-dedicated-hosting-provider.png'
                }
                alt="Company Logo"
                className={`img-fluid ${Styles.logoImg}`}
              />
            </div>
            <div className="col-xl col-lg-2 col-md-3 col-sm-4 col-6 mt-5 text-center">
              <img
                src={'https://hostadvice.com/awards/2025-excellent-service.png'}
                alt="Company Logo"
                className={`img-fluid ${Styles.logoImg}`}
              />
            </div>
            <div className="col-xl col-lg-2 col-md-3 col-sm-4 col-6 mt-5 text-center">
              <img
                src={
                  'https://www.liquidweb.com/wp-content/uploads/2024/05/bbb.png'
                }
                alt="Company Logo"
                className={`img-fluid ${Styles.logoImg}`}
              />
            </div>
          </div>
        </div>
      </div>

      <h6 className="mt-5">
        Liquid Web, a <u>web hosting</u> company with 18 <u>data centers</u>{' '}
        globally
      </h6>
      <h6 className="mt-5">
        California Notice
        <img
          src="https://www.liquidweb.com/wp-content/uploads/2024/05/privacyoptions-p-500.png"
          alt="#ImgNotFound"
          width="30px"
          className="mx-2"
        />
        Do not sell my info
        <img
          src="https://www.liquidweb.com/wp-content/uploads/2025/01/usa-flag.svg"
          alt="#ImgNotFound"
          width="30px"
          className="mx-2"
        />
        All prices are in USD
      </h6>
      <h6 className="text-secondary mt-4">
        * Promotions may be exclusively available to new customers and cannot be
        applied to existing accounts. Qualification is at the sole discretion of
        Liquid Web. Reach out with questions.
      </h6>
    </div>
  )
}

export default Footer

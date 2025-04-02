import styles from '../../styles/AboutUs/AboutUs.module.css'
import CommonStyle from '../../styles/commomStyle.module.css'

export default function Section2() {
  return (
    <div
      className={`${CommonStyle.ContainerWidth}`}
      style={{ marginTop: '-50px' }}
    >
      <div className="row">
        <div
          className="col-md-6 p-5 d-flex flex-column justify-content-center align-items-center text-center"
          style={{
            background: 'url("/supportSection2Image10.png")',
          }}
        >
          <img
            src="/AboutUsSection1Img.png"
            alt="#ImgNotFound"
            className="w-100"
            style={{ maxHeight: '600px', maxWidth: '400px' }}
          />
        </div>

        <div
          className="col-md-6 p-5"
          style={{
            background: 'url("/supportSection2Image10.png")',
          }}
        >
          <h1 className="fw-normal text-white mt-5">
            One host, <br />
            endless possibilities
          </h1>
          <p className="text-white mt-5 fs-5">
            Liquid Web offers a diverse range of hosting solutions—including
            dedicated servers, cloud hosting, and VPS hosting—for businesses of
            all sizes. Serving over 180,000 customers worldwide, we help launch,
            nurture, and grow online footprints with premium hosting, flexible
            reseller and partner programs, and expert support.
          </p>
          <p className="text-white mt-5 fs-5">
            With reliability and innovation at the core of your service, you can
            seamlessly connect with your audience anytime, anywhere. We build
            for you and with you. Your success is our top priority and ultimate
            validation.
          </p>
          <div className="mt-5">
            <button
              className={`rounded-pill mt-2 ms-1 fs-5 ${styles.customButtonWhite}`}
            >
              Hosting <span className={styles.hiddenArrow}>→</span>
            </button>
            <button
              className={`rounded-pill mt-2 ms-1 fs-5 ${styles.customButtonWhite}`}
            >
              Partner Programs <span className={styles.hiddenArrow}>→</span>
            </button>
            <button
              className={`rounded-pill mt-2 ms-1 fs-5 ${styles.customButtonWhite}`}
            >
              Support <span className={styles.hiddenArrow}>→</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

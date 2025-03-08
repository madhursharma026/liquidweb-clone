import CommonStyle from '../../styles/commomStyle.module.css'
import styles from '../../styles/Support/support.module.css'

export default function Section2() {
  return (
    <div className={`${CommonStyle.ContainerWidth} py-5 my-5`}>
      <h1 className="fw-normal">Why choose a Liquid Web migration</h1>
      <div className="row mt-4">
        <div className="col-lg-6 mt-4">
          <div className={`${styles.cardContainer} h-100 rounded-3`}>
            <div className="p-4">
              <h3 className="fw-normal">Systematic approach</h3>
              <p className={`text-muted mt-4`}>
                We use a fully documented process to ensure your web hosting
                migration is streamlined. While timelines vary based on the
                scope and complexity, we keep you informed at every step so you
                always know what to expect.
              </p>
              <div>
                <i class="fa fa-gears fs-4"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 mt-4">
          <div className={`${styles.imgContainer} h-100`}>
            <img
              src="/supportSection2Image1.jpg"
              alt="#ImgNotFound"
              className="w-100 img-fluid rounded-3"
            />
            <div className={`${styles.centeredText}`}>
              <button
                className={`rounded-pill mt-3 text-center border-0 ${styles.customButtonWhite}`}
                style={{
                  marginRight: '1rem',
                }}
              >
                We’re here to help
                <span className={styles.hiddenArrow}> →</span>
              </button>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mt-4">
          <img
            src="supportSection2Image2.png"
            alt="#ImgNotFound"
            className="w-100 rounded-3"
          />
        </div>
        <div className="col-lg-4 col-md-6 mt-4">
          <div className={`${styles.cardContainer} h-100 rounded-3`}>
            <div className="p-4">
              <h3 className="fw-normal">Specialist-driven</h3>
              <p className={`text-muted mt-4`}>
                Our highly trained migration specialists do all the heavy
                lifting for you. With thousands of migrations under their belt,
                they proactively manage the process, avoiding common pitfalls
                and ensuring a successful transition.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mt-4">
          <div className={`${styles.cardContainer} h-100 rounded-3`}>
            <div className="p-4">
              <h3 className="fw-normal">Free service</h3>
              <p className={`text-muted mt-4`}>
                Enjoy free migrations with your fully managed support plan, with
                few exceptions. We discuss the scope of your migration and any
                special considerations related to your servers to ensure a fluid
                process tailored to your needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

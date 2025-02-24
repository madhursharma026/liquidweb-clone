import CommonStyle from '../../styles/commomStyle.module.css'
import styles from '../../styles/VpsHosting/VpsHosting.module.css'

export default function Section10() {
  return (
    <div className="bg-dark">
      <div className={CommonStyle.ContainerWidth}>
        <div className="py-5">
          <div className="row">
            <div className="col-lg-3 px-lg-0 offset-lg-1 px-md-5 order-lg-2 d-flex align-items-center justify-content-center">
              <img
                src="/sharedHostingSection1Image.png"
                alt="#ImgNotFound"
                className="w-100 px-lg-0 px-md-5"
              />
            </div>
            <div className="col-lg-8 text-white mt-lg-0 mt-5 d-flex align-items-center justify-content-center">
              <div>
                <h1>
                  Millions of happy customers get better website presence with
                  us. You can too.
                </h1>
                <button
                  className={`rounded-pill bg-white text-black mt-4 ${styles.customButton}`}
                >
                  Start Now
                  <span className={styles.hiddenArrow}> →</span>
                </button>
                <button
                  className={`rounded-pill bg-white ms-3 text-black mt-4 ${styles.customButton}`}
                >
                  Chat with an expert
                  <span className={styles.hiddenArrow}> →</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

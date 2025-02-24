import CommonStyle from '../../styles/commomStyle.module.css'
import styles from '../../styles/VpsHosting/VpsHosting.module.css'

export default function Section7() {
  return (
    <div className="bg-light">
      <div className={`${CommonStyle.ContainerWidth}`}>
        <div className="row align-items-center mt-5 py-5">
          <div className="col-md-6 text-center text-white order-md-2">
            <div className="position-relative">
              <img
                src="/Interfaces.png"
                alt="#ImgNotFound"
                className="img-fluid rounded-3 w-100"
              />
            </div>
          </div>
          <div className="col-md-6 mt-md-0 mt-3">
            <h1 className="fw-normal lh-2">
              Interfaces that Make Website Management a Breeze
            </h1>
            <p className="fw-normal mt-3" style={{ fontSize: '18px' }}>
              Take a look at how easy and intuitive it is to create and manage
              sites with our Client Area and access our Site Tools demo to
              experience the wide range of site tools we offer.
            </p>
            <button
              className={`rounded-pill text-center mt-4 ${styles.customButton}`}
            >
              Site Tools Demo
              <span className={styles.hiddenArrow}> →</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

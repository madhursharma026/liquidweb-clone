import CommonStyle from '../../styles/commomStyle.module.css'
import styles from '../../styles/VpsHosting/VpsHosting.module.css'

export default function Section4() {
  return (
    <div className="bg-dark">
      <div className={CommonStyle.ContainerWidth}>
        <div className="py-5">
          <div className="row">
            <div className="col-lg-3 px-lg-0 px-md-5">
              <img
                src="/SageWebsiteImage.png"
                alt="#ImgNotFound"
                className="w-100 px-lg-0 px-md-5"
              />
            </div>
            <div className="col-lg-8 text-white offset-lg-1 mt-lg-0 mt-5">
              <h1>Build Your Perfect Website</h1>
              <p>
                Create your dream website in minutes with our intuitive
                sleeknode Site Builder and launch a stunning professional site
                complete with built-in SEO and easy content management.
              </p>
              <button
                className={`rounded-pill bg-white text-black mt-4 ${styles.customButton}`}
              >
                Learn More
                <span className={styles.hiddenArrow}> →</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

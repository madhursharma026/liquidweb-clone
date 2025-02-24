import CommonStyle from '../../styles/commomStyle.module.css'
import styles from '../../styles/VpsHosting/VpsHosting.module.css'

export default function Section3() {
  return (
    <div className={`${CommonStyle.ContainerWidth} mt-5 py-5`}>
      <div className="row">
        <div className="col-lg-4 col-md-6 d-flex flex-column justify-content-center">
          <div>
            <span
              className="border px-2 py-1 rounded text-primary"
              style={{ letterSpacing: '1.4px', fontSize: '12px' }}
            >
              Kadence: A Liquid Web brand
            </span>
            <h1 className={`${styles.Heading} mt-4`}>
              Take your{' '}
              <span
                className="px-2 rounded border"
                style={{ background: '#F5F4FF' }}
              >
                WordPress
              </span>{' '}
              site to the next level with Kadence AI
            </h1>
            <p className="mt-4">
              With the Kadence Theme and Kadence Blocks, you can leverage
              AI-powered features to create high-performing, fast WordPress
              sites with ease.
            </p>
          </div>
        </div>
        <div className="col-md-6 d-flex flex-column justify-content-center offset-lg-2 mt-md-0 mt-3">
          <div className="d-flex align-items-center justify-content-center w-100">
            <img
              src="/kadenceAIResized2.png"
              alt="#ImgNotFound"
              className="w-100 rounded-4"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

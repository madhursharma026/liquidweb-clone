import CommonStyle from '../../styles/commomStyle.module.css'
import styles from '../../styles/VpsHosting/VpsHosting.module.css'

export default function Section1() {
  return (
    <div
      className="py-5"
      style={{
        background: 'url("/supportSection1BG.jpg")',
        backgroundSize: 'cover',
        marginTop: '100px',
      }}
    >
      <div className={`${CommonStyle.ContainerWidth} py-5 text-white`}>
        <h1 style={{ fontSize: 'calc(1.5vw + 2vh + 1vmin)' }}>
          Web hosting migration services
        </h1>
        <h5 className="mt-3">
          Let our experienced migration team transfer your data to Liquid Web
        </h5>
        <button
          className={`rounded-pill mt-3 text-center border-0 ${styles.customButtonWhite}`}
          style={{
            marginRight: '1rem',
          }}
        >
          Chat with an expert
          <span className={styles.hiddenArrow}> →</span>
        </button>
      </div>
    </div>
  )
}

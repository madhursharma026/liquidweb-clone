import styles from '../../styles/AboutUs/AboutUs.module.css'
import CommonStyle from '../../styles/commomStyle.module.css'

const Section4 = () => {
  const sectionData = [
    {
      title: 'Join our satisfied customers',
      description:
        'Experience unrivaled reliability and performance when you host with us.',
      bgStyle: {
        background:
          'linear-gradient(45deg, #895045, #604A62, #94666E, #A8776E, #D1957A)',
      },
      btnText: 'Explore Hosting',
      textColor: 'text-white',
    },
    {
      title: 'Join our talented team',
      description:
        'We’re looking for driven, passionate team members who believe in exceptional work.',
      bgStyle: {
        backgroundImage: 'url(/AboutUsSection3Img.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      },
      btnText: 'See Open Positions',
      textColor: 'text-white',
    },
  ]
  return (
    <div className={`${CommonStyle.ContainerWidth}`}>
      <div className="mt-5 pt-lg-5 row">
        {sectionData.map((item, index) => (
          <div key={index} className="col-md-6 mt-md-0 mt-4">
            <div
              className="rounded-4 p-lg-5 py-3 px-4 h-100 mt-md-0 mt-4"
              style={item.bgStyle}
            >
              <h2 className={`fw-normal ${item.textColor}`}>{item.title}</h2>
              {/* Spacer for layout adjustments */}
              <div
                className="d-md-block d-none"
                style={{ marginBottom: '7rem' }}
              ></div>
              <div
                className="d-md-none d-block"
                style={{ marginBottom: '4rem' }}
              ></div>
              <p
                className={`${item.textColor} fs-5`}
                style={{ maxWidth: '450px' }}
              >
                {item.description}
              </p>
              <button
                className={`rounded-pill mt-2 fs-5 ${styles.customButtonWhite}`}
              >
                {item.btnText} <span className={styles.hiddenArrow}>→</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Section4

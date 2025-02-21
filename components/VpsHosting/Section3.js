import CommonStyle from '../../styles/commomStyle.module.css'
import Styles from '../../styles/VpsHosting/VpsHosting.module.css'
import Services from '../Homepage/components/Services'

const sectionData = [
  {
    title: 'Migration made easy— at no charge',
    description:
      'We offer free data migration for most customers, with specialists ensuring a smooth move and minimal downtime.',
    bgStyle: {
      background:
        'linear-gradient(45deg,#FAFFF8,#E4FAD1,#F3BCA8,#FAE0D7,#FEFDFD)',
    },
    textColor: 'text-dark',
  },
  {
    title: 'Technical support on standby 24/7',
    description:
      'Our support team is available day and night, guaranteeing you get expert assistance and advice whenever you need it.',
    bgStyle: {
      backgroundImage:
        'url(https://www.liquidweb.com/wp-content/uploads/2024/08/wp-support-revised.webp)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
    textColor: 'text-white',
  },
]

export default function Section3() {
  return (
    <div className={`${CommonStyle.ContainerWidth} pt-5`}>
      <p className={`${Styles.Heading} mt-md-5 mt-3`}>
        Decades of hosting expertise at your service
      </p>
      <p
        className="mt-4 fs-5 text-muted"
        style={{ maxWidth: '800px', lineHeight: '25px' }}
      >
        Virtual private server hosting is the best solution for those seeking
        dedicated resources, enhanced control, and scalability at a more
        affordable price than traditional dedicated servers. More brands than
        ever are choosing Liquid Web for VPS hosting thanks to our exceptional
        uptime and top-tier support that keeps them online and thriving.
      </p>

      <div className="mt-5 pt-lg-5 row">
        {sectionData.map((item, index) => (
          <div key={index} className="col-md-6 mt-md-0 mt-4">
            <div
              className="rounded-4 p-lg-5 py-3 px-4 h-100 mt-md-0 mt-4"
              style={item.bgStyle}
            >
              <h2 className={`fw-normal ${item.textColor}`}>{item.title}</h2>
              <div
                className="d-md-block d-none"
                style={{ marginBottom: '10rem' }}
              ></div>
              <div
                className="d-md-none d-block"
                style={{ marginBottom: '5rem' }}
              ></div>
              <h5 className={`${item.textColor}`} style={{ maxWidth: '450px' }}>
                {item.description}
              </h5>
            </div>
          </div>
        ))}
      </div>

      <Services />
      <Services />
    </div>
  )
}

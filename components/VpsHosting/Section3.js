import Typewriter from 'typewriter-effect'
import CommonStyle from '../../styles/commomStyle.module.css'
import Styles from '../../styles/VpsHosting/VpsHosting.module.css'
import Services from './components/services'

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
      <div className="row align-items-center mt-5 pt-md-5">
        <div className="col-md-6">
          <h1 className="fw-normal lh-base" style={{ maxWidth: '300px' }}>
            Superior web panel flexibility
          </h1>
          <p
            className="fw-normal mt-3"
            style={{ fontSize: '18px', maxWidth: '450px' }}
          >
            We offer more control panel options than other dedicated server
            hosting providers, giving you the freedom to customize access
            exactly the way you want. Choose from InterWorx, cPanel, or Plesk.
          </p>
        </div>
        <div className="col-md-6 mt-md-0 mt-3 text-center text-white">
          <div className="position-relative">
            <img
              src="https://www.liquidweb.com/wp-content/uploads/2024/11/panelsv3.svg"
              alt="Control Panels"
              className="img-fluid rounded-3 w-100"
            />
            <div className={`${Styles.centeredText} text-white`}>
              <h3 className="m-0">
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString('AlmaLinux 8 64-bit with Interworx')
                      .pauseFor(1000)
                      .deleteAll()
                      .typeString('AlmaLinux 8 64-bit with cPanel')
                      .pauseFor(1000)
                      .deleteAll()
                      .typeString('AlmaLinux 9 64-bit with Plesk')
                      .pauseFor(1000)
                      .start()
                  }}
                  options={{ loop: true }}
                />
              </h3>
            </div>
          </div>
        </div>
      </div>
      <p className={`${Styles.Heading} mt-md-5 mt-3 pt-5`}>
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

      <Services
        title={'Instant, easy scalability'}
        description={
          'Quickly scale your VPS server up or down from the command line or your management dashboard to handle growing demand.'
        }
        btnNeeded={false}
        btnText={''}
        videoContainerORGraphContainer={'video'}
      />
      <Services
        title={'Lightning-fast VPS hosting'}
        description={
          'Liquid Web is known for delivering the fastest Linux, Apache, MySQL, and PHP (LAMP) stack performance. A third-party analyst found that our VPS speed is faster than Rackspace, DigitalOcean, and Amazon.'
        }
        btnNeeded={true}
        btnText={'Explore Cloud VPS Hosting'}
        videoContainerORGraphContainer={'graph'}
      />
    </div>
  )
}

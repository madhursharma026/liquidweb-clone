import CommonStyle from '../../styles/commomStyle.module.css'
import Services from './components/Services'

const Section6 = () => {
  return (
    <div className={`my-5 py-5 ${CommonStyle.ContainerWidth}`}>
      <div className="row mt-5">
        <div className="col-md-5">
          <p className="fw-normal lh-2" style={{ fontSize: '42px' }}>
            Web hosting services that help your business thrive
          </p>
        </div>
      </div>

      {/* {[...Array(4)].map((_, index) => ( */}
      <Services
        title={'Unbeatable hosting uptime'}
        description={
          '100% guaranteed network uptime means your business is always online, so you never miss a customer, a sale, or an opportunity to grow.'
        }
        btnText={'Review Our SLA'}
        imageOrVideo={'image'}
        sourceURL="/100PercentUpTime.png"
      />
      <Services
        title={'Fully managed web hosting'}
        description={
          'Server management and maintenance are available for most website hosting solutions. Let our team handle the technical details, so you can focus on your business.'
        }
        btnText={'Browse Support Packages'}
        imageOrVideo={'video'}
        sourceURL="/managedHosting.mp4"
      />
      <Services
        title={'24/7 expert support'}
        description={
          'Experience peace of mind with round-the-clock support—our web hosting experts are always a click away, ready to assist you whenever you need it.'
        }
        btnText={'Get Help Now'}
        imageOrVideo={'video'}
        sourceURL="/supportVideo.mp4"
      />
      <Services
        title={'Easy web hosting migrations'}
        description={
          'Switching to Liquid Web hosting is virtually seamless—our expert migration team is by your side at every step, ensuring a smooth website transition with minimal downtime. '
        }
        btnText={'Learn About Our Process'}
        imageOrVideo={'video'}
        sourceURL="/easyHosting.mp4"
      />
      {/* ))} */}
    </div>
  )
}

export default Section6

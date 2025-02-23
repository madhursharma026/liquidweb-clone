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

      {[...Array(4)].map((_, index) => (
        <Services key={index} />
      ))}
    </div>
  )
}

export default Section6

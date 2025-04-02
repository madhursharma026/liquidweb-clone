import CommonStyle from '../../styles/commomStyle.module.css'

const Section3 = () => {
  return (
    <div className={`my-5 ${CommonStyle.ContainerWidth}`}>
      <div className="row align-items-center mt-5 pt-md-5">
        <div className="col-md-6">
          <h2 className="fw-normal lh-2">
            “At Liquid Web, our future is centered around relentless innovation
            and customer success. We strive to become the leading provider of
            hosting and cloud services by continually enhancing our technology
            and support, empowering businesses to thrive online.”
          </h2>
          <p className="mt-3">
            <b>Carrie Wheeler</b> <br />
            President, Liquid Web
          </p>
        </div>

        <div className="col-md-5 offset-md-1 mt-md-0 mt-3 text-center">
          <img
            src={'/AboutUsSection2Img.png'}
            alt="Service visual"
            className="w-100 h-100 rounded-4"
          />
        </div>
      </div>
    </div>
  )
}

export default Section3

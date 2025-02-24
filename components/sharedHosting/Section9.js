import CommonStyle from '../../styles/commomStyle.module.css'

export default function Section9() {
  return (
    <div className={CommonStyle.ContainerWidth}>
      <div className="my-5 py-4">
        <div className="text-center">
          <h1>Customer Success Stories</h1>
          <p className="fs-5">
            Celebrating business owners and freelance professionals on our
            platform by sharing their stories.
          </p>
          <img
            src="CustomerStories.jpg"
            alt="#ImgNotFound"
            className="w-100 img-fluid"
          />
        </div>
      </div>
    </div>
  )
}

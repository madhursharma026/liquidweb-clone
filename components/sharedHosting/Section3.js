import Link from 'next/link'
import CommonStyle from '../../styles/commomStyle.module.css'

export default function Section3() {
  return (
    <div className={CommonStyle.ContainerWidth}>
      <div className="my-5 py-4">
        <div className="text-center">
          <h1>Host Here, Succeed Everywhere</h1>
          <p className="fs-5">
            Boost your online presence for better business results all around
          </p>
          <img
            src="/websiteLookImage.png"
            alt="#ImgNotFound"
            className="w-100 img-fluid"
          />
        </div>

        <div className="row mt-5 d-flex align-items-stretch">
          <div className="col-lg-3 col-sm-6 mt-3 d-flex flex-column">
            <h5>Launch Your Site with a Click</h5>
            <p>
              Create your perfect website effortlessly with SiteGround Site
              Builder or install WordPress for advanced functionality.
            </p>
            <Link
              href={'#'}
              className="fs-5 text-decoration-none"
              style={{ marginTop: 'auto' }}
            >
              Learn more →
            </Link>
          </div>
          <div className="col-lg-3 col-sm-6 mt-3 d-flex flex-column">
            <h5>Get a Reliable Email Service</h5>
            <p>
              Build credibility with unlimited email accounts at your own
              domain, including free spam protection and webmail.
            </p>
            <Link
              href={'#'}
              className="fs-5 text-decoration-none"
              style={{ marginTop: 'auto' }}
            >
              Learn more →
            </Link>
          </div>
          <div className="col-lg-3 col-sm-6 mt-3 d-flex flex-column">
            <h5>Transfer Sites & Emails Automatically</h5>
            <p>
              Use our free automatic WordPress and email migration tools or get
              a professional website transfer by our experts.
            </p>
            <Link
              href={'#'}
              className="fs-5 text-decoration-none"
              style={{ marginTop: 'auto' }}
            >
              Learn more →
            </Link>
          </div>
          <div className="col-lg-3 col-sm-6 mt-3 d-flex flex-column">
            <h5>Start Selling Online Easily</h5>
            <p>
              Start your online shop with a free installation of the shopping
              cart of your choice and enjoy free features such as SSL, daily
              backups and more.
            </p>
            <Link
              href={'#'}
              className="fs-5 text-decoration-none"
              style={{ marginTop: 'auto' }}
            >
              Learn more →
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

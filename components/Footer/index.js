import Link from 'next/link'
import Styles from '../../styles/Footer/Footer.module.css'
import CommonStyle from '../../styles/commomStyle.module.css'

const Footer = () => {
  const logoSources = [
    '/FooterLogo1.png',
    '/FooterLogo2.png',
    '/FooterLogo3.png',
    '/FooterLogo4.png',
    '/FooterLogo5.png',
    '/FooterLogo6.png',
    '/FooterLogo7.png',
    // Skipping empty columns (index 7 and 8) – they can be removed or replaced if needed.
    '/FooterLogo8.png',
    '/FooterLogo9.png',
    '/FooterLogo10.png',
  ]

  return (
    <div className={`${CommonStyle.ContainerWidth} mb-5`}>
      <hr />
      <h5 className="pt-3 text-center">Related hosting content</h5>
      <div className="d-flex justify-content-center w-100 mt-4 pb-3">
        <Link
          href="/vps-hosting"
          className="text-decoration-none fs-6 text-black px-3"
        >
          VPS Hosting Plans
        </Link>
        <Link
          href="/wordpress-hosting"
          className="text-decoration-none fs-6 text-black px-3"
        >
          Wordpress Hosting
        </Link>
        <Link
          href="/web-hosting"
          className="text-decoration-none fs-6 text-black px-3"
        >
          Web Hosting
        </Link>
      </div>
      <hr />

      <div className="mt-5">
        <div className="mb-5">
          <div className="row justify-content-center align-items-center">
            {logoSources.map((src, index) => (
              <div
                key={index}
                className="col-xl col-lg-2 col-md-3 col-sm-4 col-6 mt-5 text-center"
              >
                <img
                  src={src}
                  alt="Company Logo"
                  className={`img-fluid ${Styles.logoImg}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <h6 className="mt-5">
        Sleeknode, a <u>web hosting</u> company with 18 <u>data centers</u>{' '}
        globally
      </h6>
      <h6 className="mt-5">
        California Notice
        <img
          src="/FooterLogo11.png"
          alt="California Notice Logo"
          width="30"
          className="mx-2"
        />
        Do not sell my info
        <img
          src="/FooterLogo12.png"
          alt="Do Not Sell Logo"
          width="20"
          className="mx-2"
        />
        All prices are in USD
      </h6>
      <h6 className="text-secondary mt-4">
        * Promotions may be exclusively available to new customers and cannot be
        applied to existing accounts. Qualification is at the sole discretion of
        Sleeknode. Reach out with questions.
      </h6>
    </div>
  )
}

export default Footer

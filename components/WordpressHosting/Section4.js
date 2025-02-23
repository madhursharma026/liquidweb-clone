import CommonStyle from '../../styles/commomStyle.module.css'
import Styles from '../../styles/VpsHosting/VpsHosting.module.css'

export default function Section4() {
  return (
    <div className={`${CommonStyle.ContainerWidth} mt-5 py-5`}>
      <h1 className={`${Styles.Heading} mt-md-5 mt-3`}>
        WordPress hosting features across all plans
      </h1>
      <div className="mt-5 row">
        <div className="col-md-6">
          <div
            className="rounded-4 text-white p-md-5 p-4"
            style={{
              background:
                'linear-gradient(90deg, rgb(26, 49, 74) 0%, rgb(36, 68, 103) 33%, rgba(36, 68, 103, 0.6) 100%)',
            }}
          >
            <p className="fs-3 pb-5">99.999% uptime guarantee</p>
            <p className="mt-5 pt-lg-5 pt-3">
              Our uptime guarantee means your site stays online and running
              smoothly, providing reliability and peace of mind for your
              business.
            </p>
          </div>
        </div>
        <div className="col-md-6 mt-md-0 mt-4">
          <div
            className="rounded-4 p-md-5 p-4"
            style={{ background: '#F6E3DB' }}
          >
            <p className="fs-3 pb-5">Technical WordPress requirements</p>
            <p className="mt-5 pt-lg-5 pt-3">
              WordPress hosting plans are provisioned and configured based on
              WordPress.org’s official performance requirements.
            </p>
          </div>
        </div>
        <div className="col-lg-8 col-md-7 mt-4 rounded-4">
          <div
            className="h-100 rounded-4"
            style={{
              backgroundImage: `url("https://revival-strapi.s3.eu-west-2.amazonaws.com/Header_0313f83cf9.jpg")`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
            }}
          >
            <div
              className="rounded-4"
              style={{
                backgroundColor: 'rgba(0, 0, 0, 0.4)',
                width: '100%',
                height: '100%',
                display: 'flex',
              }}
            >
              <div className="p-md-5 p-4 text-white">
                <p className="fs-2 pb-5">The best WordPress support</p>
                <p className="mt-5 fs-5 pt-lg-5 pt-3">
                  With Liquid Web WordPress hosting, you gain access to a team
                  of WordPress experts who have experience with thousands of
                  sites and are always ready to support you at every step of
                  your journey.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-5 mt-4">
          <div className="rounded-4 p-md-5 p-4 card">
            <p className="fs-3 pb-5">Air-tight security</p>
            <p className="mt-5 pt-lg-5 pt-3">
              Our WordPress hosting plans ensure your site’s security with
              continuous malware monitoring, complimentary SSL certificates,
              regular PHP updates, and the highly trusted Solid Security Pro
              plugin—free with every plan.
            </p>
          </div>
        </div>
      </div>

      <div className="card mt-5">
        <div className="card-body p-sm-5 p-3">
          <div className="row">
            <div className="col-md-6">
              <h1
                className="fw-normal mt-3"
                style={{ fontSize: '45px', lineHeight: '70px' }}
              >
                Why Liquid Web for{' '}
                <span
                  className="px-2 rounded border"
                  style={{ background: '#F5F4FF' }}
                >
                  WordPress{' '}
                </span>{' '}
                hosting?
              </h1>
              <button
                className={`rounded-pill text-center mt-4 ${Styles.customButton}`}
              >
                Explore Managed WordPress →
              </button>
            </div>
            <div className="col-md-6 mt-md-0 mt-5">
              <div className="mt-3">
                <h5>
                  <svg
                    width={'20px'}
                    className="me-3"
                    viewBox="0 0 1024 1024"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path d="M174.653 1024c-58.218 0-101.974-14.464-131.268-43.386-28.923-28.55-43.385-71.565-43.385-129.043v-679.143c0-57.476 14.462-100.49 43.385-129.043 29.294-28.923 73.050-43.385 131.268-43.385h674.691c58.221 0 101.792 14.462 130.714 43.385 29.293 28.553 43.942 71.567 43.942 129.043v679.143c0 57.478-14.65 100.493-43.942 129.043-28.922 28.922-72.493 43.386-130.714 43.386h-674.691zM261.423 550.101c0 7.416 2.41 13.535 7.231 18.355 5.191 4.45 11.495 6.675 18.911 6.675h194.677l-104.013 278.668c-4.82 12.237-4.635 22.246 0.556 30.035 5.562 7.789 13.164 11.866 22.805 12.237 9.641 0 18.355-5.005 26.142-15.021l314.264-394.358c6.304-7.416 9.453-14.833 9.453-22.248s-2.592-13.535-7.782-18.355c-4.819-4.821-10.938-7.231-18.355-7.231h-194.678l104.013-278.666c4.82-12.237 4.45-22.063-1.112-29.48-5.192-7.787-12.608-11.681-22.249-11.681-9.27-0.371-17.985 4.45-26.142 14.461l-314.264 394.36c-6.303 7.046-9.455 14.462-9.455 22.249z"></path>
                  </svg>
                  The fastest WordPress hosting
                </h5>
                <p className="fs-5">
                  Liquid Web achieves the fastest WordPress speeds online
                  through multi-layered caching with the latest PHP and server
                  technologies, an integrated CDN across data centers, and
                  advanced image compression techniques.
                </p>
              </div>
              <div className="mt-5">
                <h5>
                  <svg
                    width={'20px'}
                    className="me-3"
                    viewBox="0 0 1024 1024"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path d="M517.344 1024c-4.121 0-9.272-0.858-15.453-2.573-5.837-1.376-12.019-3.782-18.543-7.213-71.769-40.864-132.55-76.922-182.342-108.173-49.449-31.245-89.283-61.466-119.501-90.656-29.875-29.53-51.681-61.293-65.417-95.29-13.392-34.336-20.088-74.688-20.088-121.046v-388.378c0-26.442 5.666-45.5 16.998-57.175 11.332-12.019 27.644-22.321 48.934-30.906 12.019-4.807 28.502-11.16 49.449-19.058 20.947-8.242 43.954-16.998 69.022-26.27 25.411-9.615 50.65-18.886 75.718-27.815 25.411-9.272 48.59-17.513 69.537-24.724 20.947-7.555 37.43-13.392 49.448-17.513 6.868-2.060 13.736-3.777 20.604-5.151 7.212-1.374 14.422-2.060 21.634-2.060s14.422 0.687 21.634 2.060c7.211 1.374 14.251 3.091 21.119 5.151 12.019 4.121 28.33 9.958 48.934 17.513 20.947 7.211 43.955 15.453 69.024 24.724 25.408 9.272 50.65 18.543 75.718 27.815 25.408 9.272 48.589 17.857 69.536 25.755s37.427 14.422 49.446 19.573c21.632 8.929 37.946 19.23 48.934 30.906 11.334 11.676 16.998 30.733 16.998 57.175v388.378c0 46.358-6.522 87.049-19.571 122.076-13.050 34.682-34.515 67.136-64.39 97.35-29.53 30.221-69.19 60.781-118.982 91.686-49.453 30.906-110.918 65.587-184.404 104.051-6.525 3.43-12.877 5.837-19.059 7.213-5.837 1.715-10.817 2.573-14.938 2.573zM459.654 744.307c8.929 0 16.998-2.061 24.209-6.182s13.564-10.304 19.059-18.541l242.090-381.684c3.091-5.151 6.010-10.645 8.762-16.483 2.746-5.837 4.122-11.676 4.122-17.513 0-12.019-4.467-21.462-13.395-28.33-8.928-7.211-18.886-10.817-29.875-10.817-15.11 0-27.469 7.898-37.088 23.694l-219.942 353.354-104.563-134.956c-6.525-8.585-12.877-14.423-19.059-17.514-5.837-3.090-12.534-4.636-20.088-4.636-11.676 0-21.462 4.292-29.361 12.877-7.898 8.241-11.847 18.2-11.847 29.875 0 5.837 1.030 11.676 3.091 17.513 2.404 5.494 5.494 10.817 9.272 15.968l129.288 158.65c6.868 8.928 13.908 15.277 21.119 19.053 7.212 3.782 15.281 5.67 24.209 5.67z"></path>
                  </svg>{' '}
                  The fastest WordPress hosting
                </h5>
                <p className="fs-5">
                  Liquid Web achieves the fastest WordPress speeds online
                  through multi-layered caching with the latest PHP and server
                  technologies, an integrated CDN across data centers, and
                  advanced image compression techniques.
                </p>
              </div>
              <div className="mt-5">
                <h5>
                  <svg
                    width={'20px'}
                    className="me-3"
                    viewBox="0 0 1024 1024"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path d="M579.857 1024c-8.493 0-15.815-2.931-21.965-8.787-6.15-5.562-9.958-12.736-11.422-21.523-7.322-46.566-14.936-85.664-22.844-117.293s-18.157-57.549-30.751-77.754c-12.3-20.211-28.408-36.32-48.323-48.326-19.915-12.301-45.394-22.112-76.438-29.434-30.751-7.61-68.969-14.496-114.656-20.646-9.079-1.171-16.547-4.832-22.404-10.982-5.857-6.438-8.786-14.054-8.786-22.842s2.929-16.256 8.786-22.406c5.857-6.441 13.472-10.248 22.844-11.42 45.394-4.979 83.613-10.982 114.657-18.011 31.336-7.029 57.108-16.694 77.316-28.994 20.208-12.593 36.608-29.14 49.201-49.64s22.697-46.712 30.312-78.634c7.615-31.922 14.643-71.313 21.086-118.171 1.464-8.786 5.272-15.961 11.422-21.525s13.471-8.347 21.965-8.347c8.493 0 15.814 2.782 21.965 8.347s9.957 12.739 11.421 21.525c7.028 46.858 14.497 86.249 22.404 118.171 7.905 31.629 18.010 57.694 30.311 78.195 12.595 20.208 28.845 36.462 48.762 48.762 20.211 12.3 45.69 22.111 76.435 29.433 31.046 7.028 69.414 13.325 115.098 18.89 9.082 1.464 16.55 5.418 22.406 11.861 5.856 6.15 8.787 13.472 8.787 21.965 0 8.787-2.931 16.403-8.787 22.842-5.856 6.445-13.472 10.106-22.848 10.982-45.389 4.979-83.757 11.13-115.091 18.451-31.046 7.027-56.819 16.691-77.318 28.992-20.205 12.013-36.461 28.41-48.762 49.203-12.301 20.499-22.406 46.714-30.311 78.637-7.614 32.211-14.643 71.603-21.086 118.17-1.464 8.787-5.272 15.962-11.421 21.523-5.857 5.856-13.179 8.787-21.965 8.787zM265.32 535.063c-11.715 0-18.304-6.296-19.768-18.89-3.515-28.701-7.176-51.251-10.982-67.652-3.515-16.401-9.518-28.701-18.012-36.901-8.493-8.493-21.086-14.789-37.779-18.89-16.693-4.393-39.83-8.786-69.409-13.179-13.179-2.050-19.768-8.639-19.768-19.768s5.857-17.718 17.572-19.768c29.873-5.564 53.302-10.543 70.288-14.936 17.279-4.393 30.164-10.69 38.658-18.89s14.643-20.207 18.451-36.022c3.807-16.108 7.468-38.365 10.982-66.772 1.464-12.593 8.054-18.89 19.768-18.89s18.304 6.004 19.768 18.012c3.807 29.579 7.614 52.716 11.421 69.409s9.811 29.286 18.012 37.78c8.493 8.2 21.233 14.35 38.218 18.45 16.986 3.807 40.562 7.761 70.727 11.861 4.979 0.586 9.079 2.782 12.3 6.589 3.514 3.514 5.272 7.907 5.272 13.179 0 10.836-5.711 17.425-17.133 19.768-30.458 5.272-54.18 10.25-71.166 14.936-16.986 4.393-29.725 10.689-38.218 18.89-8.2 8.2-14.204 20.354-18.012 36.461s-7.614 38.512-11.421 67.213c-0.586 5.271-2.782 9.664-6.589 13.179-3.514 3.221-7.907 4.832-13.179 4.832zM479.258 219.648c-7.322 0-11.568-3.807-12.74-11.421-2.929-17.865-5.564-31.776-7.907-41.733s-6.15-17.572-11.421-22.844c-4.979-5.272-12.593-9.225-22.844-11.861-10.25-2.929-24.747-6.004-43.491-9.225-7.907-1.464-11.861-5.711-11.861-12.74 0-6.736 3.807-10.982 11.422-12.739 18.743-3.515 33.386-6.736 43.93-9.665s18.304-6.883 23.283-11.861c5.272-5.272 8.932-12.886 10.982-22.843 2.343-9.957 4.979-23.576 7.907-40.855 1.172-7.907 5.418-11.861 12.74-11.861 7.028 0 11.129 3.807 12.3 11.422 2.929 17.865 5.564 31.922 7.907 42.172s6.004 18.011 10.982 23.283c5.272 4.979 13.033 8.932 23.283 11.861 10.543 2.636 25.186 5.418 43.93 8.347 7.614 1.464 11.421 5.711 11.421 12.739s-3.661 11.276-10.982 12.74c-19.036 3.514-33.826 6.736-44.369 9.665-10.25 2.929-17.865 7.028-22.844 12.3s-8.786 12.886-11.422 22.844c-2.343 9.957-4.979 23.722-7.907 41.293-1.171 7.322-5.272 10.982-12.3 10.982z"></path>
                  </svg>{' '}
                  The fastest WordPress hosting
                </h5>
                <p className="fs-5">
                  Liquid Web achieves the fastest WordPress speeds online
                  through multi-layered caching with the latest PHP and server
                  technologies, an integrated CDN across data centers, and
                  advanced image compression techniques.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

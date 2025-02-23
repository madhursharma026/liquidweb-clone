import Link from 'next/link'
import { useEffect, useMemo, useState } from 'react'
import CommonStyle from '../../styles/commomStyle.module.css'
import styles from '../../styles/Homepage/Homepage.module.css'

export default function Section1() {
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 })

  const targetTime = useMemo(() => {
    const now = new Date()
    const target = new Date()
    target.setDate(now.getDate() + 1)
    target.setHours(10, 30, 0, 0)
    return target.getTime()
  }, [])

  useEffect(() => {
    const updateCountdown = () => {
      const nowTime = new Date().getTime()
      const distance = targetTime - nowTime
      if (distance < 0) {
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 })
        return
      }
      setTimeLeft({
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      })
      requestAnimationFrame(updateCountdown)
    }

    updateCountdown()
    return () => {}
  }, [targetTime])

  return (
    <div className={styles.videoBackground}>
      <video
        className={styles.video}
        autoPlay
        loop
        muted
        playsInline
        loading="lazy"
      >
        <source
          src="https://www.liquidweb.com/wp-content/uploads/2025/02/server-3D.mp4"
          type="video/mp4"
        />
      </video>

      <div className={styles.content}>
        <div className={styles.contentContainer}>
          <div className={CommonStyle.ContainerWidth}>
            <div className="row">
              {/* Left Content */}
              <div className="col-md-6 text-white">
                <span
                  className="border px-2 py-1 rounded"
                  style={{ letterSpacing: '1.4px', fontSize: '12px' }}
                >
                  Web Hosting
                </span>
                <h1 className={`${CommonStyle.mainHeading} mt-4`}>
                  Build, grow, and innovate without limits
                </h1>
                <button
                  className={`rounded-pill text-center ${styles.customButton}`}
                >
                  Explore Hosting <span className={styles.hiddenArrow}>→</span>
                </button>
                <img
                  src="https://www.liquidweb.com/wp-content/uploads/2025/02/bigger-trust-1-1.svg"
                  alt="Trust Badge"
                  width={180}
                  height={60}
                  className="mt-lg-0 mt-3 ms-3"
                />
                <hr />
                <h5 className="py-3">
                  Web servers engineered for premium performance
                </h5>

                {/* Features List */}
                <ul className="ps-0">
                  <li className="mt-2 lh-1 d-flex align-items-center">
                    <svg
                      width="18px"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                    <span className="ps-3">
                      Lightning-fast <u>VPS hosting</u>
                    </span>
                  </li>
                  <li className="mt-2 lh-1 d-flex align-items-center">
                    <svg
                      width="18px"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                    <span className="ps-3">
                      Fully customizable <u>dedicated hosting</u>
                    </span>
                  </li>
                  <li className="mt-2 lh-1 d-flex align-items-center">
                    <svg
                      width="18px"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                    <span className="ps-3">
                      One-click <u>WordPress hosting</u>
                    </span>
                  </li>
                </ul>
              </div>

              {/* Right Content - Offer */}
              <div className="col-md-6 mt-md-0 mt-3 d-flex justify-content-center align-items-end">
                <div
                  className="text-white py-sm-4 px-sm-5 p-3 rounded-3"
                  style={{
                    background: 'linear-gradient(135deg, #5A67D8, #6B46C1)',
                    width: '400px',
                  }}
                >
                  <h4 className="lh-base">
                    Get up to 50% off powerful dedicated servers
                  </h4>
                  <Link
                    href="#"
                    className="btn btn-light fw-semibold mt-3 rounded-pill text-decoration-none w-100"
                  >
                    Shop deals &nbsp;
                    <span className="text-dark">
                      {timeLeft.hours}h : {timeLeft.minutes}m :{' '}
                      {timeLeft.seconds}s
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

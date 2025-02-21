import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useRef, useState } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import style from '../../styles/Header/Header.module.css'

function Header() {
  const router = useRouter()
  const isHomePage = router.pathname === '/'

  const [showNavbar, setShowNavbar] = useState(true)
  const [isScrolled, setIsScrolled] = useState(false)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      // Only use scroll behavior for widths > 1279px
      if (window.innerWidth > 1279) {
        // If scrolling down, hide the navbar; if scrolling up, show it
        if (window.scrollY > lastScrollY.current) {
          setShowNavbar(false)
        } else {
          setShowNavbar(true)
        }
      }
      lastScrollY.current = window.scrollY

      // Only change bg for homepage when scrolled (or scrolled up)
      if (isHomePage) {
        setIsScrolled(window.scrollY > 0)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isHomePage])

  // Determine background and text colors based on page and scroll status
  const headerBg = isHomePage
    ? isScrolled
      ? '#1F242A'
      : 'transparent'
    : 'white'
  const textColor = isHomePage ? 'white' : 'black'
  const buttonBg = isHomePage ? 'black' : 'white'
  const buttonText = isHomePage ? 'white' : 'black'

  return (
    <>
      {/* Hides on scroll for width > 1279px */}
      <div
        className={`${style.headerContainerBefore1280PX} ${
          showNavbar ? style.navbarVisible : style.navbarHidden
        }`}
        style={{
          backgroundColor: headerBg,
          color: textColor,
        }}
      >
        <p className={style.announcementBar}>
          Get blazing-fast processing and unmatched efficiency with our GPU
          hosting—now 30% off.
          <Link href="/shop" className={`btn mx-2 ${style.shopButton}`}>
            Shop now
          </Link>
          →
        </p>
        <Navbar className="px-4">
          <Link
            href="/"
            className="fw-semibold text-decoration-none"
            style={{ color: textColor, flexShrink: '0', fontSize: '18px' }}
          >
            Liquid Web
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse className="d-flex justify-content-center w-100">
            <Link
              href="vpshosting"
              className={`px-3 text-decoration-none ${
                isHomePage ? 'text-white' : 'text-black'
              } ${style.navOptions}`}
              style={{ borderBottomColor: 'transparent' }}
            >
              VPS Hosting Plans
            </Link>
            <Link
              href="/wordpresshosting"
              className={`px-3 text-decoration-none ${
                isHomePage ? 'text-white' : 'text-black'
              } ${style.navOptions}`}
              style={{ borderBottomColor: 'transparent' }}
            >
              WordPress Hosting
            </Link>
            <Link
              href="#"
              className={`px-3 text-decoration-none ${
                isHomePage ? 'text-white' : 'text-black'
              } ${style.navOptions}`}
              style={{ borderBottomColor: 'transparent' }}
            >
              All Hosting
            </Link>
          </Navbar.Collapse>
          <Navbar.Collapse className="justify-content-end">
            <button
              type="button"
              className="btn py-1 px-2"
              style={{
                backgroundColor: buttonBg,
                color: buttonText,
              }}
            >
              <i
                className="fa fa-shopping-cart"
                style={{ fontSize: '14px' }}
              ></i>
            </button>
          </Navbar.Collapse>
        </Navbar>
      </div>

      {/* Always Sticky for width <= 1279px */}
      <div
        className={style.headerContainerAfter1280PX}
        style={{
          backgroundColor: headerBg,
          color: textColor,
        }}
      >
        <Navbar className="px-4">
          <Link
            href="/"
            className={`fw-semibold fs-5 ${
              isHomePage ? 'text-white' : 'text-black'
            } text-decoration-none`}
            style={{ color: textColor, fontSize: '18px' }}
          >
            Liquid Web
          </Link>
          <Navbar.Collapse className="justify-content-end">
            <i
              className="fa fa-search pointer"
              style={{ cursor: 'pointer' }}
            ></i>
            <button
              type="button"
              className="btn mx-3 py-1 px-2"
              style={{
                backgroundColor: buttonBg,
                color: buttonText,
              }}
            >
              <i
                className="fa fa-shopping-cart"
                style={{ fontSize: '14px' }}
              ></i>
            </button>
            <i className="fa fa-bars pointer" style={{ cursor: 'pointer' }}></i>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </>
  )
}

export default Header

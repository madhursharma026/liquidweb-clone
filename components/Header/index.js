import Link from 'next/link'
import { useEffect, useState } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Offcanvas from 'react-bootstrap/Offcanvas'
import CommonStyle from '../../styles/commomStyle.module.css'
import style from '../../styles/Header/Header.module.css'

const Header = () => {
  const handleShow = () => setShow(true)
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const [hasScrolled, setHasScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setHasScrolled(true)
      } else {
        setHasScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div
      className="bg-white fixed-top"
      style={{
        boxShadow: hasScrolled
          ? 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'
          : 'none',
      }}
    >
      <p className={`${style.announcementBar}`}>
        Get blazing-fast processing and unmatched efficiency with our GPU
        hosting—now 30% off.
        <Link href="/shop" className={`btn mx-2 ${style.shopButton}`}>
          Shop now
        </Link>
        →
      </p>
      <div className={`${CommonStyle.ContainerWidth}`}>
        <Navbar expand="lg" className="py-3">
          <Link
            href="/"
            className="fw-semibold text-decoration-none text-black"
            style={{ fontSize: '22px' }}
          >
            Liquid Web
          </Link>

          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="border-0"
            onClick={handleShow}
          />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto ms-4 d-lg-block d-none">
              <Link
                href="vpshosting"
                className="px-3 text-decoration-none text-black"
              >
                VPS Hosting Plans
              </Link>
              <Link
                href="/wordpresshosting"
                className="px-3 text-decoration-none text-black"
              >
                WordPress Hosting
              </Link>
              <Link href="#" className="px-3 text-decoration-none text-black">
                All Hosting
              </Link>
            </Nav>
          </Navbar.Collapse>

          <Navbar.Collapse className="justify-content-end d-lg-block d-none">
            <Link
              href="#Support"
              className="px-3 text-decoration-none text-black"
              style={{ borderBottomColor: 'transparent' }}
            >
              Support
            </Link>
            <Link
              href="#Contact"
              className="px-3 text-decoration-none text-black"
              style={{ borderBottomColor: 'transparent' }}
            >
              Contact
            </Link>
            <Link
              href="#Login"
              className="px-3 text-decoration-none text-black"
              style={{ borderBottomColor: 'transparent' }}
            >
              Login
            </Link>
            <button type="button" className="btn py-1 px-2 btn-dark">
              <i
                className="fa fa-shopping-cart"
                style={{ fontSize: '14px' }}
              ></i>
            </button>
          </Navbar.Collapse>
        </Navbar>
      </div>

      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="top"
        style={{ height: '100%' }}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <Link
              href="/"
              className="fw-semibold text-decoration-none text-dark"
              onClick={handleClose}
            >
              Liquid Web
            </Link>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <Link
                href="vpshosting"
                className="text-decoration-none text-black fw-semibold"
              >
                VPS Hosting Plans
              </Link>
            </li>
            <li className="list-group-item">
              <Link
                href="wordpresshosting"
                className="text-decoration-none text-black fw-semibold"
              >
                WordPress Hosting
              </Link>
            </li>
            <li className="list-group-item">
              <Link
                href="#AllHosting"
                className="text-decoration-none text-black fw-semibold"
              >
                All Hosting
              </Link>
            </li>
            <li className="list-group-item">
              <Link
                href="#Support"
                className="text-decoration-none text-black fw-semibold"
              >
                Support
              </Link>
            </li>
            <li className="list-group-item">
              <Link
                href="#Contact"
                className="text-decoration-none text-black fw-semibold"
              >
                Contact
              </Link>
            </li>
            <li className="list-group-item">
              <Link
                href="#Login"
                className="text-decoration-none text-black fw-semibold"
              >
                Login
              </Link>
            </li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  )
}

export default Header

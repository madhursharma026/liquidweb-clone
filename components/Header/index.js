import Link from 'next/link'
import { useEffect, useState } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Offcanvas from 'react-bootstrap/Offcanvas'
import CommonStyle from '../../styles/commomStyle.module.css'
import style from '../../styles/Header/Header.module.css'

const Header = () => {
  const [show, setShow] = useState(false)
  const [hasScrolled, setHasScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setHasScrolled(window.scrollY > 0)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleOffcanvas = () => setShow((prev) => !prev)

  return (
    <div
      className="bg-white fixed-top"
      style={{
        boxShadow: hasScrolled ? 'rgba(99, 99, 99, 0.2) 0px 2px 8px' : 'none',
      }}
    >
      <p className={style.announcementBar}>
        Get blazing-fast processing and unmatched efficiency with our VPS
        hosting—now 30% off.
        <Link href="/vps-hosting" className={`btn mx-2 ${style.shopButton}`}>
          Shop now
        </Link>
        →
      </p>

      <div className={CommonStyle.ContainerWidth}>
        <Navbar expand="lg" className="py-3">
          <Link
            href="/"
            className="fw-semibold text-decoration-none text-black"
          >
            <img src="/MainLogo.png" alt="Logo" width="120" />
          </Link>

          <Navbar.Toggle
            aria-controls="navbar-menu"
            className="border-0"
            onClick={toggleOffcanvas}
          />

          <Navbar.Collapse id="navbar-menu">
            <Nav className="me-auto ms-4 d-lg-block d-none">
              {['vps-hosting', 'wordpress-hosting', 'web-hosting'].map(
                (path) => (
                  <Link
                    key={path}
                    href={`/${path}`}
                    className="px-3 text-decoration-none text-black"
                  >
                    {path
                      .replace('-', ' ')
                      .replace(/\b\w/g, (c) => c.toUpperCase())}
                  </Link>
                )
              )}
            </Nav>
          </Navbar.Collapse>

          <Navbar.Collapse className="justify-content-end d-lg-block d-none">
            <Link
              href={`support`}
              className="px-3 text-decoration-none text-black"
            >
              Support
            </Link>
            <Link
              href={`#Contact`}
              className="px-3 text-decoration-none text-black"
            >
              Contact
            </Link>
            <Link
              href="#Login"
              className="px-3 text-decoration-none btn btn-outline-dark"
            >
              <i className="fa fa-sign-in fs-6" /> &nbsp; Login
            </Link>
          </Navbar.Collapse>
        </Navbar>
      </div>

      <Offcanvas
        show={show}
        onHide={toggleOffcanvas}
        placement="top"
        style={{ height: '100%' }}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <img
              src="/MainLogo.png"
              alt="Logo"
              width="120"
              onClick={toggleOffcanvas}
              style={{ cursor: 'pointer' }}
            />
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul className="list-group list-group-flush">
            {[
              'vps-hosting',
              'wordpress-hosting',
              'web-hosting',
              'support',
              'Contact',
            ].map((path) => (
              <li key={path} className="list-group-item">
                <Link
                  href={path.startsWith('#') ? path : `/${path}`}
                  className="text-decoration-none text-black fw-semibold"
                >
                  {path
                    .replace('-', ' ')
                    .replace(/\b\w/g, (c) => c.toUpperCase())}
                </Link>
              </li>
            ))}
            <li className="list-group-item">
              <Link
                href="#Login"
                className="px-3 text-decoration-none btn btn-outline-dark w-100"
              >
                <i className="fa fa-sign-in fs-6" /> &nbsp; Login
              </Link>
            </li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  )
}

export default Header

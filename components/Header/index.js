import { useState, useEffect, useRef } from "react";
import Navbar from "react-bootstrap/Navbar";
import Link from "next/link";
import style from "../../styles/Header/Header.module.css"; // Import CSS Module
import { Nav } from "react-bootstrap";

function Header() {
    const [showNavbar, setShowNavbar] = useState(true);
    const [isScrolled, setIsScrolled] = useState(false);
    const lastScrollY = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            if (window.innerWidth > 1279) {
                if (window.scrollY > lastScrollY.current) {
                    setShowNavbar(false);
                } else {
                    setShowNavbar(true);
                }
            }
            lastScrollY.current = window.scrollY;
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            {/* Hides on scroll for width > 1279px */}
            <div
                className={`${style.headerContainerBefore1280PX} ${showNavbar ? style.navbarVisible : style.navbarHidden}`}
                style={{
                    backgroundColor: isScrolled ? "#1F242A" : "transparent",
                    color: "white",
                }}
            >
                <p className={style.announcementBar}>
                    Get blazing-fast processing and unmatched efficiency with our GPU hosting—now 30% off.
                    <Link
                        href="/shop"
                        className={`btn mx-2 ${style.shopButton}`}
                    >
                        Shop now
                    </Link>
                    →
                </p>
                <Navbar className="px-4">
                    <Navbar.Brand
                        href="#home"
                        className="fw-semibold"
                        style={{ color: "white" }}
                    >
                        Liquid Web
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />

                    <Navbar.Collapse className="d-flex justify-content-center w-100">
                        <Link href='#' className={`px-3 text-decoration-none text-white ${style.navOptions}`}>VPS Hosting Plans</Link>
                        <Link href='#' className={`px-3 text-decoration-none text-white ${style.navOptions}`}>Wordpress Hosting</Link>
                        <Link href='#' className={`px-3 text-decoration-none text-white ${style.navOptions}`}>All Hosting</Link>
                    </Navbar.Collapse>
                    <Navbar.Collapse className="justify-content-end">
                        <button
                            type="button"
                            className="btn"
                            style={{
                                backgroundColor: isScrolled ? "white" : "black",
                                color: isScrolled ? "black" : "white",
                            }}
                        >
                            <i className="fa fa-shopping-cart"></i>
                        </button>
                    </Navbar.Collapse>
                </Navbar>
            </div>

            {/* Always Sticky for width <= 1279px */}
            <div className={style.headerContainerAfter1280PX}
                style={{
                    backgroundColor: isScrolled ? "#1F242A" : "transparent",
                    color: "white",
                }}>
                <Navbar className="px-4">
                    <Navbar.Brand href="#home" className="fw-semibold text-white">
                        Liquid Web
                    </Navbar.Brand>

                    <Navbar.Collapse className="justify-content-end">

                        <i class="fa fa-search pointer" style={{ cursor: 'pointers' }}></i>
                        <button
                            type="button"
                            className="btn mx-3"
                            style={{
                                backgroundColor: isScrolled ? "white" : "black",
                                color: isScrolled ? "black" : "white",
                            }}
                        >
                            <i className="fa fa-shopping-cart"></i>
                        </button>
                        <i class="fa fa-bars pointer" style={{ cursor: 'pointers' }}></i>

                    </Navbar.Collapse>
                </Navbar>
            </div>
        </>
    );
}

export default Header;

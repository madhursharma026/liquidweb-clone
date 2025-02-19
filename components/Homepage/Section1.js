import React, { useEffect, useState } from 'react';
import CommonStyle from '../../styles/commomStyle.module.css';
import styles from '../../styles/Homepage/Homepage.module.css'
import Link from 'next/link';

export default function Section1() {
    const [timeLeft, setTimeLeft] = useState({
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const now = new Date();
        const targetTime = new Date();

        targetTime.setDate(now.getDate() + 1);
        targetTime.setHours(10, 30, 0, 0);

        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = targetTime.getTime() - now;
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
            setTimeLeft({ hours, minutes, seconds });
            if (distance < 0) {
                clearInterval(interval);
                setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
            }
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className={`p-0`}>
            <div className={styles.videoBackground}>
                <video className={styles.video} autoPlay loop muted playsInline>
                    <source src="https://www.liquidweb.com/wp-content/uploads/2025/02/server-3D.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className={`${styles.content}`}>
                    <div className={styles.contentContainer}>
                        <div className={`${CommonStyle.ContainerWidth}`}>
                            <div className="row">
                                <div className="col-md-6 text-white">
                                    <span className='border px-2 py-1 rounded' style={{ fontSize: '14px', letterSpacing: '1.4px' }}>Web hosting</span>
                                    <h1 className={`${CommonStyle.mainHeading} mt-md-5 mt-3`}>Build, grow, and innovate without limits</h1>
                                    <button className={`rounded-pill text-center mt-4 ${styles.customButton}`}>
                                        Explore Hosting →
                                    </button>
                                    <img src="https://www.liquidweb.com/wp-content/uploads/2025/02/bigger-trust-1-1.svg" alt="#ImgNotFound" className='img-fluid mt-lg-0 mt-3 ms-3' />
                                    <hr />
                                    <h5 className='py-4'>Web servers engineered for premium performance</h5>
                                    <ul style={{ listStyleType: 'none', marginLeft: '-20px' }}>
                                        <li className='mt-2'>
                                            <img src="https://static-00.iconduck.com/assets.00/check-mark-circle-icon-2048x2046-i29hn5r5.png" alt="#ImgNotFound" style={{ width: '20px', height: '20px' }} />
                                            <span className='ps-3'>Lightning-fast VPS hosting</span>
                                        </li>
                                        <li className='mt-2'>
                                            <img src="https://static-00.iconduck.com/assets.00/check-mark-circle-icon-2048x2046-i29hn5r5.png" alt="#ImgNotFound" style={{ width: '20px', height: '20px' }} />
                                            <span className='ps-3'>Fully customizable dedicated hosting</span>
                                        </li>
                                        <li className='mt-2'>
                                            <img src="https://static-00.iconduck.com/assets.00/check-mark-circle-icon-2048x2046-i29hn5r5.png" alt="#ImgNotFound" style={{ width: '20px', height: '20px' }} />
                                            <span className='ps-3'>One-click WordPress hosting</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-md-6 mt-md-0 mt-3">
                                    <div className="d-flex justify-content-center align-items-end" style={{ height: '100%' }}>
                                        <div className="text-white py-4 px-5 rounded-3" style={{ background: "linear-gradient(135deg, #5A67D8, #6B46C1)", width: "400px" }}>
                                            <h4>Get up to 50% off powerful dedicated servers</h4>
                                            <Link href="#" className="btn btn-light fw-bold mt-3 rounded-pill text-decoration-none">
                                                Shop deals &nbsp;
                                                <span className="text-dark">
                                                    {timeLeft.hours}h : {timeLeft.minutes}m : {timeLeft.seconds}s
                                                </span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
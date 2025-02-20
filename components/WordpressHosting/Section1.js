import React from 'react';
import Image from 'next/image';
import CommonStyle from '../../styles/commomStyle.module.css';
import styles from '../../styles/VpsHosting/VpsHosting.module.css';

export default function Section1() {
    return (
        <div className="p-0">
            <div className={styles.contentContainer}>
                <div className={`${CommonStyle.ContainerWidth}`}>
                    <div className="row">
                        <div className="col-md-6">
                            <span className="border px-2 py-1 rounded" style={{ fontSize: '14px', letterSpacing: '1.4px' }}>VPS hosting</span>
                            <h1 className={`${styles.mainHeading} mt-md-5 mt-3`}>
                                Ultra-fast <span className="px-2 rounded border" style={{ background: '#F5F4FF' }}>WordPress </span> hosting for seamless site performance</h1>

                            <ul style={{ listStyleType: 'none', marginLeft: '-20px' }}>
                                <li className="mt-2">
                                    <img src="https://static-00.iconduck.com/assets.00/check-mark-circle-icon-2048x2046-i29hn5r5.png" alt="#ImgNotFound" style={{ width: '20px', height: '20px' }} />
                                    <span className="ps-3">99.999% uptime</span>
                                </li>
                                <li className="mt-2">
                                    <img src="https://static-00.iconduck.com/assets.00/check-mark-circle-icon-2048x2046-i29hn5r5.png" alt="#ImgNotFound" style={{ width: '20px', height: '20px' }} />
                                    <span className="ps-3">Comprehensive security</span>
                                </li>
                                <li className="mt-2">
                                    <img src="https://static-00.iconduck.com/assets.00/check-mark-circle-icon-2048x2046-i29hn5r5.png" alt="#ImgNotFound" style={{ width: '20px', height: '20px' }} />
                                    <span className="ps-3">24/7 support</span>
                                </li>
                            </ul>
                            <h3 className="text-muted fw-normal">Starting at $5.25/mo</h3>
                            <button className={`rounded-pill text-center mt-4 ${styles.customButton}`}>
                                Explore Managed Wordpress →
                            </button>
                            <button className={`rounded-pill bg-white text-black mt-4 ms-3 ${styles.customButton}`}>
                                Chat with an agent →
                            </button>
                        </div>

                        <div className="col-md-6 mt-md-0 mt-3 d-flex flex-column justify-content-center">
                            <div className="d-flex align-items-center justify-content-center w-100">
                                <Image
                                    src="/wordpresshosting.png"
                                    alt="Gamer"
                                    width={700}
                                    height={500}
                                    className="img-fluid"
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

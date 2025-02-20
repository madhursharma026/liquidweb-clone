import React, { useEffect, useState } from 'react';
import CommonStyle from '../../styles/commomStyle.module.css';
import Styles from '../../styles/VpsHosting/VpsHosting.module.css'
import Services from '../Homepage/components/Services';

export default function Section5() {
    return (
        <div className={`${CommonStyle.ContainerWidth} pt-5`}>
            <p className={`${Styles.Heading} mt-md-5 mt-3`}>
                How VPS hosting helped
                <br />
                Ampleharvest.org cultivate success
            </p>
            <section className="container my-5">
                <div className="row align-items-stretch">
                    {/* Left Column */}
                    <div className="col-lg-4 col-md-6 mb-4 mb-lg-0 d-flex">
                        <div className="flex-fill">
                            <img
                                src="https://www.liquidweb.com/wp-content/uploads/2024/08/farm-image2.webp"
                                alt="AmpleHarvest.org Logo"
                                className='rounded-4'
                                style={{ width: '100%', height: '100%', display: 'block' }}
                            />
                        </div>
                    </div>

                    {/* Middle Column: Text content */}
                    <div className="col-lg-4 col-md-6 mb-4 mb-lg-0 d-flex">
                        <div
                            className="flex-fill d-flex flex-column p-3 rounded-4"
                            style={{
                                background: '#EBDACE',
                            }}
                        >
                            <p className='fs-5'>
                                We moved high-traffic AmpleHarvest.org to cloud VPS hosting, equipping them with real-time security reports to enhance their defenses against hackers and code injections.
                            </p>
                        </div>
                    </div>

                    {/* Right Column: Stats boxes */}
                    <div className="col-lg-4 d-flex">
                        <div className="flex-fill">
                            <div className="row g-3 h-100">
                                <div className="col-lg-12 col-md-6">
                                    <div className="p-4 border rounded d-flex flex-column justify-content-center h-100 rounded-4">
                                        <h1 className="display-5 mb-0">1.8 billion</h1>
                                        <p className="text-muted mb-0">impressions scaled</p>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-6">
                                    <div className="p-4 border rounded d-flex flex-column justify-content-center h-100 rounded-4">
                                        <h1 className="display-5 mb-0">4,000%</h1>
                                        <p className="text-muted mb-0">
                                            faster support response than their previous host
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}

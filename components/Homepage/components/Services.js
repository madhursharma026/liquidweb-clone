import React from 'react';
import Image from 'next/image';
import styles from '../../../styles/Homepage/Homepage.module.css';

const Services = () => {
    return (
        <div className="row align-items-center mt-5 pt-md-5">
            {/* Left Side - Text */}
            <div className="col-lg-6">
                <div style={{ maxWidth: '450px' }}>
                    <h1 className='fw-normal'>Unbeatable<br />hosting uptime</h1>
                    <h5 className='fw-normal'>
                        100% guaranteed network uptime means your business is always online,
                        so you never miss a customer, a sale, or an opportunity to grow.
                    </h5>
                    <button className={`rounded-pill text-center mt-4 ${styles.customButton}`}>
                        Review our SLA
                    </button>
                </div>
            </div>

            {/* Right Side - Circle Graphic */}
            <div className="col-lg-6 mt-lg-0 mt-3 text-center">
                <div className={`${styles.circleWrapper} w-100`}>
                    <div className={`${styles.circle}`}>
                        <span className={styles.circleText}>100%<br />uptime</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;

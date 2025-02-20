import React, { useEffect, useState } from 'react';
import CommonStyle from '../../styles/commomStyle.module.css';
import Styles from '../../styles/VpsHosting/VpsHosting.module.css'
import Services from '../Homepage/components/Services';

export default function Section3() {
    return (
        <div className={`${CommonStyle.ContainerWidth} pt-5`}>
            <p className={`${Styles.Heading} mt-md-5 mt-3`}>Decades of hosting expertise at your service</p>
            <h5 className='mt-4' style={{ maxWidth: '1000px', color: '#524e4e' }}>Virtual private server hosting is the best solution for those seeking dedicated resources, enhanced control, and scalability at a more affordable price than traditional dedicated servers. More brands than ever are choosing Liquid Web for VPS hosting thanks to our exceptional uptime and top-tier support that keeps them online and thriving.</h5>
            <div className="mt-5 pt-lg-5 row">
                <div className="col-md-6">
                    <div className='rounded-4 p-lg-5 py-3 px-4 h-100' style={{ background: 'linear-gradient(45deg,#FAFFF8,#E4FAD1,#F3BCA8,#FAE0D7,#FEFDFD)' }}>
                        <h2 className="fw-normal">
                            Migration made easy— <br /> at no charge</h2>
                        <br /><br /><br /><br /><br />
                        <h5 style={{ maxWidth: '450px' }}>We offer free data migration for most customers, with specialists ensuring a smooth move and minimal downtime.</h5>

                    </div>
                </div>
                <div className="col-md-6">
                    <div className='rounded-4  p-lg-5 py-3 px-4 h-100 mt-md-0 mt-4' style={{ background: 'url(https://www.liquidweb.com/wp-content/uploads/2024/08/wp-support-revised.webp)' }}>
                        <h2 className="fw-normal text-white">
                            Technical support <br /> on standby 24/7</h2>
                        <br /><br /><br /><br /><br />
                        <h5 className='text-white' style={{ maxWidth: '450px' }}>Our support team is available day and night, guaranteeing you get expert assistance and advice whenever you need it.</h5>

                    </div>
                </div>
            </div>
            <Services />
            <Services />
        </div>
    );
}

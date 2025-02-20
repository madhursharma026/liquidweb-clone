import React, { useEffect, useState } from 'react';
import CommonStyle from '../../styles/commomStyle.module.css';
import Styles from '../../styles/VpsHosting/VpsHosting.module.css'
import Pricing from './components/pricing';

export default function Section3() {

    return (
        <div className={`${CommonStyle.ContainerWidth} mt-5 py-5`}>
            <div className="row">
                <div className="col-lg-4 col-md-6 d-flex flex-column justify-content-center">
                    <div>
                        <span className='border p-1 text-primary'>Kadence: A Liquid Web brand</span>
                        <h1 className='fw-normal mt-3' style={{ fontSize: '45px' }}>Take your WordPress site to the next level with Kadence AI</h1>
                        <p className='fs-5 mt-4'>With the Kadence Theme and Kadence Blocks, you can leverage AI-powered features to create high-performing, fast WordPress sites with ease.</p>
                    </div>
                </div>
                <div className="col-md-6 d-flex flex-column justify-content-center offset-lg-2 mt-md-0 mt-3">
                    <div className="d-flex align-items-center justify-content-center w-100">
                        <img src="https://www.liquidweb.com/wp-content/uploads/2024/10/kadence-ai-resized2.svg" alt="#ImgNotFound" className='w-100 rounded-4' />
                    </div>
                </div>
            </div>
        </div>
    )
}
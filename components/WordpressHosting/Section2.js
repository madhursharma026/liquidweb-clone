import React, { useEffect, useState } from 'react';
import CommonStyle from '../../styles/commomStyle.module.css';
import Styles from '../../styles/VpsHosting/VpsHosting.module.css'
import Pricing from './components/pricing';

export default function Section2() {

    return (
        <div className={`${CommonStyle.ContainerWidth} mt-5 py-5`}>
            <h1 className={`${Styles.Heading} mt-md-5 mt-3`}>WordPress hosting plans for any brand</h1>
            <div className="row justify-content-center">
                <div className="col-md-4 mt-3"><Pricing offers={'75% off 3 mos'} cardTitle={'Managed WordPress'} cardDescription={'Simplify site management and free up time without sacrificing compatibility'} price={'$5.25/mo'} buttonText={'VPS'} /></div>
                <div className="col-md-4 mt-3"><Pricing offers={'75% off 3 mos'} cardTitle={'Managed WordPress'} cardDescription={'Simplify site management and free up time without sacrificing compatibility'} price={'$5.25/mo'} buttonText={'VPS'} /></div>
                <div className="col-md-4 mt-3"><Pricing offers={'75% off 3 mos'} cardTitle={'Managed WordPress'} cardDescription={'Simplify site management and free up time without sacrificing compatibility'} price={'$5.25/mo'} buttonText={'VPS'} /></div>
            </div>

            <div className="my-5">
                <h3 className='text-muted fw-normal'>Trusted by top brands</h3>
                <div className="row justify-content-center align-items-center">
                    <div className="col-lg col-md-3 col-4 mt-3 text-center">
                        <img src={"https://www.liquidweb.com/wp-content/uploads/2024/02/logo-gadget-gaurd.avif"} alt="Company Logo" className={`img-fluid ${Styles.logoImg}`} />
                    </div>
                    <div className="col-lg col-md-3 col-4 mt-3 text-center">
                        <img src={"https://www.liquidweb.com/wp-content/uploads/2024/10/MLB-white.svg"} alt="Company Logo" className={`img-fluid ${Styles.logoImg}`} />
                    </div>
                    <div className="col-lg col-md-3 col-4 mt-3 text-center">
                        <img src={"https://www.liquidweb.com/wp-content/uploads/2024/10/topps-white.svg"} alt="Company Logo" className={`img-fluid ${Styles.logoImg}`} />
                    </div>
                    <div className="col-lg col-md-3 col-4 mt-3 text-center">
                        <img src={"https://www.liquidweb.com/wp-content/uploads/2024/09/solidwp.svg"} alt="Company Logo" className={`img-fluid ${Styles.logoImg}`} />
                    </div>
                    <div className="col-lg col-md-3 col-4 mt-3 text-center">
                        <img src={"https://www.liquidweb.com/wp-content/uploads/2024/09/populi-lockup-1.svg"} alt="Company Logo" className={`img-fluid ${Styles.logoImg}`} />
                    </div>
                    <div className="col-lg col-md-3 col-4 mt-3 text-center">
                        <img src={"https://www.liquidweb.com/wp-content/uploads/2024/10/brightedge.avif"} alt="Company Logo" className={`img-fluid ${Styles.logoImg}`} />
                    </div>
                    <div className="col-lg col-md-3 col-4 mt-3 text-center">
                        <img src={"https://www.liquidweb.com/wp-content/uploads/2024/09/NC_State_University_brick_logo-1.svg"} alt="Company Logo" className={`img-fluid ${Styles.logoImg}`} />
                    </div>
                    <div className="col-lg col-md-3 col-4 mt-3 text-center">
                        <img src={"https://www.liquidweb.com/wp-content/uploads/2024/09/datamaas-logo-final-2-1.svg"} alt="Company Logo" className={`img-fluid ${Styles.logoImg}`} />
                    </div>
                </div>
            </div>
        </div>
    )
}
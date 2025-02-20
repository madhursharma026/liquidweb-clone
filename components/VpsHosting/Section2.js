import React, { useEffect, useState } from 'react';
import CommonStyle from '../../styles/commomStyle.module.css';
import Styles from '../../styles/VpsHosting/VpsHosting.module.css'
import Pricing from './components/pricing';

export default function Section1() {

    return (
        <div className={`${CommonStyle.ContainerWidth}`}>
            <div className="row justify-content-center">
                <div className="col-xl-3 col-md-6 mt-3"><Pricing offers={'Best Offers'} cardTitle={'VPS hosting'} cardDescription={'Best web hosting for flexibility and affordability'} price={'5'} buttonText={'VPS'} /></div>
                <div className="col-xl-3 col-md-6 mt-3"><Pricing offers={'Best Offers'} cardTitle={'VPS hosting'} cardDescription={'Best web hosting for flexibility and affordability'} price={'5'} buttonText={'VPS'} /></div>
                <div className="col-xl-3 col-md-6 mt-3"><Pricing bestDeal={true} offers={'Best Offers'} cardTitle={'VPS hosting'} cardDescription={'Best web hosting for flexibility and affordability'} price={'5'} buttonText={'VPS'} /></div>
                <div className="col-xl-3 col-md-6 mt-3"><Pricing offers={'Best Offers'} cardTitle={'VPS hosting'} cardDescription={'Best web hosting for flexibility and affordability'} price={'5'} buttonText={'VPS'} /></div>
            </div>

            <div className='p-md-4 p-3 rounded mt-3' style={{ background: '#F1F0FF' }}>
                <h5>These options are just the beginning. <b> Compare all vps hosting plans →</b></h5>
                <h6>Promotions are valid for new accounts only and do not apply to upgrades of existing VPS servers. Please reach out to our team if you’re upgrading your existing Liquid Web hardware.</h6>
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
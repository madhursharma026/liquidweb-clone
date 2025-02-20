import Link from 'next/link';
import React, { useState } from 'react';

const Pricing = ({ offers, cardTitle, price, bestDeal }) => {

    return (
        <>
            {bestDeal ?
                <h6 className='bg-primary m-0 p-2 text-end rounded-top text-white'>Best Deal</h6>
                :
                <h6 className='pt-md-3'></h6>
            }
            <div className="card shadow-sm border-0 p-4" style={{ backgroundColor: '#fafafa' }}>
                <span className="text-primary fw-semibold mb-2 text-end" style={{ fontSize: '0.8rem' }}>
                    {offers}
                </span>
                <h4 className="fw-semibold">{cardTitle}</h4>
                <h2 className="fw-semibold mt-3">
                    <span className='fw-bold'>${price}</span>/mo
                </h2>
                <p className="text-muted" style={{ fontSize: '0.85rem' }}>Our best deal on VPS.</p>
                <Link href="#">
                    <button className="btn btn-dark rounded-pill w-100 py-2 mb-3">
                        Buy Now
                    </button>
                </Link>
                <ul className="list-unstyled mt-5">
                    <li>✅ Self or fully managed</li>
                    <li>✅ 1 vCPU</li>
                    <li>✅ 1 GB RAM</li>
                    <li>✅ 30 GB SSD</li>
                    <li>✅ 1 TB bandwidth</li>
                    <li>✅ 10 GB network</li>
                    <li>✅ Linux or Windows</li>
                    <li>✅ Interworx, cPanel, Plesk available</li>
                    <li>✅ Fast provisioning</li>
                    <li>✅ Robust API</li>
                    <li>✅ Unmetered inbound</li>
                    <li>✅ DDoS protection</li>
                    <li>✅ Root access</li>
                    <li>✅ Dedicated IP address</li>
                </ul>
            </div>
        </>
    );
};

export default Pricing;

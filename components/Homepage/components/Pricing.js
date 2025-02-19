import Link from 'next/link';
import React, { useState } from 'react';

const Pricing = ({ offers, cardTitle, cardDescription, price, buttonText, lastChance }) => {
    const [showFeatures, setShowFeatures] = useState(false);

    return (
        <>
            {lastChance ?
                <h6 className='bg-primary m-0 p-2 text-end rounded-top text-white'>Last Chance</h6>
                :
                <h6 className='pt-md-3'></h6>
            }
            <div className="card shadow-sm border-0 p-4" style={{ backgroundColor: '#fafafa' }}>
                <span className="text-primary fw-semibold mb-2 text-end" style={{ fontSize: '0.8rem' }}>
                    {offers}
                </span>
                <h4 className="fw-semibold">{cardTitle}</h4>
                <p className="text-muted">{cardDescription}</p>
                <p className="text-muted mt-3 mb-1" style={{ fontSize: '0.9rem' }}>Starting at</p>
                <h2 className="fw-semibold">
                    <span className='fw-bold'>${price}</span>/mo
                </h2>
                <p className="text-muted" style={{ fontSize: '0.85rem' }}>Our best deal on VPS.</p>
                <Link href="#">
                    <button className="btn btn-dark rounded-pill w-100 py-2 mb-3">
                        Browse {buttonText} hosting
                    </button>
                </Link>

                {/* Features Toggle Button */}
                <div className="d-flex justify-content-between align-items-center" onClick={() => setShowFeatures(!showFeatures)} style={{ cursor: 'pointer' }}>
                    <span className="fw-semibold">Features</span>
                    <span className="text-muted">{showFeatures ? '▲' : '▼'}</span>
                </div>

                {/* Features List (Visible When Clicked) */}
                {showFeatures && (
                    <ul className="list-unstyled mt-3">
                        <li>✅ Linux & Windows</li>
                        <li>✅ Fully or self-managed</li>
                        <li>✅ 10G network</li>
                        <li>✅ Fully customizable</li>
                        <li>✅ Unlimited websites</li>
                        <li>✅ Hosting add-ons</li>
                    </ul>
                )}
            </div>
        </>
    );
};

export default Pricing;

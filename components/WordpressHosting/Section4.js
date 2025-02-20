import React, { useEffect, useState } from 'react';
import CommonStyle from '../../styles/commomStyle.module.css';
import Styles from '../../styles/VpsHosting/VpsHosting.module.css'
import Pricing from './components/pricing';

export default function Section4() {

    return (
        <div className={`${CommonStyle.ContainerWidth} mt-5 py-5`}>
            <h1 className={`${Styles.Heading} mt-md-5 mt-3`}>WordPress hosting features across all plans</h1>
            <div className="mt-5 row">
                <div className="col-md-6">
                    <div className='rounded-4 text-white p-md-5 p-4' style={{ background: 'linear-gradient(90deg, rgb(26, 49, 74) 0%, rgb(36, 68, 103) 33%, rgba(36, 68, 103, 0.6) 100%)' }}>
                        <p className='fs-3 pb-5'>99.999% uptime guarantee</p>
                        <p className="mt-5 pt-lg-5 pt-3">
                            Our uptime guarantee means your site stays online and running smoothly, providing reliability and peace of mind for your business.
                        </p>
                    </div>
                </div>
                <div className="col-md-6 mt-md-0 mt-4">
                    <div className='rounded-4 p-md-5 p-4' style={{ background: '#F6E3DB' }}>
                        <p className='fs-3 pb-5'>Technical WordPress requirements</p>
                        <p className="mt-5 pt-lg-5 pt-3">
                            WordPress hosting plans are provisioned and configured based on WordPress.org’s official performance requirements.
                        </p>
                    </div>
                </div>
                <div className="col-lg-8 col-md-7 mt-4 rounded-4">
                    <div className='h-100 rounded-4'
                        style={{
                            backgroundImage: `url('https://revival-strapi.s3.eu-west-2.amazonaws.com/Header_0313f83cf9.jpg')`,
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover'
                        }}
                    >
                        <div className='rounded-4'
                            style={{
                                backgroundColor: 'rgba(0, 0, 0, 0.4)',
                                width: '100%',
                                height: '100%',
                                display: 'flex',
                            }}
                        >
                            <div className='p-md-5 p-4 text-white'>
                                <p className='fs-2 pb-5'>The best WordPress support</p>
                                <p className="mt-5 fs-5 pt-lg-5 pt-3">
                                    With Liquid Web WordPress hosting, you gain access to a team of WordPress experts who have experience with thousands of sites and are always ready to support you at every step of your journey.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-5 mt-4">
                    <div className='rounded-4 p-md-5 p-4 card'>
                        <p className='fs-3 pb-5'>Air-tight security</p>
                        <p className="mt-5 pt-lg-5 pt-3">
                            Our WordPress hosting plans ensure your site’s security with continuous malware monitoring, complimentary SSL certificates, regular PHP updates, and the highly trusted Solid Security Pro plugin—free with every plan.
                        </p>
                    </div>
                </div>
            </div>




            <div class="card mt-5">
                <div class="card-body p-sm-5 p-3">
                    <div className="row">
                        <div className="col-md-6">
                            <h1 className='fw-normal mt-3' style={{ fontSize: '45px', lineHeight: '70px' }}>Why Liquid Web for <span className="px-2 rounded border" style={{ background: '#F5F4FF' }}>WordPress </span> hosting?</h1>
                            <button className={`rounded-pill text-center mt-4 ${Styles.customButton}`}>
                                Explore Managed Wordpress →
                            </button>
                        </div>
                        <div className="col-md-6 mt-md-0 mt-5">
                            <div className="mt-3">
                                <h5>⚡ The fastest WordPress hosting</h5>
                                <p className="fs-5">Liquid Web achieves the fastest WordPress speeds online through multi-layered caching with the latest PHP and server technologies, an integrated CDN across data centers, and advanced image compression techniques.</p>
                            </div>
                            <div className="mt-5">
                                <h5>⚡ The fastest WordPress hosting</h5>
                                <p className="fs-5">Liquid Web achieves the fastest WordPress speeds online through multi-layered caching with the latest PHP and server technologies, an integrated CDN across data centers, and advanced image compression techniques.</p>
                            </div>
                            <div className="mt-5">
                                <h5>⚡ The fastest WordPress hosting</h5>
                                <p className="fs-5">Liquid Web achieves the fastest WordPress speeds online through multi-layered caching with the latest PHP and server technologies, an integrated CDN across data centers, and advanced image compression techniques.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
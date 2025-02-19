import React from 'react';
import CommonStyle from '../../styles/commomStyle.module.css';

const Section4 = () => {
    return (
        <div className={`my-5 py-5 ${CommonStyle.ContainerWidth}`}>
            <div class="card p-5">
                <div class="card-body">
                    <span className='text-primary border p-1 rounded'>The best hosting provider for 27 years</span>
                    <div className="row">
                        <div className="col-lg-5">
                            <h1 className={`${CommonStyle.mainHeading} mt-md-5 mt-3`}>Partner with an industry leader</h1>
                            <h5 className='fw-normal mt-3 pb-5'>At Liquid Web, we don’t just keep pace with the ever-evolving hosting landscape—we set the standard. With our deep technical expertise and innovative solutions, we’re a leader in the space.</h5>
                            <div class="card bg-dark text-white p-4 mt-5">
                                <div class="card-body">
                                    <h3>SEO IN</h3>
                                    <h3 className='text-end'>THE AGE</h3>
                                    <h3 className='text-center'>OF AI</h3>
                                </div>
                            </div>
                            <h5 className='mt-3'>Navigating SEO’s evolution in the AI era</h5>
                        </div>
                        <div className="col-lg-6 offset-lg-1 mt-lg-0 mt-5">
                            {/* <p style={{ fontSize: 'calc(16px + 5vw)' }}>180K+</p>
                            <div className="row mt-5 pt-5">
                                <div className="col-md-6">
                                    <p style={{ fontSize: 'calc(16px + 3vw)' }}>180K+</p>
                                </div>
                                <div className="col-md-6">
                                    <p style={{ fontSize: 'calc(16px + 3vw)' }}>8.5K+</p>
                                </div>
                                <div className="col-md-6">
                                    <p style={{ fontSize: 'calc(16px + 3vw)' }}>450</p>
                                </div>
                                <div className="col-md-6">
                                    <p style={{ fontSize: 'calc(16px + 3vw)' }}>300</p>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section4;
import React, { useEffect, useState } from 'react';
import CommonStyle from '../../styles/commomStyle.module.css';
import Styles from '../../styles/VpsHosting/VpsHosting.module.css'

export default function Section5() {
    return (
        <div style={{ background: 'linear-gradient(45deg,#FAFFF8,#E4FAD1,#F3BCA8,#FAE0D7,#FEFDFD)' }}>
            <div className={`${CommonStyle.ContainerWidth} my-5 py-lg-5`}>
                <div className="row p-md-5 p-3">
                    <div className="col-lg-6 d-flex align-items-center">
                        <h1 className={`${Styles.mainHeading} mt-md-5 mt-3`}>Find the right
                            <br className='d-lg-block d-none' /> <span className='px-2 rounded border' style={{ background: '#F5F4FF' }}>hosting solution</span>
                            <br className='d-lg-block d-none' /> with our help</h1>
                    </div>
                    <div className="col-lg-6 mt-lg-0 mt-4">
                        <div className={`${Styles.gradientContainer} p-3 p-sm-5 rounded-4 shadow`}>
                            <h2 className="mb-4">Get in touch with an expert</h2>

                            <form>
                                <div className="mb-3">
                                    <label htmlFor="firstName" className="form-label">First Name*</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="firstName"
                                        placeholder="First Name"
                                        required
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="lastName" className="form-label">Last Name*</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="lastName"
                                        placeholder="Last Name"
                                        required
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email*</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        placeholder="Email"
                                        required
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="phone" className="form-label">Phone Number</label>
                                    <input
                                        type="tel"
                                        className="form-control"
                                        id="phone"
                                        placeholder="Phone Number"
                                    />
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="company" className="form-label">Company</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="company"
                                        placeholder="Company"
                                    />
                                </div>

                                <button type="submit" className={`btn btn-dark w-100 rounded-pill`}>
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

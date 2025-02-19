import React from 'react';
import CommonStyle from '../../styles/commomStyle.module.css';
import Services from './components/Services';

const Section6 = () => {
    return (
        <div className={`my-5 py-5 ${CommonStyle.ContainerWidth}`}>
            <div className="row mt-5">
                <div className="col-6">
                    <h1 className='fw-normal' style={{ fontSize: '50px' }}>Web hosting services that help your business thrive</h1>
                </div>
                <div className="col-6"></div>
            </div>
            <Services />
            <Services />
            <Services />
            <Services />
        </div>
    );
};

export default Section6;
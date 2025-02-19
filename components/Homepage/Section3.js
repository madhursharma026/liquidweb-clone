import React from 'react';
import Business from './components/Business';
import CommonStyle from '../../styles/commomStyle.module.css';
import styles from '../../styles/Homepage/Homepage.module.css'

const Section3 = () => {
    return (
        <div className={`my-5 ${CommonStyle.ContainerWidth}`}>
            <div className="row">
                <div className="col-md-6">
                    <h1 className='fw-normal d-md-block d-none' style={{ fontSize: '46px', maxWidth: '500px' }}>The best website hosting services to elevate your business</h1>
                    <h1 className='fw-normal d-md-none d-block' style={{ fontSize: '30px', maxWidth: '400px' }}>The best website hosting services to elevate your business
                    </h1>
                </div>
                <div className="col-md-6">
                    <div className="d-md-flex d-none justify-content-end align-items-end" style={{ height: '100%' }}>
                        <button className={`rounded-pill text-center mt-4 ${styles.customButton}`}>
                            Explore All Hosting Services →
                        </button>
                    </div>
                    <div className="d-md-none d-flex justify-content-start align-items-end" style={{ height: '100%' }}>
                        <button className={`rounded-pill text-center mt-4 ${styles.customButton}`}>
                            Explore All Hosting Services →
                        </button>
                    </div>
                </div>
            </div>

            <div className="row justify-content-center align-items-center">
                <div className="col-lg-4 col-md-6 mt-5">
                    <Business title={'Reseller hosting'} videoURL="" imgURL={'https://www.liquidweb.com/wp-content/uploads/2024/10/iStock-2012746941.webp'} discription={'For agencies and small firms that want to offer VPS website hosting themselves'} btnText={'Explore reseller hosting'} />
                </div>
                <div className="col-lg-4 col-md-6 mt-5">
                    <Business title={'Ecommerce hosting'} videoURL="" imgURL={'https://www.liquidweb.com/wp-content/uploads/2024/10/iStock-1569566040.webp'} discription={'For high-demand Magento stores and high-touch WooCommerce support'} btnText={'Explore ecommerce hosting'} />
                </div>
                <div className="col-lg-4 col-md-6 mt-5">
                    <Business title={'HIPAA compliant hosting'} imgURL={''} videoURL={'https://www.liquidweb.com/wp-content/uploads/2024/10/hipaa_iteration-2.webm'} discription={'For medical and healthcare businesses that need absolute privacy and security'} btnText={'Explore HIPAA compliant hosting'} />
                </div>
                <div className="col-lg-4 col-md-6 mt-5">
                    <Business title={'WordPress hosting'} videoURL="" imgURL={'https://www.liquidweb.com/wp-content/uploads/2024/10/iStock-2153366944-2.webp'} discription={'For WordPress users who demand speed, security, and seamless management'} btnText={'Explore Wordpress hosting'} />
                </div>
                <div className="col-lg-4 col-md-6 mt-5">
                    <Business title={'PCI compliant hosting'} imgURL={''} videoURL={"https://www.liquidweb.com/wp-content/uploads/2024/10/ecomm-resized.webm"} discription={'For protecting sensitive data and maintaining industry standards'} btnText={'Explore PCI Complaint hosting'} />
                </div>
                <div className="col-lg-4 col-md-6 mt-5">
                    <Business title={'Enterprise hosting'} videoURL="" imgURL={'https://www.liquidweb.com/wp-content/uploads/2024/10/iStock-2158997979-2.webp'} discription={'For enterprise-level web teams that need flexibility, security, and support'} btnText={'Explore enterprise hosting'} />
                </div>
            </div>
        </div>
    );
};

export default Section3;
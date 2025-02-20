import React from 'react';
import Link from 'next/link';
import Styles from '../../styles/Footer/Footer.module.css';
import CommonStyle from '../../styles/commomStyle.module.css';

const Footer = () => {
    return (
        <div className={`${CommonStyle.ContainerWidth} mb-5`}>
            <hr />
            <h5 className='pt-3 text-center'>Related hosting content</h5>
            <div className="d-flex justify-content-center w-100 mt-4 pb-3">
                <h6 className={`px-3`}>VPS Hosting Plans</h6>
                <h6 className={`px-3`}>Wordpress Hosting</h6>
                <h6 className={`px-3`}>All Hosting</h6>
            </div>
            <hr />
            <div className="mt-3 row">
                <div className="col-lg col-md-3 col-6 mt-3">
                    <h5>Hosting</h5>
                    <Link href='#' className='text-decoration-none text-black mt-3'>Cloud Hosting</Link><br />
                    <Link href='#' className='text-decoration-none text-black mt-3'>Dedicated Hosting</Link><br />
                    <Link href='#' className='text-decoration-none text-black mt-3'>Email Hosting</Link><br />
                    <Link href='#' className='text-decoration-none text-black mt-3'>GPU Hosting</Link><br />
                    <Link href='#' className='text-decoration-none text-black mt-3'>Magento Hosting</Link><br />
                    <Link href='#' className='text-decoration-none text-black mt-3'>Reseller Hosting</Link><br />
                    <Link href='#' className='text-decoration-none text-black mt-3'>VPS Hosting</Link><br />
                    <Link href='#' className='text-decoration-none text-black mt-3'>WordPress Hosting</Link><br />
                    <h5 className='mt-5'>Additional Hosting</h5>
                    <Link href='#' className='text-decoration-none text-black mt-3'>Add-ons</Link><br />
                    <Link href='#' className='text-decoration-none text-black mt-3'>Agency Hosting</Link><br />
                    <Link href='#' className='text-decoration-none text-black mt-3'>Application Hosting</Link><br />
                    <Link href='#' className='text-decoration-none text-black mt-3'>Database Hosting</Link><br />
                    <Link href='#' className='text-decoration-none text-black mt-3'>Ecommerce Hosting</Link><br />
                    <Link href='#' className='text-decoration-none text-black mt-3'>Enterprise Hosting</Link><br />
                    <Link href='#' className='text-decoration-none text-black mt-3'>Freelancer Hosting</Link><br />
                    <Link href='#' className='text-decoration-none text-black mt-3'>High Availability</Link><br />
                    <Link href='#' className='text-decoration-none text-black mt-3'>High Performance</Link><br />
                    <Link href='#' className='text-decoration-none text-black mt-3'>HIPAA Hosting</Link><br />
                    <Link href='#' className='text-decoration-none text-black mt-3'>PCI Compliant Hosting</Link><br />
                    <Link href='#' className='text-decoration-none text-black mt-3'>Private Cloud Hosting</Link><br />
                    <Link href='#' className='text-decoration-none text-black mt-3'>Server Clusters</Link><br />
                    <Link href='#' className='text-decoration-none text-black mt-3'>Small Business Hosting</Link><br />
                    <Link href='#' className='text-decoration-none text-black mt-3'>VPS Reseller Hosting</Link><br />
                    <Link href='#' className='text-decoration-none text-black mt-3'>Windows Hosting</Link><br />
                    <Link href='#' className='text-decoration-none text-black mt-3'>Windows VPS Hosting</Link><br />
                    <Link href='#' className='text-decoration-none text-black mt-3'>Linux VPS Hosting</Link><br />
                    <Link href='#' className='text-decoration-none text-black mt-3'>Ubuntu VPS Hosting</Link><br />
                    <Link href='#' className='text-decoration-none text-black mt-3'>cPanel VPS Hosting</Link><br />
                    <Link href='#' className='text-decoration-none text-black mt-3'>KVM VPS Hosting</Link><br />
                    <Link href='#' className='text-decoration-none text-black mt-3'>WooCommerce Hosting</Link><br />
                </div>
                <div className="col-lg col-md-3 col-6 mt-3">
                    <h5>Servers</h5>
                    <Link href='#' className='text-decoration-none text-black mt-3'>Bare Metal Servers</Link><br />
                    <Link href='#' className='text-decoration-none text-black mt-3'>Cloud Dedicated Servers</Link><br />
                    <Link href='#' className='text-decoration-none text-black mt-3'>Cloud VPS</Link><br />
                    <Link href='#' className='text-decoration-none text-black mt-3'>Custom Servers</Link><br />
                    <Link href='#' className='text-decoration-none text-black mt-3'>Dedicated Servers</Link><br />
                    <Link href='#' className='text-decoration-none text-black mt-3'>Managed Cloud</Link><br />
                    <Link href='#' className='text-decoration-none text-black mt-3'>Managed Servers</Link><br />
                    <Link href='#' className='text-decoration-none text-black mt-3'>Windows Servers</Link><br />
                    <h5 className='mt-5'>Studies</h5>
                    <Link href='#' className='text-decoration-none text-black mt-3'>Every Second Counts</Link><br />
                    <Link href='#' className='text-decoration-none text-black mt-3'>Impact of Downtime</Link><br />
                    <Link href='#' className='text-decoration-none text-black mt-3'>Hypergrowth Hosting</Link><br />
                </div>
                <div className="col-lg col-md-3 col-6 mt-3">
                    <h5>Resources</h5>
                    <Link href='#' className='text-decoration-none text-black mt-3'>API</Link><br />
                    <Link href='#' className='text-decoration-none text-black mt-3'>Black Friday Deals</Link><br />
                    <Link href='#' className='text-decoration-none text-black mt-3'>Blog</Link><br />
                    <Link href='#' className='text-decoration-none text-black mt-3'>Customer Stories</Link><br />
                    <Link href='#' className='text-decoration-none text-black mt-3'>Ebooks</Link><br />
                    <Link href='#' className='text-decoration-none text-black mt-3'>Help Docs</Link><br />
                    <Link href='#' className='text-decoration-none text-black mt-3'>Migrations</Link><br />
                    <Link href='#' className='text-decoration-none text-black mt-3'>Sitemap</Link><br />
                    <Link href='#' className='text-decoration-none text-black mt-3'>SSL Checker</Link><br />
                    <Link href='#' className='text-decoration-none text-black mt-3'>Webinars</Link><br />
                    <Link href='#' className='text-decoration-none text-black mt-3'>Web Hosting Tools</Link><br />
                    <Link href='#' className='text-decoration-none text-black mt-3'>White Papers</Link><br />
                    <Link href='#' className='text-decoration-none text-black mt-3'>What is my IP</Link><br />
                    <h5 className='mt-5'>Hosting Basics</h5>
                    <Link href='#' className='text-decoration-none text-black mt-3'>Bare Metal</Link><br />
                    <Link href='#' className='text-decoration-none text-black mt-3'>Cloud Hosting</Link><br />
                    <Link href='#' className='text-decoration-none text-black mt-3'>Dedicated Servers</Link><br />
                    <Link href='#' className='text-decoration-none text-black mt-3'>Gaming VPS</Link><br />
                    <Link href='#' className='text-decoration-none text-black mt-3'>GPUs</Link><br />
                    <Link href='#' className='text-decoration-none text-black mt-3'>Managed Hosting</Link><br />
                    <Link href='#' className='text-decoration-none text-black mt-3'>Private Cloud</Link><br />
                    <Link href='#' className='text-decoration-none text-black mt-3'>VPS</Link><br />
                    <Link href='#' className='text-decoration-none text-black mt-3'>Web Hosting</Link><br />
                </div>
                <div className="col-lg col-md-3 col-6 mt-3">
                    <h5>Partnerships</h5>
                    <Link href='#' className='text-decoration-none text-black mt-3'>GiveWP</Link><br />
                    <Link href='#' className='text-decoration-none text-black mt-3'>Hosting Affiliate Program</Link><br />
                    <Link href='#' className='text-decoration-none text-black mt-3'>IconicWP</Link><br />
                    <Link href='#' className='text-decoration-none text-black mt-3'>IT Partner Program</Link><br />
                    <Link href='#' className='text-decoration-none text-black mt-3'>Kadence WP</Link><br />
                    <Link href='#' className='text-decoration-none text-black mt-3'>LearnDash</Link><br />
                    <Link href='#' className='text-decoration-none text-black mt-3'>MemberDash</Link><br />
                    <Link href='#' className='text-decoration-none text-black mt-3'>Modern Tribe</Link><br />
                    <Link href='#' className='text-decoration-none text-black mt-3'>Partner Directory</Link><br />
                    <Link href='#' className='text-decoration-none text-black mt-3'>Partner Programs</Link><br />
                    <Link href='#' className='text-decoration-none text-black mt-3'>Refer-a-Friend</Link><br />
                    <Link href='#' className='text-decoration-none text-black mt-3'>Restrict Content Pro</Link><br />
                    <Link href='#' className='text-decoration-none text-black mt-3'>SolidWP</Link><br />
                    <Link href='#' className='text-decoration-none text-black mt-3'>The Events Calendar</Link><br />
                </div>
                <div className="col-lg col-md-3 col-6 mt-3">
                    <h5>Get Help</h5>
                    <Link href='#' className='text-decoration-none text-black mt-3'>Call</Link><br />
                    <Link href='#' className='text-decoration-none text-black mt-3'>Chat</Link><br />
                    <Link href='#' className='text-decoration-none text-black mt-3'>Sales</Link><br />
                    <Link href='#' className='text-decoration-none text-black mt-3'>Support</Link><br />
                    <h5 className='mt-5'>Company</h5>
                    <Link href='#' className='text-decoration-none text-black mt-3'>About</Link><br />
                    <Link href='#' className='text-decoration-none text-black mt-3'>Careers</Link><br />
                    <Link href='#' className='text-decoration-none text-black mt-3'>Data Centers</Link><br />
                    <Link href='#' className='text-decoration-none text-black mt-3'>Hosting Prices</Link><br />
                    <Link href='#' className='text-decoration-none text-black mt-3'>News</Link><br />
                    <Link href='#' className='text-decoration-none text-black mt-3'>Policies</Link><br />
                    <Link href='#' className='text-decoration-none text-black mt-3'>Privacy</Link><br />
                    <Link href='#' className='text-decoration-none text-black mt-3'>Security</Link><br />
                    <Link href='#' className='text-decoration-none text-black mt-3'>Team</Link><br />
                    <Link href='#' className='text-decoration-none text-black mt-3'>Terms and Conditions</Link><br />
                </div>
            </div>

            <div className="mt-5">
                <div className="mb-5">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-xl col-lg-2 col-md-3 col-sm-4 col-6 mt-5 text-center">
                            <img src={"https://www.liquidweb.com/wp-content/uploads/2024/05/HIPAA.png"} alt="Company Logo" className={`img-fluid ${Styles.logoImg}`} />
                        </div>
                        <div className="col-xl col-lg-2 col-md-3 col-sm-4 col-6 mt-5 text-center">
                            <img src={"https://www.liquidweb.com/wp-content/uploads/2024/05/RedHat.png"} alt="Company Logo" className={`img-fluid ${Styles.logoImg}`} />
                        </div>
                        <div className="col-xl col-lg-2 col-md-3 col-sm-4 col-6 mt-5 text-center">
                            <img src={"https://www.liquidweb.com/wp-content/uploads/2024/05/cPanel-U.png"} alt="Company Logo" className={`img-fluid ${Styles.logoImg}`} />
                        </div>
                        <div className="col-xl col-lg-2 col-md-3 col-sm-4 col-6 mt-5 text-center">
                            <img src={"https://www.liquidweb.com/wp-content/uploads/2024/05/SSAE-16.png"} alt="Company Logo" className={`img-fluid ${Styles.logoImg}`} />
                        </div>
                        <div className="col-xl col-lg-2 col-md-3 col-sm-4 col-6 mt-5 text-center">
                            <img src={"https://www.liquidweb.com/wp-content/uploads/2024/05/CCNA.png"} alt="Company Logo" className={`img-fluid ${Styles.logoImg}`} />
                        </div>
                        <div className="col-xl col-lg-2 col-md-3 col-sm-4 col-6 mt-5 text-center">
                            <img src={"https://www.liquidweb.com/wp-content/uploads/2024/05/Microsoft-Partner.png"} alt="Company Logo" className={`img-fluid ${Styles.logoImg}`} />
                        </div>
                        <div className="col-xl col-lg-2 col-md-3 col-sm-4 col-6 mt-5 text-center">
                            <img src={"https://www.liquidweb.com/wp-content/uploads/2024/05/AICPA.png"} alt="Company Logo" className={`img-fluid ${Styles.logoImg}`} />
                        </div>
                        <div className="col-xl col-lg-2 col-md-3 col-sm-4 col-6 mt-5 text-center">
                        </div>
                        <div className="col-xl col-lg-2 col-md-3 col-sm-4 col-6 mt-5 text-center">
                        </div>
                        <div className="col-xl col-lg-2 col-md-3 col-sm-4 col-6 mt-5 text-center">
                            <img src={"https://hostadvice.com/awards/2025-best-dedicated-hosting-provider.png"} alt="Company Logo" className={`img-fluid ${Styles.logoImg}`} />
                        </div>
                        <div className="col-xl col-lg-2 col-md-3 col-sm-4 col-6 mt-5 text-center">
                            <img src={"https://hostadvice.com/awards/2025-excellent-service.png"} alt="Company Logo" className={`img-fluid ${Styles.logoImg}`} />
                        </div>
                        <div className="col-xl col-lg-2 col-md-3 col-sm-4 col-6 mt-5 text-center">
                            <img src={"https://www.liquidweb.com/wp-content/uploads/2024/05/bbb.png"} alt="Company Logo" className={`img-fluid ${Styles.logoImg}`} />
                        </div>
                    </div>
                </div>
            </div>

            <h6 className='mt-5'>
                Liquid Web, a <u>web hosting</u> company with 18 <u>data centers</u> globally
            </h6>
            <h6 className='mt-5'>
                California Notice
                <img src="https://www.liquidweb.com/wp-content/uploads/2024/05/privacyoptions-p-500.png" alt="#ImgNotFound" width='30px' className='mx-2' />
                Do not sell my info
                <img src="https://www.liquidweb.com/wp-content/uploads/2025/01/usa-flag.svg" alt="#ImgNotFound" width='30px' className='mx-2' />
                All prices are in USD
            </h6>
            <h6 className="text-secondary mt-4">* Promotions may be exclusively available to new customers and cannot be applied to existing accounts. Qualification is at the sole discretion of Liquid Web. Reach out with questions.
            </h6>
        </div>
    );
};

export default Footer;
import React from 'react';
import Link from 'next/link';
import * as Icon from 'react-feather';

const Footer = () => {

    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer-area bg-f7fafd">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <div className="single-footer-widget">
                            <div className="logo">
                                <Link href="/">
                                    <a>
                                        <img src="/images/logo.png" alt="logo" />
                                    </a>
                                </Link>
                            </div>
                            <p>Comprehensive Technology Solutions For Businesses.</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="single-footer-widget pl-5">
                            <h3>Company</h3>
                            <ul className="list">
                                <li>
                                    <Link href="/about-3">
                                        <a>About Us</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/feature-details">
                                        <a>Services</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/project-details">
                                        <a>Stories</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="single-footer-widget">
                            <h3>Support</h3>
                            <ul className="list">
                                <li>
                                    <Link href="/team">
                                        <a>Team</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/contact">
                                        <a>Contact Us</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="single-footer-widget">
                            <h3>Address</h3>
                            
                            <ul className="footer-contact-info">
                                <li> 
                                    <Icon.MapPin />
                                    298 Nguyen Sinh Sac St, Da Nang City, Viet Nam
                                </li>
                                <li>
                                    <Icon.Mail />
                                    Email: <a href="mailto:nvphvn@gmail.com">nvphvn@gmail.com</a>
                                </li>
                                <li> 
                                    <Icon.PhoneCall />
                                    Phone: <a href="tel:321984754">+84 355 821 097</a>
                                </li>
                            </ul>
                            <ul className="social-links">
                                <li> 
                                    <a href="https://www.facebook.com/phung.76" className="facebook" target="_blank">
                                        <Icon.Facebook />
                                    </a> 
                                </li>
                                <li>
                                    <a href="https://www.twitter.com/phung.76" className="twitter" target="_blank">
                                        <Icon.Twitter />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.instagramcom/phung.76" className="instagram" target="_blank">
                                        <Icon.Instagram />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/in/phungnv" className="linkedin" target="_blank">
                                        <Icon.Linkedin />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-12 col-md-12">
                        <div className="copyright-area">
                            <p>Copyright &copy; {currentYear} LuxTech. All rights reserved by LuxTech</p>
                        </div>
                    </div>
                </div>
            </div>

            <img src="/images/map.png" className="map" alt="map" />

            {/* Shape Images */}
            <div className="shape1">
                <img src="/images/shape1.png" alt="shape" />
            </div>
            <div className="shape8 rotateme">
                <img src="/images/shape2.svg" alt="shape" />
            </div>
        </footer>
    )
     
}

export default Footer; 
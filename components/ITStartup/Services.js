import React from 'react';
import Link from 'next/link';
import * as Icon from 'react-feather';

const OurFeatures = () => {
    return (
        <div className="features-area pt-60 pb-50 bg-f7fafd">
            <div className="container">
                <div className="section-title">
                    <h2>Our Services</h2>
                    <div className="bar"></div>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-md-4">
                        <div className="single-features">
                            <div className="icon">
                                {/* <Icon.Settings /> */}
                                <img src='/images/services-image/web.png'/>
                            </div>
                            <h3>
                                <Link href="/feature-details">
                                    <a>Website Development</a>
                                </Link>
                            </h3>
                            
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-4">
                        <div className="single-features">
                            <div className="icon">
                            <img src='/images/services-image/mobile.png'/>
                            </div> 
                            <h3>
                                <Link href="/feature-details">
                                    <a>Mobile Development</a>
                                </Link>
                            </h3>
                           
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-4">
                        <div className="single-features">
                            <div className="icon bg-c679e3">
                            <img src='/images/services-image/blockchains.png'/>
                            </div>
                            <h3>
                                <Link href="/feature-details">
                                    <a>Blockchain Development</a>
                                </Link>
                            </h3>
                        
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurFeatures;  
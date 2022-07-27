import React from 'react';
import Link from 'next/link';
import { services } from '../Constant/constant';


const OurFeatures = () => {
    return (
        <div className="features-area ptb-60 bg-f7fafd">
            <div className="container">
                <div className="section-title">
                    <h2>Our Services</h2>
                    <div className="bar"></div>
                </div>

                <div className="row">
                   {services.map((value, index) => (
                     <div key={index} className="col-lg-4 col-md-4">
                        <Link href={value.url}>
                                <div className="single-features">
                                    <div className="icon">
                                        <img src={value.img}/>
                                    </div>
                                    <h3>
                                        <Link href={value.url}>
                                            <a>{value.title}</a>
                                        </Link>
                                    </h3>
                                </div>
                        </Link>
                    </div>
                   ))}
                </div>
            </div>
        </div>
    )
}

export default OurFeatures;  
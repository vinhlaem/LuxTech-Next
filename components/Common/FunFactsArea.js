import React from 'react';
import Link from 'next/link';
import { funfact } from '../Constant/constant';


const FunFactsArea = () => {
    return (
        <div className="funfacts-area ptb-60">
            <div className="container">
                <div className="section-title">
                    <h2>We always try to understand users expectation</h2>
                    <div className="bar"></div>
                </div>

                <div className="row">
                    {funfact.map((value, index) => (
                         <div key={index} className="col-lg-4 col-md-4 col-6">
                         <div className="funfact">
                             <h3>{value.number}</h3>
                             <p>{value.name}</p>
                         </div>
                     </div>
                    ))}
                </div>

                <div className="contact-cta-box">
                    <h3>Have any question about us?</h3>
                    <p>Don't hesitate to contact us</p>

                    <Link href="/contact">
                        <a className="btn btn-primary">Contact Us</a>
                    </Link>
                </div>

                <div className="map-bg">
                    <img src="/images/map.png" alt="map" />
                </div>
            </div>
        </div>
    )
}

export default FunFactsArea;
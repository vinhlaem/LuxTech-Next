import React from 'react';
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from '@/components/Common/PageBanner';
import {NextSeo} from "next-seo"
 
const Web_Development = () => {
    return (
        <>
        <NextSeo
            title="Website"
            openGraph={{
                url: 'https://www.url.ie/a',
                title: 'LuxTech || Mobile',
                description: 'Mobile Development',
                images: [
                  {
                    url: 'https://lux-tech-next.vercel.app/images/services-image/web.png',
                    width: 800,
                    height: 600,
                    alt: 'About-us',
                    type: 'image/png',
                  }
                ],
                site_name: 'Website Development',
              }}
         
        />
            <Navbar />

            <PageBanner pageTitle="Web Development" />

            <div className="features-details-area ptb-80">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 features-details-image">
                            <img 
                                src="/images/features-details-image/web.png" 
                                className="animate__animated animate__fadeInUp" 
                                alt="image" 
                            />
                        </div>

                        <div className="col-lg-6 features-details">
                            <div className="features-details-desc">
                                <h3>Information Retrieval</h3>
                                <p>The most effective way to attract customers when advertising for your business is through your website. 
                                    With Website Development services, 
                                    we are willing to support your business in building an outstanding website and reaching more potential clients.</p>

                                <ul className="features-details-list">
                                    <li>Lifetime supports</li>
                                    <li>Exclusive design</li>
                                    <li>Solve your problem with us</li>
                                    <li>We Provide Awesome Services</li>
                                    <li>Your business deserves the best Software</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="separate"></div>

                    <div className="row align-items-center">
                        <div className="col-lg-6 features-details">
                            <div className="features-details-desc">
                                <h3>OUR SOLUTION</h3>
                                <ul className="features-details-list">
                                    <li>Making it faster and easier for users to access your brand in the 4.0 era, 
                                        we will definitely provide the most unique and breakthrough solutions for you.</li>
                                    <li>Holding a key state in the digital age, 
                                        Social Network is an essential field that you should focus on and <b> LuxTech </b> will handle it perfectly for your business.</li>
                                </ul>
                            </div>
                        </div>
                        
                        <div className="col-lg-6 features-details-image">
                            <img 
                                src="/images/features-details-image/web2.png" 
                                className="animate__animated animate__fadeInUp" 
                                alt="image" 
                            />
                        </div>
                    </div>
                </div>
            </div>
 
            <Footer />
        </>
    )
}

export default Web_Development;
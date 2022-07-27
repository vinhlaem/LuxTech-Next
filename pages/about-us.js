import React from 'react';
import {NextSeo} from 'next-seo'
import Navbar from "@/components/_App/Navbar";
import Team from "@/components/Common/Team";
import Footer from "@/components/_App/Footer";
import PageBanner from '@/components/Common/PageBanner';
import { shape } from '@/components/Constant/constant';


const About3 = () => {
    return (
        <>
        <NextSeo
            title="About Us"
            openGraph={{
                url: 'https://www.url.ie/a',
                title: 'LuxTech || About Us Page',
                description: 'Who are we?',
                images: [
                  {
                    url: 'https://lux-tech-next.vercel.app/images/agency-image/about-us.jpg',
                    width: 800,
                    height: 600,
                    alt: 'About-us',
                    type: 'image/jpeg',
                  }
                ],
                site_name: 'About Us',
              }}
         
        />
            <Navbar />

            <PageBanner pageTitle="About Us" />

            <div className="agency-about-area ptb-80">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="agency-about-img">
                                <img src="/images/agency-image/about-us.jpg" alt="image" />
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="agency-about-content">
                                <h2>Getting From LuxTech</h2>
                                <div className="bar"></div>

                                <p>Imagine a world where everyone has the freedom to make awesome things that impact our lives. 
                                    We follow our passion and look forward to tomorrow. 
                                    We live to fulfil our dreams, not only survive.
                                    Standing at the intersection of technology, 
                                    business and we are bringing positive change to the whole society.</p>
                                
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="about-inner-area">
                        <div className="row justify-content-center text-center ">
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="about-text">
                                    <h3>Our Vision</h3>
                                    <p>Our vision is to become the most successful company that creates opportunity and growth for businesses
                                         by providing the most optimized technology solutions.</p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="about-text">
                                    <h3>Our Mission</h3>
                                    <p>Grown Tech Solution Company takes it as a must to introduce and hand over the true value of tech advantages to all businesses out there. 
                                        To that end, it’s important for us to allow the Grown Tech Solution’s crew member to develop their skills and progress in their career path.</p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="about-text">
                                    <h3>Core Value</h3>
                                    <p>Superior technology. <br/>Creativity and trends.<br/>Optimized and automated.</p>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Shape Images */}
                {shape.map((value, index) => (
                <div key={index} className={value.shape}>
				    <img src={value.urlimg} alt="shape"/>
			    </div>
            ))}
            </div>

            <Team />           
            <Footer />
        </>
    )
}

export default About3;
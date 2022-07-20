import React from 'react';
import Navbar from "@/components/_App/Navbar";
import Team from "@/components/Common/Team";
import FunFactsArea from "@/components/Common/FunFactsArea";
import Footer from "@/components/_App/Footer";
import PageBanner from '@/components/Common/PageBanner';
import FeedbackStyleThree from '@/components/Common/FeedbackStyleThree';
import Partner from '@/components/MachineLearning/Partner';

const About3 = () => {
    return (
        <>
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
                        <div className="row justify-content-center">
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
                <div className="shape2 rotateme">
                    <img src="/images/shape2.svg" alt="shape" />
                </div>
                <div className="shape3">
                    <img src="/images/shape3.svg" alt="shape" />
                </div>
                <div className="shape6 rotateme">
                    <img src="/images/shape4.svg" alt="shape" />
                </div>
                <div className="shape7">
                    <img src="/images/shape4.svg" alt="shape" />
                </div>
                <div className="shape8 rotateme">
                    <img src="/images/shape2.svg" alt="shape" />
                </div>
            </div>

            <Team />           
            <Footer />
        </>
    )
}

export default About3;
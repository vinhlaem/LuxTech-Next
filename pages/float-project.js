import React from 'react';
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from '@/components/Common/PageBanner';  
import { features } from '@/components/Constant/constant';
import * as Icon from 'react-feather';

const Float = () => {
    return (
        <>
            <Navbar />

            <PageBanner pageTitle="Projects Details" pageTitleSecond="FLOAT" />

            <div className="project-details-area ptb-20">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 ptb-20-2">
                            <div className="project-details-image">
                                <img src="/images/works-image/float.jpg" alt="work" /> 
                                <p>Float turns your docs in Notion into a fully operational online course in minutes. 
                                    All the power of a traditional course platform, built in the same place you take notes.</p>
                            </div>
                        </div>
                        <div className='col-lg-6 col-md-6'>
                            <div className='project-details-image'>
                                <img src='/images/works-image/newSource1.png'/>
                            </div>
                        </div>
                        <div className='col-lg-6 col-md-6 project-details-features'>
                            <div className='project-details-desc'>
                                <h2>Paste your Notion doc link</h2>
                                <p>All we need to create a course is the link to your public Notion doc.</p>
                            </div>
                        </div>

                        <div className='col-lg-6 col-md-6 project-details-features'>
                            <div className='project-details-desc'>
                                <h2>Set up your course page.</h2>
                                <p>Next, you can build a quick landing page to collect pre-sales or payments. 
                                    You can also set a custom domain, preview the course, and tackle SEO..</p>
                            </div>
                        </div>
                        <div className='col-lg-6 col-md-6'>
                            <div className='project-details-image'>
                                <img src='/images/works-image/newSource2.png'/>
                            </div>
                        </div>
                        
                        <div className='col-lg-6 col-md-6'>
                            <div className='project-details-image'>
                                <img src='/images/works-image/newSource3.png'/>
                            </div>
                        </div>
                        <div className='col-lg-6 col-md-6 project-details-features'>
                            <div className='project-details-desc'>
                                <h2>Hook up payments</h2>
                                <p>Last step is to choose a payment integration that works for you to get paid through. 
                                    We currently have options for Stripe and Gumroad..</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          
            <Footer />
        </>
    )
}

export default Float;
import React from 'react';
import {NextSeo} from 'next-seo'
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from '@/components/Common/PageBanner';
 
const Mobile_Development = () => {
    return (
        <>
        <NextSeo
            title="Mobile Development"
            openGraph={{
                url: 'https://www.url.ie/a',
                title: 'LuxTech || Mobile Development',
                description: 'Mobile Development',
                images: [
                  {
                    url: 'https://lux-tech-next.vercel.app/images/services-image/mobile.png',
                    width: 800,
                    height: 600,
                    alt: 'Mobile',
                    type: 'image/png',
                  }
                ],
                site_name: 'Mobile Development',
              }}
         
        />
            <Navbar />

            <PageBanner pageTitle="Moblie Development" />

            <div className="features-details-area ptb-60">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 features-details-image">
                            <img 
                                src="/images/features-details-image/mobile.png" 
                                className="animate__animated animate__fadeInUp" 
                                alt="image" 
                            />
                        </div>

                        <div className="col-lg-6 features-details">
                            <div className="features-details-desc">
                                <h3>Information Retrieval</h3>
                                <p>LuxTech has collaborated with several well-known companies to create more than 15 mobile app projects for domestic 
                                    and international markets. With a team of long-term experienced IT experts including Mobile App Developers, UI/UX Designers, QA/QC, 
                                    and Project Managers, and a deep understanding of mobile app development as well as user insights, 
                                    we offer 4 solutions to deliver the fittest product for your business.</p>
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
                                src="/images/features-details-image/mobile2.png" 
                                className="animate__animated animate__fadeInUp" 
                                alt="image" 
                            />
                        </div>
                    </div>
                   
                    
                    <div className="row align-items-center">
                        <div className="col-lg-6 features-details-image">
                            <img 
                                src="/images/features-details-image/ios.png" 
                                className="animate__animated animate__fadeInUp" 
                                alt="image" 
                            />
                        </div>

                        <div className="col-lg-6 features-details">
                            <div className="features-details-desc">
                                
                                <p>While iOS becomes one of the most popular mobile operating systems in the world thanks to its convenience and modernity, 
                                    many businesses start choosing it for their applications. Combining our deep experience in iOS app development
                                     and research about iOS user usage behavior, LuxTech Inc is highly confident in offering the best result for your business, 
                                     satisfying the users as well as upgrading your level. 
                                     Moreover, we make sure that our process follows strictly iOS standards to bring not only a good app 
                                     but a useful app for end-users.</p>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
 
            <Footer />
        </>
    )
}

export default Mobile_Development;
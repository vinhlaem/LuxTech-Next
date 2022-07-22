import React from 'react';
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from '@/components/Common/PageBanner';
 
const Blockchain_Development = () => {
    return (
        <>
        <NextSeo
            title="LuxTech"
            openGraph={{
                url: 'https://www.url.ie/a',
                title: 'LuxTech || BlockChain',
                description: 'Blockchain Development',
                images: [
                  {
                    url: 'https://lux-tech-next.vercel.app/images/services-image/blockchains.png',
                    width: 800,
                    height: 600,
                    alt: 'Blockchain Development',
                    type: 'image/png',
                  }
                ],
                site_name: 'Blockchain Development',
              }}
         
        />
            <Navbar />

            <PageBanner pageTitle="Blockchain Development" />

            <div className="features-details-area ptb-80">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 features-details-image">
                            <img 
                                src="/images/features-details-image/blockchains.png" 
                                className="animate__animated animate__fadeInUp" 
                                alt="image" 
                            />
                        </div>

                        <div className="col-lg-6 features-details">
                            <div className="features-details-desc">
                                <h3>Information Retrieval</h3>
                                <p>A blockchain is a decentralized digital ledger that saves transactions on thousands of computers around the globe. 
                                    These are registered in a way that inhibits their subsequent modification. 
                                    Blockchain technology increases the security and speeds up the exchange of information in a way that is cost-effective and 
                                    more transparent. It also dispenses with third parties whose main role was to provide a trust and 
                                    certification element in transactions (such as notaries and banks)</p>

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
                                <li>Blockchain deployment and development with web3, solidity, cakeshop and truffle.</li>
                                    <li>Web platforms using Phoneix / Elixir and serverless architecture..</li>
                                    <li>Enterprise native mobile apps with Swift and Objective-C.</li>
                                </ul>
                            </div>
                        </div>
                        
                        <div className="col-lg-6 features-details-image">
                            <img 
                                src="/images/features-details-image/block2.png" 
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

export default Blockchain_Development;
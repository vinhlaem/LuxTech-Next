import React from 'react';
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from '@/components/Common/PageBanner';  
import { features } from '@/components/Constant/constant';
import * as Icon from 'react-feather';

const Drippy = () => {
    return (
        <>
            <Navbar />

            <PageBanner pageTitle="Projects Details" pageTitleSecond="DRIPPY ZOMBIES" />

            <div className="project-details-area ptb-60">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <div className="project-details-image">
                                <img src="/images/works-image/drippy.jpg" alt="work" /> 
                            </div>
                        </div>
                        <div className="col-lg-12 col-md-12">
                            <div className="project-details-desc text-center">
                                <h2>DRIPPY ZOMBIES</h2>
                                
                                <p>Drippy Zombies is a collection of hand-drawn zombies.

                                   Drippy Zombies are known for their stylish and “drippy” aura. 
                                   Traits inspired by global fashion trends and include unique pop culture references.

                                   Holding a Drippy Zombies NFT gives you access to a P2E metaverse being built on NFT worlds, 
                                   where $WRLD and $DRIPPY will be implemented as the project’s utility tokens. 
                                   Holder perks will include claimable mystery boxes, a community treasury, and unique claimable apparel. 
                                   Inside each Mystrey Box are new traits for your NFTs and a chance at getting real-world apparel.</p>

                                <div className='row text-center'>
                                        <h2>FEATURES</h2>
                                    {features.map((value, index) => (
                                        <div key={index} className='col-lg-4 col-md-6'>
                                            <div className='features-project'>
                                                <img src={value.img}/>
                                                <h4>{value.name}</h4>
                                                <p>{value.content}</p>
                                            </div>
                                        </div>
                                    ))}
                                    
                                    
                                </div>

                                <div className="project-details-information">
                                    <div className="single-info-box">
                                        <a href="https://www.drippyzombies.com/" className="btn btn-primary" target="_blank">Live Preview</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          
            <Footer />
        </>
    )
}

export default Drippy;
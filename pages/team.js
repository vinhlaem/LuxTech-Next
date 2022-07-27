import React from 'react';
import { team } from '@/components/Constant/constant';
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from '@/components/Common/PageBanner';
 
const Team = () => {
    return (
        <>
            <Navbar />

            <PageBanner pageTitle="Team" />

            <div className="team-area pt-80 pb-50 bg-f9f6f6">
                <div className="container">
                    <div className="row justify-content-center">
                    {team.map((value, index) => (
                        <div key={index} className="col-lg-4 col-md-6">
                            
                                <div className="single-team">
                                <div className="team-image">
                                    <img src={value.url_img} alt={value.name} />
                                </div>

                                <div className="team-content">
                                    <div className="team-info">
                                        <h3>{value.name}</h3>
                                        <span>{value.skill}</span>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Team;
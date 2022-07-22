import React from 'react';
import Navbar from "@/components/_App/Navbar";
import MainBanner from "@/components/ITStartup/MainBanner";
import Services from "@/components/ITStartup/Services";
import Team from "@/components/Common/Team";
import FunFactsArea from "@/components/Common/FunFactsArea";
import RecentWorks from "@/components/Common/RecentWorks";
import Footer from "@/components/_App/Footer";
import {NextSeo} from "next-seo"

const Index = () => {
    return (
        <>
        <NextSeo
            title="LuxTech"
            description="A short description goes here."
            openGraph={{
                images: [
                  {
                    url: 'https://lux-tech-next.vercel.app/images/agency-image/about-us.jpg',
                    width: 800,
                    height: 600,
                    alt: 'Og Image Alt',
                    type: 'image/jpeg',
                  }
                ],
                site_name: 'Home',
              }}
         
        />
            <Navbar />
            <MainBanner />
            <Services />
            <Team />
            <FunFactsArea />
            <RecentWorks />
            <Footer />
        </>
    )
}

export default Index;
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
            title="Simple Usage Example"
            description="A short description goes here."
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
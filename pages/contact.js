import React from 'react';
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from '@/components/Common/PageBanner'; 
import ContactInfo from '@/components/Contact/ContactInfo';
import GoogleMap from '@/components/Contact/GoogleMap';
import ContactForm from '@/components/Contact/ContactForm';
import {NextSeo} from "next-seo"

const Contact = () => {
    return (
        <>
        <NextSeo
            title="Contact us"
        />
            <Navbar />

            <PageBanner pageTitle="Contact Us" />

            <ContactInfo />

            <GoogleMap />

            <ContactForm />
           
            <Footer />
        </>
    )
}

export default Contact;
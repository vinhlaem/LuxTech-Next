import React, { useState, useRef } from 'react'
import { useForm } from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from "yup"
import "yup-phone"
import emailjs from '@emailjs/browser';
import swal from 'sweetalert';

const phoneRegExp = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/

const schema = yup.object({
    name: yup.string().required("Name is a required field"),
    email: yup.string().required("Email is a required field").email("Email must be a valid email"),
    number: yup.string("Phone number is not character").required("Phone number is required field").matches(phoneRegExp, "Phone number is not valid").min(10, "To short"),
    subject: yup.string().required("Subject is a required field"),
    message: yup.string().required("Message is a required field")
});


const ContactForm = () => {
    
    const { register, handleSubmit, formState:{errors}, reset } = useForm({resolver: yupResolver(schema)});
    const form = useRef()
    const onSubmit = ()  => {

    emailjs.sendForm('service_h98il2o', 'template_40sayqt', form.current, 'kuT1XmcjxuLgv9ksP')
      .then((result) => {
          
          swal("Success!", "Thank for contact us!", "success");
          reset()
      }, (error) => {
          
          swal("Fail!", "Try agian!", "error");
      });
      
      
  };
      

    return (
        <div className="contact-area ptb-80">
            <div className="container">
                <div className="section-title">
                    <h2>Get In Touch With Us</h2>
                    <div className="bar"></div>
                    <p>Anything On your Mind. We’ll Be Glad To Assist You!</p>
                </div>

                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <img src="/images/contact-img.png" alt="image" />
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <form ref={form} className="contact-form" onSubmit={handleSubmit(onSubmit)}>
                            <div className="row">
                                <div className="col-lg-12 col-md-12">
                                    <div className="form-group">
                                        <input 
                                            type="text" 
                                            name="name" 
                                            placeholder="Your Name" 
                                            className="form-control" 
                                            {...register("name")}
                                        />
                                        {errors.name && <div className='invalid-feedback' style={{display: 'block'}}>
                                            {errors.name.message}
                                        </div>}
                                        
                                    </div>
                                </div>

                                <div className="col-lg-12 col-md-12">
                                    <div className="form-group">
                                        <input 
                                            type="text" 
                                            name="email" 
                                            placeholder="Your email address" 
                                            className="form-control" 
                                            {...register("email")}
                                            
                                        />
                                        {errors.email && <div className='invalid-feedback' style={{display: 'block'}}>
                                            {errors.email.message}
                                        </div> }
                                    </div>
                                </div>

                                <div className="col-lg-12 col-md-12">
                                    <div className="form-group">
                                        <input 
                                            type="text" 
                                            name="number" 
                                            placeholder="Your phone number" 
                                            className="form-control" 
                                            {...register("number")}
                                        />
                                        {errors.number && <div className='invalid-feedback' style={{display: 'block'}}>
                                            {errors.number.message}
                                        </div> }
                                    </div>
                                </div>

                                <div className="col-lg-12 col-md-12">
                                    <div className="form-group">
                                        <input 
                                            type="text" 
                                            name="subject" 
                                            placeholder="Your Subject" 
                                            className="form-control" 
                                            {...register("subject")}
                                        />
                                        {errors.subject && <div className='invalid-feedback' style={{display: 'block'}}>
                                            {errors.subject.message}
                                        </div> }
                                    </div>
                                </div>

                                <div className="col-lg-12 col-md-12">
                                    <div className="form-group">
                                        <textarea 
                                            name="message" 
                                            cols="30" 
                                            rows="5" 
                                            placeholder="Write your message..." 
                                            className="form-control"
                                            {...register('message')}
                                        />
                                        {errors.message && <div className='invalid-feedback' style={{display: 'block'}}>
                                            {errors.message.message}
                                        </div>}
                                    </div>
                                </div>
                                <div className="col-lg-12 col-sm-12">
                                    <button type="submit" className="btn btn-primary">Send Message</button>
                                </div>
                            </div>
                        </form> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactForm;  
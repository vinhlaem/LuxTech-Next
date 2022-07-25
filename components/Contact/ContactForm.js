import React, { useState, useRef } from 'react'
import { useForm } from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from "yup"
import emailjs from '@emailjs/browser';
import swal from 'sweetalert';





// Form initial state
const Result = () => {
    return(
    <p>sucess</p>
    )
    
}


const schema = yup.object({
    name: yup.string().required(),
    email: yup.string().required().email(),
    number: yup.string()
    .required()
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(10, 'Must be exactly 10 digits'),
    subject: yup.string().required(),
    message: yup.string().required()
});


const ContactForm = () => {
    
    const { register, handleSubmit, formState:{errors}, reset } = useForm({resolver: yupResolver(schema)});
    const form = useRef()
    const [result, setResult] = useState(false)
    const onSubmit = ()  => {

    emailjs.sendForm('service_811vjco', 'template_t1ugif9', form.current, 'cc3dTiR3K0elY_ywF')
      .then((result) => {
          console.log(result.text);
          swal("Success!", "Thank for contact us!", "success");
          reset()
      }, (error) => {
          console.log(error.text);
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
                                            // ref={register({ required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i})}
                                        />
                                        {errors.email && <div className='invalid-feedback' style={{display: 'block'}}>
                                            {errors.email.message}
                                            {/* {errors.email?.type === "required" && 'Email is required.'} */}
                                            {/* {errors.email?.type === "pattern" && 'Invalid Email Address'} */}
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
                                            // ref={register({ required: true, minLength:10 })}
                                        />
                                        {errors.number && <div className='invalid-feedback' style={{display: 'block'}}>
                                            {errors.number.message}
                                            
                                            {/* {errors.email?.type === "pattern" && 'Invalid Email Address'} */}
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
                                            // ref={register({ required: true })}
                                        />
                                        {errors.subject && <div className='invalid-feedback' style={{display: 'block'}}>
                                            {errors.subject.message}
                                            {/* {errors.email?.type === "required" && 'Email is required.'} */}
                                            {/* {errors.email?.type === "pattern" && 'Invalid Email Address'} */}
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
                                           
                                            // ref={register({ required: true })}
                                        />
                                        {errors.message && <div className='invalid-feedback' style={{display: 'block'}}>
                                            {errors.message.message}
                                            {/* {errors.text && 'Message is required.'} */}
                                        </div>}
                                    </div>

                                </div>
            
                                <div className="col-lg-12 col-sm-12">
                                    <button type="submit" className="btn btn-primary">Send Message</button>
                                </div>
                                {/* <div className='row'>{result ? <Result/> : null}</div> */}
                            </div>
                        </form> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactForm;  
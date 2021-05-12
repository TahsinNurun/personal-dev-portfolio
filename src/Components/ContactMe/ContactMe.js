import React from 'react';
import { useForm } from "react-hook-form";
import emailjs from 'emailjs-com';
import './ContactMe.css'


const ContactMe = () => {
    
    const { register, watch, formState: { errors } } = useForm();
    

    console.log(watch("example"));

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_4ou0mzg', 'template_re478yi', e.target, 'user_KIQQZVIPZ3FUUdObsqJcH')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            e.target.reset()
    }

    return (
        <div>
            <h3 className="text-center">Contact Me</h3>
            <div className="container">
                <form onSubmit={sendEmail}>
                    <div className="row pt-5 mx-auto">
                        <div className="col-8 mx-auto form-group">
                            <label>Name</label>
                            <input {...register("name")} className="form-control" />
                        </div>
                        <div className="col-8 mx-auto form-group">
                            <label>Email</label>
                            <input {...register("email", { required: true })} className="form-control"/>
                        </div>
                        <div className="col-8 mx-auto form-group">
                            <label>Message</label>
                            <textarea className="form-control" id="" cols="30" rows="8" {...register("message")}/>
                        </div>
                        {errors.exampleRequired && <span>This field is required</span>}
                        <div className="col-8 mx-auto form-group">
                            <input type="submit" value="Send Message" className="btn btn-warning" style={{backgroundColor:'#F87431'}} />
                        </div>
                        
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactMe;
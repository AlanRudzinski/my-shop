import React, { useState } from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import swal from 'sweetalert';


import './contact-form.styles.scss';

const ContactForm = () => {
    const [formData, setFormData] = useState({ email: '', message: '', name: ''})
    const { email, message, name } = formData;

    const handleSubmit = e => {
        e.preventDefault();
        swal({
            icon: "success",
            text: "You've successfully sent a message."
        })
        setFormData({email: '', message: '', name: ''})
    }


    const handleChange = event => {
        const { value, name } = event.target
        setFormData({...formData, [name]: value })
    }

    return (
    <div className="contact-message">
        <h1>Write to us!</h1>
        <span>Fill the form to send the message</span>
        <form onSubmit={handleSubmit} className="contact-form">
            <FormInput 
            name="name" 
            type="text" 
            label="name"
            value={name}
            handleChange={handleChange}
            required/>
            
            <FormInput 
            name="email" 
            type="email" 
            label="email"
            value={email}
            handleChange={handleChange}
            required/>

            <FormInput 
            name="message" 
            type="textarea" 
            label="message"
            value={message}
            handleChange={handleChange}
            large={true}
            required/>
            <CustomButton type="submit">SEND MESSAGE</CustomButton>

        </form>

    </div>


)}

export default ContactForm;
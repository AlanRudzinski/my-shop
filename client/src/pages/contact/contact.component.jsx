import React from 'react';
import ContactDetails from '../../components/contact-details/contact-details.component';
import ContactForm from '../../components/contact-form/contact-form.component';

import './contact.styles.scss';

const ContactPage = () => (
    <div className="wrapper">
        <ContactForm />
        <ContactDetails />
    </div>

)

export default ContactPage;
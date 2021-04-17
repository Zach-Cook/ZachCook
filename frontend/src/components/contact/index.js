import React from 'react';


import { ContactFrame, Form, InformationFrame } from './styles/contact';


export default function Contact({children, ...restProps}){

    return <ContactFrame {...restProps}>{children}</ContactFrame>
}

Contact.Form = function ContactForm({children, ...restProps}){

    return <Form url={restProps.url}>{children}</Form>
}


Contact.InformationFrame = function ContactInformationFrame({children, ...restProps}){

    return <InformationFrame url={restProps.url}>{children}</InformationFrame>
}

import React from 'react';


import { ContactFrame, Form, InformationFrame, ContactFrameInner, Title, HorizontalBar, ContactInfoFrame, 
    PersonalImage, ItemFrame, Text, SocialLogFrame, SocialLogo} from './styles/contact';


export default function Contact({children, ...restProps}){

    return <ContactFrame {...restProps}>{children}</ContactFrame>
}

Contact.Form = function ContactForm({children, ...restProps}){

    return <Form {...restProps}>{children}</Form>
}


Contact.InformationFrame = function ContactInformationFrame({children, ...restProps}){

    return <InformationFrame {...restProps}>{children}</InformationFrame>
}


// 

Contact.ContactFrameInner = function ContactContactFrameInner({children, ...restProps}){

    return <ContactFrameInner {...restProps}>{children}</ContactFrameInner>
}


Contact.Title = function ContactTitle({children, ...restProps}){

    return <Title {...restProps}>{children}</Title>
}

Contact.HorizontalBar = function ContactHorizontalBar({children, ...restProps}){

    return <HorizontalBar {...restProps}>{children}</HorizontalBar>
}


Contact.ContactInfoFrame = function ContactContactInfoFrame({children, ...restProps}){

    return <ContactInfoFrame {...restProps}>{children}</ContactInfoFrame>
}

Contact.PersonalImage = function ContactPersonalImage({children, ...restProps}){

    return <PersonalImage {...restProps}>{children}</PersonalImage>
}

Contact.ItemFrame = function ContactItemFrame({children, ...restProps}){

    return <ItemFrame {...restProps}>{children}</ItemFrame>
}

Contact.Text = function ContactText({children, ...restProps}){

    return <Text {...restProps}>{children}</Text>
}

Contact.SocialLogFrame = function ContactSocialLogFrame({children, ...restProps}){

    return <SocialLogFrame {...restProps}>{children}</SocialLogFrame>
}

Contact.SocialLogo = function ContactSocialLogo({children, ...restProps}){

    return <SocialLogo {...restProps}>{children}</SocialLogo>
}


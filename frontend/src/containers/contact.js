import React from 'react';

import { Contact } from '../components';

import ZachCookSitting from '../images/zachcooksitting.jpg'
import GitHub from '../images/github.jpg'

import { openInNewTab } from '../helpers/openinenewtab';

export default function ContactContainer(){

    return (
        
            <>

                <Contact id='contact'>

                    <Contact.InformationFrame >
                        <Contact.ContactFrameInner>
                            <Contact.Title>Contact Information: </Contact.Title>
                            <Contact.HorizontalBar/>
                            <Contact.ContactInfoFrame>
                                <Contact.PersonalImage src={ZachCookSitting}/>
                                <Contact.ItemFrame>
                                    <Contact.Text fontWeight="bold">Zach Cook</Contact.Text>
                                    <Contact.Text>(816) 797-0025</Contact.Text>
                                    <Contact.Text>zachcook8@gmail.com</Contact.Text>
                                    <Contact.SocialLogFrame>
                                    <Contact.SocialLogo src={GitHub} onClick={ ()=> openInNewTab("https://github.com/Zach-Cook")}/>
                                    </Contact.SocialLogFrame>
                                    
                                </Contact.ItemFrame>
                                
                            </Contact.ContactInfoFrame>
                        </Contact.ContactFrameInner>
                    </Contact.InformationFrame>
                </Contact>

            </>
        
        )
}
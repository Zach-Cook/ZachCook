import React from 'react';
import { Resume } from '../components'

import { URLS } from '../services/config';
import { openInNewTab } from '../helpers/openinenewtab'; 

export default function ResumeContainer(){


    return (
        
        
        <>
            <Resume id="resume" >
                <Resume.ResumeButton 
                    onClick={() => openInNewTab(`${URLS.BASE_URL}/${URLS.RESUME}`)}
                >
                    <Resume.ResumeButtonText>View Resume</Resume.ResumeButtonText>
                </Resume.ResumeButton>
            </Resume>
        </>
        
        )
}
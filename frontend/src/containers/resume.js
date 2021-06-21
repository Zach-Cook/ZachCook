import React from 'react';
import { Resume } from '../components'

import { URLS } from '../services/config';
import { openInNewTab } from '../helpers/openinenewtab'; 

// hook 

import useResume from '../hooks/useResume';

export default function ResumeContainer(){

    const { resume } = useResume()


    return (
        
        
        <>
            <Resume id="resume" >
                <Resume.ResumeButton 
                    onClick={() => openInNewTab(`${URLS.BASE_URL}${resume.Resume}`)}
                >
                    <Resume.ResumeButtonText>View Resume</Resume.ResumeButtonText>
                </Resume.ResumeButton>
            </Resume>
        </>
        
        )
}
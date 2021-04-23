import React from 'react';

import { Resume } from '../components'

export default function ResumeContainer(){


    return (
        
        
        <>
            <Resume id="resume" >
                <Resume.ResumeButton>
                    <Resume.ResumeButtonText>Download Resume</Resume.ResumeButtonText>
                </Resume.ResumeButton>
            </Resume>
        </>
        
        )
}
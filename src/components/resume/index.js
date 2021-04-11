import React from 'react';


import { ResumeFrame, ResumeButton, ResumeButtonText } from './styles/resume';


export default function Resume({children, ...restProps}){

    return <ResumeFrame {...restProps}>{children}</ResumeFrame>
}

Resume.ResumeButton = function ResumeResumeButton({children, ...restProps}){

    return <ResumeButton url={restProps.url}>{children}</ResumeButton>
}

Resume.ResumeButtonText = function ResumeResumeButtonText({children, ...restProps}){

    return <ResumeButtonText url={restProps.url}>{children}</ResumeButtonText>
}


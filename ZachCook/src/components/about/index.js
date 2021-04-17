import React from 'react'

import { AboutFrame, AboutFrameInner, TitleText, TextFrame, 
        Text} from './styles/abouts';


export default function About({children, ...restProps}){

    return <AboutFrame {...restProps}>{children}</AboutFrame>
}


About.AboutFrameInner = function AboutAboutFrameInner({children, ...restProps}){

    return <AboutFrameInner url={restProps.url}>{children}</AboutFrameInner>
}

About.TitleText = function AboutTitleText({children, ...restProps}){

    return <TitleText url={restProps.url}>{children}</TitleText>
}

About.TextFrame = function AboutTextFrame({children, ...restProps}){

    return <TextFrame url={restProps.url}>{children}</TextFrame>
}

About.Text = function AboutText({children, ...restProps}){

    return <Text url={restProps.url}>{children}</Text>
}

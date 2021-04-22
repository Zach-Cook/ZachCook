import React from 'react';


import { TitleFrame, TitleText } from './styles/title';


export default function Title({children, ...restProps}){
    return <TitleFrame {...restProps}>{children}</TitleFrame>
}


Title.TitleText = function TitleTitleText({children, ...restProps}){
    return <TitleText {...restProps}>{children}</TitleText>
}
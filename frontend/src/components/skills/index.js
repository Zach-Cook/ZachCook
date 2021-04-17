import React from 'react';

import { SkillsFrame, SkillsFrameInner, TitleFrame, TitleText, ImageFrame, Image } from './styles/skills';


export default function Skills({children, ...restProps}){
    return <SkillsFrame {...restProps}>{children}</SkillsFrame>
}


Skills.SkillsFrameInner = function SKillsSkillsFrameInner({children, ...restProps}){
    return <SkillsFrameInner {...restProps}>{children}</SkillsFrameInner>
}

Skills.TitleFrame = function SKillsTitleFrame({children, ...restProps}){
    return <TitleFrame {...restProps}>{children}</TitleFrame>
}

Skills.TitleText = function SKillsTitleText({children, ...restProps}){
    return <TitleText {...restProps}>{children}</TitleText>
}


Skills.ImageFrame = function SKillsImageFrame({children, ...restProps}){
    return <ImageFrame {...restProps}>{children}</ImageFrame>
}

Skills.Image = function SKillsImage({children, ...restProps}){
    return <Image {...restProps}>{children}</Image>
}
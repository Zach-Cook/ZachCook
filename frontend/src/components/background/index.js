import React from 'react'

import { BackGroundFrame, BackGroundIMG, BackGroundInnerFrame, PersonalImage,  AttributeFrame, TextFrame, TitleText, ButtonFrame, ButtonText } from './styles/background'

export default function BackGround({children, ...restProps}){
    return <BackGroundFrame {...restProps}>{children}</BackGroundFrame>
}

BackGround.BackGroundIMG = function BackBackGroundIMG({children, ...restProps}){

    return <BackGroundIMG {...restProps}>{children}</BackGroundIMG>
}

BackGround.BackGroundInnerFrame = function BackBackGroundInnerFrame({children, ...restProps}){


    return <BackGroundInnerFrame  {...restProps}>{children}</BackGroundInnerFrame>
}

BackGround.PersonalImage = function BackPersonalImage({children, ...restProps}){


    return <PersonalImage  {...restProps}>{children}</PersonalImage>
}

BackGround.AttributeFrame = function BackAttributeFrame({children, ...restProps}){

    return <AttributeFrame {...restProps}>{children}</AttributeFrame>
}


BackGround.TextFrame = function BackTextFrame({children, ...restProps}){

    return <TextFrame {...restProps}>{children}</TextFrame>
}

BackGround.TitleText = function BackTitleText({children, ...restProps}){

    return <TitleText {...restProps}>{children}</TitleText>
}

BackGround.ButtonFrame = function BackButtonFrame({children, ...restProps}){

    return <ButtonFrame {...restProps}>{children}</ButtonFrame>
}

BackGround.ButtonText = function BackButtonText({children, ...restProps}){

    return <ButtonText {...restProps}>{children}</ButtonText>
}

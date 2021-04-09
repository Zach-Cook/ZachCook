import React from 'react'

import { BackGroundFrame, BackGroundIMG, BackGroundInnerFrame, AttributeFrame, TextFrame, TitleText, ButtonFrame, ButtonText } from './styles/background'

export default function BackGround({children, ...restProps}){
    return <BackGroundFrame {...restProps}>{children}</BackGroundFrame>
}

BackGround.BackGroundIMG = function BackBackGroundIMG({children, ...restProps}){

    return <BackGroundIMG url={restProps.url}>{children}</BackGroundIMG>
}

BackGround.BackGroundInnerFrame = function BackBackGroundInnerFrame({children, ...restProps}){

    return <BackGroundInnerFrame url={restProps.url}>{children}</BackGroundInnerFrame>
}

BackGround.AttributeFrame = function BackAttributeFrame({children, ...restProps}){

    return <AttributeFrame url={restProps.url}>{children}</AttributeFrame>
}




BackGround.TextFrame = function BackTextFrame({children, ...restProps}){

    return <TextFrame url={restProps.url}>{children}</TextFrame>
}

BackGround.TitleText = function BackTitleText({children, ...restProps}){

    return <TitleText url={restProps.url}>{children}</TitleText>
}

BackGround.ButtonFrame = function BackButtonFrame({children, ...restProps}){

    return <ButtonFrame url={restProps.url}>{children}</ButtonFrame>
}

BackGround.ButtonText = function BackButtonText({children, ...restProps}){

    return <ButtonText url={restProps.url}>{children}</ButtonText>
}

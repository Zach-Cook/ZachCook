import React from 'react'

import { BackGroundFrame, BackGroundIMG } from './styles/background'

export default function BackGround({children, ...restProps}){
    return <BackGroundFrame {...restProps}>{children}</BackGroundFrame>
}

BackGround.BackGroundIMG = function BackBackGroundIMG({children, ...restProps}){

    return <BackGroundIMG url={restProps.url}>{children}</BackGroundIMG>
}

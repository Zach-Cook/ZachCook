import React from 'react';

import { PortfolioFrame, TitleFrame, TitleText, PortfolioBox, PortfolioBoxInnerArrowFrame,
     ArrowFrame, ArrowDivTop, ArrowDivBottom, PortfolioCentralFrame } from './styles/portfolio';

export default function Portfolio({children, ...restProps}){

    return <PortfolioFrame {...restProps}>{children}</PortfolioFrame>
}

Portfolio.TitleFrame = function PortfolioTitleFrame({children, ...restProps}){
    return <TitleFrame {...restProps}>{children}</TitleFrame>
}

Portfolio.TitleText = function PortfolioText({children, ...restProps}){
    return <TitleText {...restProps}>{children}</TitleText>
}

Portfolio.PortfolioBox = function PortfoliofolioBox({children, ...restProps}){
    return <PortfolioBox {...restProps}>{children}</PortfolioBox>
}

Portfolio.PortfolioBoxInnerArrowFrame = function PortfoliofolioBoxInnerArrowFrame({children, ...restProps}){
    return <PortfolioBoxInnerArrowFrame {...restProps}>{children}</PortfolioBoxInnerArrowFrame>
}


Portfolio.ArrowFrame = function PortfolioArrowFrame({children, ...restProps}){
    return <ArrowFrame {...restProps}>{children}</ArrowFrame>
}

Portfolio.ArrowDivTop = function PortfolioArrowDivTop({children, ...restProps}){
    return <ArrowDivTop {...restProps}>{children}</ArrowDivTop>
}

Portfolio.ArrowDivBottom = function PortfolioArrowDivBottom({children, ...restProps}){
    return <ArrowDivBottom {...restProps}>{children}</ArrowDivBottom>
}

Portfolio.PortfolioCentralFrame = function PortfolioPortfolioCentralFrame({children, ...restProps}){
    return <PortfolioCentralFrame {...restProps}>{children}</PortfolioCentralFrame>
}
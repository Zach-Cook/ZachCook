import React from 'react';
import { NavFrame, NavInner, HamburgerFrame, HamburgerFrameInner, HamburgerDiv, ExitFrame, ExitFrameInner, 
    RightSlash, LeftSlash,
    NavLeft, NavTitle, NavRight, Navli, NavText, NavLearnMoreFrame 

    } from './styles/nav'

export default function Nav({children, ...restProps}){
    return <NavFrame {...restProps}>{children}</NavFrame>
}

Nav.NavInner = function NavNavInner({children, ...restProps}){
    return <NavInner {...restProps}>{children}</NavInner>
}

Nav.HamburgerFrame = function NavHamburgerFrame({children, ...restProps}){
    return <HamburgerFrame {...restProps}>{children}</HamburgerFrame>
}

Nav.HamburgerFrameInner = function NavHamburgerFrameInner({children, ...restProps}){
    return <HamburgerFrameInner {...restProps}>{children}</HamburgerFrameInner>
}

Nav.HamburgerDiv = function NavHamburgerDiv({children, ...restProps}){
    return <HamburgerDiv {...restProps}>{children}</HamburgerDiv>
}

Nav.ExitFrame = function NavExitFrame({children, ...restProps}){
    return <ExitFrame {...restProps}>{children}</ExitFrame>
}

Nav.ExitFrameInner = function NavExitFrameInner({children, ...restProps}){
    return <ExitFrameInner {...restProps}>{children}</ExitFrameInner>
}

Nav.RightSlash = function NavRightSlash({children, ...restProps}){
    return <RightSlash {...restProps}>{children}</RightSlash>
}

Nav.LeftSlash = function NavLeftSlash({children, ...restProps}){
    return <LeftSlash {...restProps}>{children}</LeftSlash>
}

Nav.NavLeft = function NavNavLeft({children, ...restProps}){
    return <NavLeft {...restProps}>{children}</NavLeft>
}

Nav.NavTitle = function NavNavTitle({children, ...restProps}){
    return <NavTitle {...restProps}>{children}</NavTitle>
}

Nav.NavRight = function NavNavRight({children, ...restProps}){
    return <NavRight {...restProps}>{children}</NavRight>
}

Nav.Navli = function NavNavli({children, ...restProps}){
    return <Navli {...restProps}>{children}</Navli>
}

Nav.NavText = function NavNavText({children, ...restProps}){
    return <NavText {...restProps}>{children}</NavText>
}

Nav.NavLearnMoreFrame = function NavNavLearnMoreFrame({children, ...restProps}){
    return <NavLearnMoreFrame {...restProps}>{children}</NavLearnMoreFrame>
}



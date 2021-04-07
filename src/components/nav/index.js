import React from 'react';
import { NavFrame, NavInner, HamburgerFrame, NavLeft, NavTitle, NavRight, Navli, NavText } from './styles/nav'

export default function Nav({children, ...restProps}){
    return <NavFrame {...restProps}>{children}</NavFrame>
}

Nav.NavInner = function NavNavInner({children, ...restProps}){
    return <NavInner {...restProps}>{children}</NavInner>
}

Nav.HamburgerFrame = function NavHamburgerFrame({children, ...restProps}){
    return <HamburgerFrame {...restProps}>{children}</HamburgerFrame>
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


import React, { useState } from 'react';


import { Nav } from '../components'


export default function HeaderContainer(props){

    

    return(
        <Nav>
            <Nav.NavInner>
                <Nav.NavLeft>
                    <Nav.NavTitle>Zach</Nav.NavTitle>
                </Nav.NavLeft>
                <Nav.HamburgerFrame display={props.isMobileNavOpen}>
                    <Nav.HamburgerFrameInner onClick={()=>props.setIsMobileNavOpen('flex')}>
                        <Nav.HamburgerDiv/>
                        <Nav.HamburgerDiv/>
                        <Nav.HamburgerDiv/>
                    </Nav.HamburgerFrameInner>
                </Nav.HamburgerFrame>
                <Nav.NavRight display={props.isMobileNavOpen}>
                    <Nav.ExitFrame>
                        <Nav.ExitFrameInner onClick={()=>props.setIsMobileNavOpen(null)}>
                            <Nav.RightSlash/>
                            <Nav.LeftSlash/>
                        </Nav.ExitFrameInner>
                    </Nav.ExitFrame>
                    <Nav.Navli>
                        <Nav.NavText>Home</Nav.NavText>
                    </Nav.Navli>
                    <Nav.Navli>
                        <Nav.NavText>Resume</Nav.NavText>
                    </Nav.Navli>
                    <Nav.Navli>
                        <Nav.NavText>About</Nav.NavText>
                    </Nav.Navli>
                    <Nav.Navli>
                        <Nav.NavText>Contact</Nav.NavText>
                    </Nav.Navli>
                    <Nav.Navli display='none'>
                        <Nav.NavLearnMoreFrame>
                            <Nav.NavText>View Portfolio</Nav.NavText>
                        </Nav.NavLearnMoreFrame>
                    </Nav.Navli>
                </Nav.NavRight>
            </Nav.NavInner>
        </Nav>
    )
}
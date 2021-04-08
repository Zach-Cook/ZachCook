import React, { useState } from 'react';


import { Nav } from '../components'


export default function HeaderContainer(){

    const [ isMobileNavOpen, setIsMobileNavOpen ] = useState(null)

    return(
        <Nav>
            <Nav.NavInner>
                <Nav.NavLeft>
                    <Nav.NavTitle>Zach</Nav.NavTitle>
                </Nav.NavLeft>
                <Nav.HamburgerFrame display={isMobileNavOpen}>
                    <Nav.HamburgerFrameInner onClick={()=>setIsMobileNavOpen('flex')}>
                        <Nav.HamburgerDiv/>
                        <Nav.HamburgerDiv/>
                        <Nav.HamburgerDiv/>
                    </Nav.HamburgerFrameInner>
                </Nav.HamburgerFrame>
                <Nav.NavRight display={isMobileNavOpen}>
                    <Nav.ExitFrame>
                        <Nav.ExitFrameInner onClick={()=>setIsMobileNavOpen(null)}>
                            <Nav.RightSlash/>
                            <Nav.LeftSlash/>
                        </Nav.ExitFrameInner>
                    </Nav.ExitFrame>
                    <Nav.Navli>
                        <Nav.NavText>Home</Nav.NavText>
                    </Nav.Navli>
                    <Nav.Navli>
                        <Nav.NavText>Portfolio</Nav.NavText>
                    </Nav.Navli>
                    <Nav.Navli>
                        <Nav.NavText>About</Nav.NavText>
                    </Nav.Navli>
                    <Nav.Navli>
                        <Nav.NavText>Resume</Nav.NavText>
                    </Nav.Navli>
                    <Nav.Navli display='none'>
                        <Nav.NavLearnMoreFrame>
                            <Nav.NavText>Hire Me</Nav.NavText>
                        </Nav.NavLearnMoreFrame>
                    </Nav.Navli>
                </Nav.NavRight>
            </Nav.NavInner>
        </Nav>
    )
}
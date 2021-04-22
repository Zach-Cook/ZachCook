import React, { useState } from 'react';
import { Nav } from '../components'

import {Link} from 'react-scroll'

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
                <Nav.NavRight display={props.isMobileNavOpen} height='650px'>
                    <Nav.ExitFrame>
                        <Nav.ExitFrameInner onClick={()=>props.setIsMobileNavOpen(null)}>
                            <Nav.RightSlash/>
                            <Nav.LeftSlash/>
                        </Nav.ExitFrameInner>
                    </Nav.ExitFrame>
                    <Nav.Navli>
                        <Link to="home" spy={true} smooth={true} offset={50} duration={500}><Nav.NavText>Home</Nav.NavText></Link>
                    </Nav.Navli>
                    <Nav.Navli>
                        <Link to="about" spy={true} smooth={true} offset={50} duration={500}><Nav.NavText>About</Nav.NavText></Link>
                    </Nav.Navli>
                    <Nav.Navli>
                        <Nav.NavText><Link to="resume" spy={true} smooth={true}>Resume</Link></Nav.NavText>
                    </Nav.Navli>
                    <Nav.Navli>
                        <Nav.NavText><Link to="contact" spy={true} smooth={true}>Contact</Link></Nav.NavText>
                    </Nav.Navli>
                    <Nav.Navli display='none'>
                        <Nav.NavLearnMoreFrame>
                            <Link to="portfolio" spy={true} smooth={true} offset={50} duration={500}><Nav.NavText>Portfolio</Nav.NavText></Link>
                        </Nav.NavLearnMoreFrame>
                    </Nav.Navli>
                </Nav.NavRight>
            </Nav.NavInner>
        </Nav>
    )
}
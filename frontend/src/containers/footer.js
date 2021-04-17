import React from 'react';

import { Nav } from '../components';

export default function FooterContainer(props){


    return (
        
            <>
                <Nav background='#f8f8f8'>
                    <Nav.NavLeft>
                        <Nav.NavTitle color='#212124'>Zach</Nav.NavTitle>
                    </Nav.NavLeft>
                    
                    <Nav.NavRight display={props.isMobileNavOpen}>
                        <Nav.ExitFrame>
                            <Nav.ExitFrameInner onClick={()=>props.setIsMobileNavOpen(null)}>
                                <Nav.RightSlash/>
                                <Nav.LeftSlash/>
                            </Nav.ExitFrameInner>
                        </Nav.ExitFrame>
                        <Nav.Navli>
                            <Nav.NavText color='#212124'>Home</Nav.NavText>
                        </Nav.Navli>
                        <Nav.Navli>
                            <Nav.NavText color='#212124'>About</Nav.NavText>
                        </Nav.Navli>
                        <Nav.Navli>
                            <Nav.NavText color='#212124'>Resume</Nav.NavText>
                        </Nav.Navli>
                        <Nav.Navli>
                            <Nav.NavText color='#212124'>Contact</Nav.NavText>
                        </Nav.Navli>
                        <Nav.Navli display='none'>
                            <Nav.NavLearnMoreFrame>
                                <Nav.NavText>View Portfolio</Nav.NavText>
                            </Nav.NavLearnMoreFrame>
                        </Nav.Navli>
                    </Nav.NavRight>
                    
                </Nav>
                <Nav.NavLine/>
            </>
        
        )
}
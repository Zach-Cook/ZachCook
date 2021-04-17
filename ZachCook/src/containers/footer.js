import React from 'react';

import { Nav } from '../components';

export default function FooterContainer(props){


    return (
        
            <>
                <Nav background='#212124' marginTop='150px'>
                    <Nav.NavLeft>
                        <Nav.NavTitle>Zach</Nav.NavTitle>
                    </Nav.NavLeft>
                    
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
                            <Nav.NavText>About</Nav.NavText>
                        </Nav.Navli>
                        <Nav.Navli>
                            <Nav.NavText>Resume</Nav.NavText>
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
                    
                </Nav>
                <Nav.NavLine/>
            </>
        
        )
}
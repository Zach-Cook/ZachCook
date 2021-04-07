import React, { useState } from 'react';


import { Nav } from '../components'


export default function HeaderContainer(){

    const [ isMobileNavOpen, setIsMobileNavOpen ] = useState('true')

    return(
        <Nav>
            <Nav.NavInner>
                <Nav.NavLeft>
                    <Nav.NavTitle>Zach</Nav.NavTitle>
                </Nav.NavLeft>
                <Nav.NavRight display={isMobileNavOpen}>
                    {/* <Nav.HamburgerFrame>

                    </Nav.HamburgerFrame> */}
                    {/* <Nav.UL></Nav.UL> */}
                    <Nav.Navli>
                        <Nav.NavText>Home</Nav.NavText>
                    </Nav.Navli>
                    <Nav.Navli>
                        <Nav.NavText>Portfolio</Nav.NavText>
                    </Nav.Navli>
                    <Nav.Navli>
                        <Nav.NavText>Contact</Nav.NavText>
                    </Nav.Navli>
                    <Nav.Navli>
                        <Nav.NavText>About</Nav.NavText>
                    </Nav.Navli>
                </Nav.NavRight>
            </Nav.NavInner>
        </Nav>
    )
}
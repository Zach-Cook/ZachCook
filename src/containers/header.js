import React from 'react';


import { Nav } from '../components'


export default function HeaderContainer(){


    return(
        <Nav>
            <Nav.NavInner>
                <Nav.NavLeft>
                    <Nav.NavTitle>Zach</Nav.NavTitle>
                </Nav.NavLeft>
                <Nav.NavRight>
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
import React from 'react';

import { Nav } from '../components';

export default function FooterContainer(props){


    return (
        
            <>
                <Nav background='#f8f8f8' >
                    <Nav.NavLeft display='none'>
                        <Nav.NavTitle color='#212124'>Zach</Nav.NavTitle>
                    </Nav.NavLeft>
                    
                    <Nav.NavRight display='flex' width="100%" justifyContent='none'>
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
                    </Nav.NavRight>
                    
                </Nav>
                <Nav.NavLine/>
            </>
        
        )
}
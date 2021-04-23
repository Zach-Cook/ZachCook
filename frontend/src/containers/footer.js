import React from 'react';

import { Nav } from '../components';
import {Link} from 'react-scroll'

export default function FooterContainer(props){


    return (
        
            <>
                <Nav background='#f8f8f8' >
                    <Nav.NavLeft display='none'>
                        <Nav.NavTitle color='#212124'>Zach</Nav.NavTitle>
                    </Nav.NavLeft>
                    
                    <Nav.NavRight display='flex' width="100%" justifyContent='none'>
                        <Nav.Navli>
                            <Link to="home" spy={true} smooth={true}  duration={600}><Nav.NavText color='#212124'>Home</Nav.NavText></Link>
                        </Nav.Navli>
                        <Nav.Navli>
                            <Link to="about" spy={true} smooth={true}  duration={600} offset={-300}><Nav.NavText color='#212124'>About</Nav.NavText></Link>
                        </Nav.Navli>
                        <Nav.Navli>
                            <Link to="resume" spy={true} smooth={true}  duration={600} offset={-300}><Nav.NavText color='#212124'>Resume</Nav.NavText></Link>
                        </Nav.Navli>
                        <Nav.Navli>
                            <Link to="contact" spy={true} smooth={true}  duration={600}><Nav.NavText color='#212124'>Contact</Nav.NavText></Link>
                        </Nav.Navli>
                    </Nav.NavRight>
                    
                </Nav>
                <Nav.NavLine/>
            </>
        
        )
}
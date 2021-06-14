import React from 'react';

import { Nav } from '../components';
import {Link} from 'react-scroll'

export default function FooterContainer(props){


    return (
        
            <>
                <Nav background='#202529' >
                    <Nav.NavLeft display='none'>
                        <Nav.NavTitle color='#0D6BBA'>Zach</Nav.NavTitle>
                    </Nav.NavLeft>
                    
                    <Nav.NavRight display='flex' width="100%" justifyContent='none'>
                        <Nav.Navli>
                            <Link to="home" spy={true} smooth={true}  duration={600}><Nav.NavText color='#FFFFFF'>Home</Nav.NavText></Link>
                        </Nav.Navli>
                        <Nav.Navli>
                            <Link to="about" spy={true} smooth={true}  duration={600}><Nav.NavText color='#FFFFFF'>About</Nav.NavText></Link>
                        </Nav.Navli>
                        <Nav.Navli>
                            <Link to="resume" spy={true} smooth={true}  duration={600}><Nav.NavText color='#FFFFFF'>Resume</Nav.NavText></Link>
                        </Nav.Navli>
                        <Nav.Navli>
                            <Link to="contact" spy={true} smooth={true}  duration={600}><Nav.NavText color='#FFFFFF'>Contact</Nav.NavText></Link>
                        </Nav.Navli>
                    </Nav.NavRight>
                    
                </Nav>
                <Nav.NavLine/>
            </>
        
        )
}
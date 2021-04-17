import React from 'react';

import { About } from '../components';


export default function AboutContainer(){

    return (
        
        <>
            <About>
                <About.AboutFrameInner>
                    <About.TitleText>About:</About.TitleText>
                    <About.TextFrame>
                        <About.Text>My name is Zach Cook. I am a full stack software developer with a strong understanding of decentralized blockchain technology. </About.Text>
                        <About.Text>I graduated from the University of Kansas in 2019 with a Bachelors in Information Systems.</About.Text>
                    </About.TextFrame>
                </About.AboutFrameInner>
            </About>
        </>
        
        )
}
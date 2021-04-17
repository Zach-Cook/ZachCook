import React from 'react';
import { Skills } from '../components'

//images
import ChainLink from '../images/chainlink.jpg';
import Css from '../images/css.png';
import Django from '../images/django.png';
import Ethereum from '../images/ethereum.png';
import Git from '../images/git.webp';
import HTML5 from '../images/html5.png'
import Javascript from '../images/javascript.png';
import Python from '../images/python.jpg';
import ReactEmblem from '../images/react.png';
import Ubuntu from '../images/ubuntu.png';

export default function SkillsContainer(){

    return (
        
        <>
            <Skills>
                <Skills.SkillsFrameInner>
                    <Skills.TitleFrame>
                        <Skills.TitleText>Skills:</Skills.TitleText>
                    </Skills.TitleFrame>
                    <Skills.ImageFrame>
                        <Skills.Image src={Ethereum} />
                        <Skills.Image src={ChainLink} />
                        <Skills.Image src={ReactEmblem} />
                        <Skills.Image src={Javascript} />
                        <Skills.Image src={HTML5} />
                        <Skills.Image src={Css} />
                        <Skills.Image src={Python} />
                        <Skills.Image src={Django} />                
                        <Skills.Image src={Git} />
                        <Skills.Image src={Ubuntu} />
                    </Skills.ImageFrame>
                </Skills.SkillsFrameInner>
            </Skills>
        </>
        
        )
}
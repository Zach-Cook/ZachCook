import React  from 'react'
import { BackGround } from '../components'
import ZachCook  from '../images/zachcook.jpg'
import {Link} from 'react-scroll'

export default function BackGroundContainer({children, ...restProps}){


    return (
        <>
            <BackGround id='home'>
                <BackGround.BackGroundIMG mobileUrl={ZachCook}>
                    {children}

                    <BackGround.BackGroundInnerFrame display={restProps.isMobileNavOpen}>
                        <BackGround.AttributeFrame>
                            <BackGround.TextFrame>
                                <BackGround.TitleText>Hello,</BackGround.TitleText>
                                <BackGround.TitleText>My Name is Zach Cook</BackGround.TitleText>
                                <BackGround.TitleText>I am a Full Stack Developer,</BackGround.TitleText>
                                <BackGround.TitleText>With proven blockchain understanding</BackGround.TitleText>
                            </BackGround.TextFrame>
                            <BackGround.ButtonFrame>
                                <Link to="portfolio" spy={true} smooth={true} duration={500}><BackGround.ButtonText>View Portfolio</BackGround.ButtonText></Link>
                            </BackGround.ButtonFrame>
                        </BackGround.AttributeFrame>
                    </BackGround.BackGroundInnerFrame>

                </BackGround.BackGroundIMG>
            </BackGround>

        </>
    )
}
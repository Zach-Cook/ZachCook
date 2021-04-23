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
                                <BackGround.TitleText>I am a Full Stack Developer, with proven Blockchain knowledge</BackGround.TitleText>
                            </BackGround.TextFrame>
                            <Link to="portfolio" spy={true} smooth={true} duration={500} style={{width: "100%"}}>
                                <BackGround.ButtonFrame>
                                    <BackGround.ButtonText>View Portfolio</BackGround.ButtonText>
                                </BackGround.ButtonFrame>
                            </Link>
                        </BackGround.AttributeFrame>
                    </BackGround.BackGroundInnerFrame>

                </BackGround.BackGroundIMG>
            </BackGround>

        </>
    )
}
import React  from 'react'
import { BackGround } from '../components'
import ZachCook  from '../images/zachcook.jpg'

export default function BackGroundContainer({children, ...restProps}){

    console.log(restProps)

    return (
        <>
            <BackGround>
                <BackGround.BackGroundIMG mobileUrl={ZachCook}>
                    {children}

                    <BackGround.BackGroundInnerFrame display={restProps.isMobileNavOpen}>
                        <BackGround.AttributeFrame>
                            <BackGround.TextFrame>
                                <BackGround.TitleText>Hello,</BackGround.TitleText>
                                <BackGround.TitleText>My Name is Zach Cook</BackGround.TitleText>
                                <BackGround.TitleText>I am a Full Stack Developer</BackGround.TitleText>
                                <BackGround.TitleText>with proven BlockChain understanding</BackGround.TitleText>
                            </BackGround.TextFrame>
                            <BackGround.ButtonFrame>
                                <BackGround.ButtonText>View Portfolio</BackGround.ButtonText>
                            </BackGround.ButtonFrame>
                        </BackGround.AttributeFrame>
                    </BackGround.BackGroundInnerFrame>

                </BackGround.BackGroundIMG>
            </BackGround>

        </>
    )
}
import React  from 'react'
import { BackGround } from '../components'
import ZachCook  from '../images/zachcook.jpg'
import ZachCook2 from '../images/zachcook2.jpg'
export default function BackGroundContainer({children, ...restProps}){

    console.log(ZachCook)
    return (
        <>
            <BackGround>
                <BackGround.BackGroundIMG url={ZachCook}>
                    {children}
                </BackGround.BackGroundIMG>
            </BackGround>

        </>
    )
}
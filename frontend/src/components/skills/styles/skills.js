import styled from 'styled-components';


export const SkillsFrame = styled.div`

    margin: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    background: #FFFFFF;
    box-shadow: 0px 32px 84px rgba(27, 26, 30, 0.12);




`;

export const SkillsFrameInner = styled.div`

    width: 90%;
    
`

export const TitleFrame = styled.div`
    
    display: flex;
    justify-content: flex-start;
    margin: 0;
`

export const TitleText = styled.h1`
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
    font-style: normal;
    font-weight: normal;

    color: #212124;

    margin-top: 18px;

    font-size: 32px;

    @media screen and (min-width: 1280px){
        font-size: 38px;
    }

    @media screen and (min-width: 1920px){
        font-size: 52px;
    }

`;

export const ImageFrame = styled.div`

    display: grid;
    justify-items: center;
    grid-template-columns: 1fr 1fr;
    margin: 35px 0;

    @media screen and (min-width: 1280px){
        margin: 25px 0 35px 0;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        align-items: center;
        flex-direction: row;
    }
`

export const Image = styled.img`


    width: 65px;
    margin: 10px 0;

    @media screen and (min-width: 425px){

        width: 85px;

    }

    @media screen and (min-width: 1280px){
        margin: 0;
        width: 100px;
        height: 85px;
    }

`;
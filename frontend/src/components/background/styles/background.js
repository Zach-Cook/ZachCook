import styled from 'styled-components';
import { Link as ReactRouterLink } from 'react-router-dom'; 

export const BackGroundFrame = styled.div`
    margin: 0;
    padding: 0;
`;

export const BackGroundIMG = styled.div`

    width: 100%;
    background: url(${props => props.mobileUrl});
    background-repeat: no-repeat;
    -webkit-background-size: cover;
    background-position: center center;
    height: 650px;

    @media screen and (min-width: 1920px){
        height: 1150px;
        
    }
`;


export const BackGroundInnerFrame = styled.div`

    width: 100%;

    display: ${props => props.display ? 'none': 'flex'};
    justify-content: flex-end;
    // height: 650px;

    

    @media screen and (min-width: 1920px){
        display: flex;
        height: 1000px;
    }
`

export const PersonalImage = styled.img`

    height: 400px;
    width: 15%;

`;

export const AttributeFrame = styled.div`


    
    width: 44%;
    // background: black;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;

    @media screen and (min-width: 1280px){

        width: 32%;
    }
`;

export const TextFrame = styled.div`

    display: flex;
    flex-direction: column;
    // justify-content: center;
    margin-top: 50px;
    

    @media screen and (min-width: 1280px){
        margin-top: 30px;
        justify-content: space-between;
        margin-bottom: 30px;
    }

    @media screen and (min-width: 1280px){
        margin-top: 40px;
        justify-content: space-between;
    }
`;

export const TitleText = styled.h2`

    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    margin: 5px 0;
    color: #FFFFFF;
    font-family: Arial, Helvetica, sans-serif;

    @media screen and (min-width: 1280px){
        margin: 18px 0;
        font-size: 26px;
    }

    @media screen and (min-width: 1920px){
        margin: 22px 0;
        font-size: 36px;
    }
`;


export const ButtonFrame = styled.div`

    display: none;
    width: 55%;
    border: 3px solid #FFFFFF;
    background: #0D6BBA;
    cursor: pointer;
    
    @media screen and (min-width: 1280px){
        display: block;
        // margin-bottom: 60px;    
    }

    @media screen and (min-width: 1920px){
        margin-bottom: 100px;    
    }
    
`;


export const ButtonText = styled.h4`
    font-family: Arial, Helvetica, sans-serif;
    margin: 25px 0;
    font-style: normal;
    font-weight: 100;
    font-size: 24px;
    line-height: 38px;
    text-align: center;
    letter-spacing: 4px;
    // color: #1C598F;
    color: white;

    @media screen and (min-width: 1280px){
        font-size: 20px;   
    }

    @media screen and (min-width: 1920px){
        font-size: 24px;   
    }

`;








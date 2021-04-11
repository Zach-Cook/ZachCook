import styled from 'styled-components';
import { Link as ReactRouterLink } from 'react-router-dom'; 

export const BackGroundFrame = styled.div`
    margin: 0;
    padding: 0;
`;

export const BackGroundIMG = styled.div`

    width: 100%;
    background: url(${props => props.url});
    background-repeat: no-repeat;
    -webkit-background-size: cover;
    background-position: center center;
    height: 650px;


    @media screen and (min-width: 1920px){
        height: 950px;
    }
`;


export const BackGroundInnerFrame = styled.div`

    width: 100%;

    display: ${props => props.display ? 'none': 'flex'};
    justify-content: flex-end;
    // height: 650px;
    // border: 2px solid pink;

    @media screen and (min-width: 1920px){
        display: flex;
        height: 1050px;
    }
`

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
        margin-top: 0px;
        justify-content: space-between;
    }
`;

export const TitleText = styled.h2`

    font-family: Lora;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;

    color: #FFFFFF;


    @media screen and (min-width: 1280px){
        font-size: 40px;
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
        margin-bottom: 200px;    
    }
    
`;


export const ButtonText = styled.h4`

    margin: 25px 0;
    font-family: Lora;
    font-style: normal;
    font-weight: 100;
    font-size: 30px;
    line-height: 38px;
    text-align: center;
    letter-spacing: 4px;
    // color: #1C598F;
    color: white;


`;








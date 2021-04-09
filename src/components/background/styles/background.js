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
        height: 1150px;
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
    border: 4px solid #1C598F;

    @media screen and (min-width: 1280px){
        display: block;
    }

`;


export const ButtonText = styled.h4`

    font-family: Lora;
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 38px;
    text-align: center;

    color: #1C598F;



`;








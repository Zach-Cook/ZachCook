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

    border 2px solid yellow;
    @media screen and (min-width: 1920px){
        height: 1150px;
    }
`;


export const BackGroundInnerFrame = styled.div`

    width: 100%;

    display: flex;
    justify-content: flex-end;
    height: 1050px;
    border: 2px solid pink;
`

export const AttributeFrame = styled.div`


    border: 2px solid green;
    width: 32%;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;

`;

export const TextFrame = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const TitleText = styled.h2`

    font-family: Lora;
    font-style: normal;
    font-weight: normal;
    font-size: 40px;
    line-height: 51px;

    color: #FFFFFF;

`;


export const ButtonFrame = styled.div`


    width: 55%;
    border: 4px solid #1C598F;

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








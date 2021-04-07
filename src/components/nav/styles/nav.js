import styled from 'styled-components';
import { Link as ReactRouterLink } from 'react-router-dom'; 

export const NavFrame = styled.header`
    margin:0;
    padding:0;
    
    width: 100%;

    display: flex;
    justify-content: center;
    height: 650px;
    border: 2px solid pink;


    @media screen and (min-width: 1280px){
        height: auto;
    }
`;

export const NavInner = styled.div`

    width: 95%;
    display: flex;
    justify-content: space-between;


    border: 2px solid green;
`;

export const HamburgerFrame = styled.div`

    width: 20%;
    border: 2px solid pink;

`;


export const NavLeft = styled.div`

    width: 20%;
    display: flex;
    align-items: center;
`;

export const NavTitle = styled.h1`
    
    font-family: Lora;
    font-style: normal;
    font-weight: normal;
    font-size: 35px;
    line-height: 36px;
    /* identical to box height */
    color: #FFFFFF;
    display: none;
    
    @media screen and (min-width: 1280px){
        display: block;
    }

`;

export const NavRight = styled.nav`

    width: 75%;
    justify-content: space-between;
    flex-direction: column;
    background: white;
    border: 2px solid yellow;
    display: ${props => props.display ? 'flex' : 'none'};

    @media screen and (min-width: 1280px){
        display: flex;
        background: none;
        width: 45%;
        flex-direction: row;
    }
`;



export const Navli = styled.li`

    text-decoration: none;
    list-style: none;
    display: flex;
    border: 2px solid orange;
    justify-content: center;
`;

export const NavText = styled.p`

    font-family: Lora;
    font-style: normal;
    font-weight: normal;
    font-size: 28px;
    line-height: 36px;
    /* identical to box height */
    color: #1C598F;

    @media screen and (min-width: 1280px){
        color #FFFFFF
    }
`;
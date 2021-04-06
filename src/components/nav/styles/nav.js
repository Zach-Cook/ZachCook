import styled from 'styled-components';
import { Link as ReactRouterLink } from 'react-router-dom'; 

export const NavFrame = styled.header`
    margin:0;
    padding:0;
    width: 100%;

    display: flex;
    justify-content: center;

`;

export const NavInner = styled.div`

    width: 95%;
    display: flex;
    justify-content: space-between;
    border: 2px solid green;
`;


export const NavLeft = styled.div`

    width: 20%;

    border: 2px solid pink;
    display: flex;
    align-items: center;
`;

export const NavTitle = styled.h1`
    
    font-family: Lora;
    font-style: normal;
    font-weight: normal;
    font-size: 28px;
    line-height: 36px;
    /* identical to box height */

`;

export const NavRight = styled.nav`

    width: 50%;
    display: flex;
    justify-content: space-between;

    border: 2px solid yellow;
`;



export const Navli = styled.li`

    text-decoration: none;
    list-style: none;
    display: flex;
`;

export const NavText = styled.p`

    font-family: Lora;
    font-style: normal;
    font-weight: normal;
    font-size: 28px;
    line-height: 36px;
    /* identical to box height */
    // color: #FFFFFF;
    color: black;
`;
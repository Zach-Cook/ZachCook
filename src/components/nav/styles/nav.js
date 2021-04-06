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

`;

export const NavRight = styled.nav`

    width: 45%;
    display: flex;
    justify-content: space-between;

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
    color: #FFFFFF;
`;
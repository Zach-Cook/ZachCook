import styled from 'styled-components';
import { Link as ReactRouterLink } from 'react-router-dom'; 

export const NavFrame = styled.header`
    margin:0;
    padding:0;
    
    width: 100%;

    display: flex;
    justify-content: center;
    // height: 650px;

    
    background: ${ props => props.background ? props.background : null};

    @media screen and (min-width: 1280px){
        margin-top: ${ props => props.marginTop ? props.marginTop : null};
        height: auto;
    }
`;

export const NavInner = styled.div`

    width: 95%;
    display: flex;
    justify-content: space-between;

`;

// MAKE THIS POSITION ABSOLUE OR STICKY 
export const HamburgerFrame = styled.div`
    
    width: 100%;
    display: ${ props => props.display === 'flex' ? 'none' : "flex"};
    justify-content: flex-end;    
    margin-top: 10px;

    @media screen and (min-width: 1280px){
        display: none;
    }
`;

export const HamburgerFrameInner = styled.div`

    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 20px;
    width: 15%;

    @media screen and (min-width: 1280px){
        display: none;
    }

`;

export const HamburgerDiv = styled.div`
    
    background: #FFFFFF;
    width: 100%;
    height: 2px;

`;

export const ExitFrame = styled.div`

    width: 100%;
    display: flex;
    justify-content: flex-end;


    @media screen and (min-width: 1280px){
        display: none;
    }
`;

export const ExitFrameInner = styled.div`

    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 40px;
    display: flex;
    width: 25%;

    @media screen and (min-width: 1280px){
        display: none;
    }

`;

export const RightSlash = styled.div`
    position: absolute;
    background: #1C598F;
    /* White */
    width: 50%;
    height: 2px; 
    transform: rotateY(0deg) rotate(-45deg); /* needs Y at 0 deg to behave properly*/
    transition: transform 2s;

    @media screen and (min-width: 1280px){
        display: none;
    }
`;

export const LeftSlash = styled.div`
    position: absolute;
    background: #1C598F;
    /* White */
    width: 50%;
    height: 2px;    
    transform: rotateY(0deg) rotate(45deg); /* needs Y at 0 deg to behave properly*/
    transition: transform 2s;

    @media screen and (min-width: 1280px){
        display: none;
    }
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
    color: ${props => props.color ? props.color : '#f8f8f8'};
    display: none;
    font-family: Arial, Helvetica, sans-serif;

    @media screen and (min-width: 1280px){
        display: block;
    }

`;

export const NavRight = styled.nav`
    margin: 0;
    padding: 0;
    width: 75%;
    display: ${props => props.display ? 'flex' : 'none'};
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    background: #FFFFFF;
    height: 650px;

    @media screen and (min-width: 1280px){
        height: auto;
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
    justify-content: center;
    width: 100%;

    @media screen and (min-width: 1280px){
        display: ${props => props.display ? props.display : "flex"};
    }
`;

export const NavText = styled.p`

    font-family: Arial, Helvetica, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 28px;
    line-height: 36px;
    /* identical to box height */
    color: ${props => props.color ? props.color : '#f8f8f8'};
    
    @media screen and (min-width: 1280px){
        cursor: pointer;
        color: ${props => props.color ? props.color : '#f8f8f8'};
    }
`;

export const NavLearnMoreFrame = styled.div`
    width: 80%;
    display: flex;
    justify-content: center;
    border: 4px solid #1C598F;

    @media screen and (min-width: 1280px){
        border: none;
    }
`;

export const NavLine = styled.div`
    width: 90%;
    height: 2px;
    background: white;
`;
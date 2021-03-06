import styled from 'styled-components';

export const NavFrame = styled.header`
    margin:0;
    padding:0;
    
    width: 100%;
    display: flex;
    justify-content: center;
    
    background: ${ props => props.background ? props.background : null};

    @media screen and (min-width: 1280px){
        margin-top: ${ props => props.marginTop ? props.marginTop : null};
        height: auto;
    }
`;

export const NavInner = styled.div`

    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;

    @media screen and (min-width: 1280px){
        justify-content: space-between;
        width: 95%;
    }
`;

// MAKE THIS POSITION ABSOLUE OR STICKY 
export const HamburgerFrame = styled.div`
    
    width: 70%;
    display: ${ props => props.display === 'flex' ? 'none' : "flex"};
    justify-content: flex-end;    
    height: 40px;
    align-items: center;
    margin-top: 10px;

    @media screen and (min-width: 1280px){
        display: none;
    }
`;

export const HamburgerFrameInner = styled.div`

    position: relative;
    display: flex;
    flex-direction: column;

    align-items: center;
    width: 15%;
    height: 30px;

    @media screen and (min-width: 1280px){
        display: none;
    }

`;

export const HamburgerDiv = styled.div`
    
    background: #FFFFFF;
    width: 100%;
    height: 2px;
    margin: 4px;
`;

export const ExitFrame = styled.div`

    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-top: 10px;

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
    display: ${props => props.display ? props.display : "flex"} ;
    align-items: center;


    @media screen and (min-width: 1280px){
        display: flex;
    }

`;

export const NavLeftImage = styled.img`
    margin-top: 10px;
    height: 40px;
    width: 40px;

    @media screen and (min-width: 1280px){
        cursor: pointer;

        height: 60px;
        width: 60px;
    }
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
    width: ${props => props.width ? props.width : "100%"};
    display: ${props => props.display ? 'flex' : 'none'};
    justify-content: ${ props => props.justifyContent ? props.justifyContent : 'space-between'};
    align-items: center;
    flex-direction: column;
    background: #202529;
    height: ${ props => props.height ? props.height : null};

    @media screen and (min-width: 1280px){
        justify-content: space-between;
        height: auto;
        display: flex;
        background: none;
        width: 45%;
        flex-direction: row;
    }
`;



export const Navli = styled.li`

    margin: 0;
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
    color: ${props => props.color ? props.color : '#1C598F'};

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
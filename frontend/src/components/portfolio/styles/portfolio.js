import styled from 'styled-components';


export const PortfolioFrame = styled.div`

    width: 90%;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;

    background: #2F3338;
    border-radius: 8px;
`;

export const TitleFrame = styled.div`
    width: 90%;

    margin-top: 20px;
    margin-bottom: 20px;
    display: flex;
    justify-content: flex-start;


    @media screen and (min-width: 1280px){
        margin-top: 10px;
        margin-bottom: 10px;
    }

    @media screen and (min-width: 1920px){
        margin-top: 20px;
        margin-bottom: 20px;
    }
`;

export const TitleText = styled.h4`
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
    font-style: normal;
    font-weight: 100;
    font-size: 22px;
    color: #0D6BBA;

    @media screen and (min-width: 1280px){
        font-size: 24px;
    }

    @media screen and (min-width: 1920px){
        font-size: 30px;
    }

`

export const PortfolioBox = styled.div`

    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    box-shadow: 14px 14px 28px rgba(0, 0, 0, 0.2);


`;

export const PortoflioInnerWrapper = styled.div`

    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    

    ////
    margin-top: 20px;


`;

export const PortfolioBoxInnerArrowFrame = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;

    width: 15%;


    @media screen and (min-width: 1280px){
        width: 5%;
    }

`;

export const ArrowFrame = styled.div`

    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;

    cursor: pointer;

`;

export const ArrowImage = styled.img`

    height: 40px;
    width: 40px;

`;

export const ArrowDivTop = styled.div`

    background: #2F3338;
    height: 2px;
    width: 50%;
    transform: matrix(-0.71, -0.7, 0.71, -0.71, 0, 0);
    margin-top: 15px;
    margin-bottom: 15px;

    @media screen and (min-width: 1280px){
        margin-top: 10px;
        margin-bottom: 10px;
    }

    @media screen and (min-width: 1920px){
        margin-top: 15px;
        margin-bottom: 15px;
    }
    
`;


export const ArrowDivBottom = styled.div`
    transform: matrix(-0.71, 0.7, -0.71, -0.71, 0, 0);

    
    background: #2F3338;
    height: 2px;
    width: 50%;
    margin-top: 15px;
    margin-bottom: 15px;

    @media screen and (min-width: 1280px){
        margin-top: 10px;
        margin-bottom: 10px;
    }

    @media screen and (min-width: 1920px){
        margin-top: 15px;
        margin-bottom: 15px;
    }
`;

export const PortfolioCentralFrame = styled.div`

    width: 90%;

    background: #2F3338;
    display: flex;
    justify-content: center;

    
    @media screen and (min-width: 1280px){
        width: 90%;
    }

    @media screen and (min-width: 1920px){
        width: 90%;
    }

`;

export const PortfolioCenterImage = styled.img`

    width: 100%;
    height: 400px;

    @media screen and (min-widt: 600px){
        height: auto;
    }


    @media screen and (min-width: 1280px){
        height: auto;
        width: 87%;
    }

`;


export const PortfolioBottom = styled.div`

    width: 90%;

    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (min-width: 1280px){
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
    }

    @media screen and (min-width: 1920px){
        height: auto;
    }



`;

export const ProjectButton = styled.div`

    cursor: ${ props => props.cursor ? props.cursor : null};

    width: 90%;
    display: flex;
    height: 45px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: ${ props => props.respositoryLink ? "#BA0D6B" : "#0D6BBA"};

    margin: 10px 0;
    
    

    @media screen and (min-width: 1280px){
        width: 27%;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
        height: 45px;

    }

    @media screen and (min-width: 1920px){
        height: 65px;
    }
    
`;

export const ProjectButtonText = styled.p`

    font-family: Arial, Helvetica, sans-serif;
    color: #FFFFFF;
    font-size: 20px;
    letter-spacing: 1.5px;
`;
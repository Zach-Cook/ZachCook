import styled from 'styled-components';


export const PortfolioFrame = styled.div`

    width: 90%;
    margin: 0;
    
    border: 2px solid green;
`;

export const TitleFrame = styled.div`
    width: 100%;
    border: 2px solid pink;

    margin-top: 0px;
    margin-bottom: 60px;
    display: flex;
    justify-content: flex-start;

`;

export const TitleText = styled.h2`
    margin: 0;
    font-family: Lora;
    font-style: normal;
    font-weight: normal;
    font-size: 60px;
    font-family: Arial, Helvetica, sans-serif;
    color: #212124;

`

export const PortfolioBox = styled.div`

    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 14px 14px 28px rgba(0, 0, 0, 0.2);

    
`;

export const PortfolioBoxInnerArrowFrame = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;

    width: 5%;

    
    border: 2px solid orange;
    height: 400px;

`;

export const ArrowFrame = styled.div`

    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;

    cursor: pointer;

`;

export const ArrowDivTop = styled.div`

    background: #212124;
    height: 2px;
    width: 50%;
    transform: matrix(-0.71, -0.7, 0.71, -0.71, 0, 0);
    margin-top: 15px;
    margin-bottom: 15px;
    
`;


export const ArrowDivBottom = styled.div`
    transform: matrix(-0.71, 0.7, -0.71, -0.71, 0, 0);

    
    background: #212124;
    height: 2px;
    width: 50%;
    margin-top: 15px;
    margin-bottom: 15px;
`;

export const PortfolioCentralFrame = styled.div`

    width: 90%;

    height: 400px;

    border: 2px solid yellow;

`;
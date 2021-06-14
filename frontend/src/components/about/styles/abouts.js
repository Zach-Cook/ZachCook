import styled from 'styled-components';

export const AboutFrame = styled.div`
    margin: 0;
    width: 95%;
    display: flex;
    justify-content: center;
    background: #2F3338;
    box-shadow: 14px 14px 28px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
`;


export const AboutFrameInner = styled.div`

    width: 90%;


`;

export const TitleText = styled.h2`
    
    font-family: Arial, Helvetica, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 35px;
    color: #0D6BBA;

    @media screen and (min-width: 1280px){
        font-size: 48px;
    }

`;

export const TextFrame = styled.div`

    width: 100%;
    display: flex;
    flex-direction: column;
`;


export const Text = styled.p`

    font-family: Arial, Helvetica, sans-serif;
    font-style: normal;
    letter-spacing: .5px;
    font-weight: normal;
    font-size: 20px;
    margin: 5px 0;
    color: #FFFFFF;

    &:nth-child(1) {
        margin-top: 50px;
    }

    &:nth-child(3) {
        margin-bottom: 50px;
    }

    @media screen and (min-width: 1280px){
        margin: 8px 0;
        font-size: 24px;
    }

    @media screen and (min-width: 1920px){
        margin: 10px 0;
        font-size: 28px;
    }
`


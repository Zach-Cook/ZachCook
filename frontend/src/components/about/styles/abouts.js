import styled from 'styled-components';

export const AboutFrame = styled.div`
    margin: 0;
    width: 95%;
    display: flex;
    justify-content: center;
    background: #f8f8f8;
    // background: #0D6BBA;
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
    font-weight: normal;
    font-size: 20px;
    margin: 5px 0;
    color: #0D6BBA;

    &:nth-child(1) {
        margin-top: 50px;
    }

    &:nth-child(3) {
        margin-bottom: 50px;
    }

    @media screen and (min-width: 1280px){
        margin: 10px 0;
        font-size: 28px;
    }
`


import styled from 'styled-components';

export const AboutFrame = styled.div`
    margin: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    background: #0D6BBA;
    box-shadow: 14px 14px 28px rgba(0, 0, 0, 0.25);
`;


export const AboutFrameInner = styled.div`

    width: 90%;


`;

export const TitleText = styled.h2`
    
    font-family: Arial, Helvetica, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 48px;
    color: #FFFFFF;

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
    font-size: 28px;
    margin: 10px 0;
    color: #FFFFFF;

    &:nth-child(3) {
        margin-bottom: 50px;
    }
`


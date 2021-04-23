import styled from 'styled-components';

export const ResumeFrame = styled.div`

    margin-top: 40px;
    display: flex;
    justify-content: center;
    width 90%;

    @media screen and (min-width: 1280px){
        margin-top: 65px;
    }

    @media screen and (min-width: 1920px){
        margin-top: 95px;
    }
`;

export const ResumeButton = styled.div`

    border: 4px solid #0D6BBA;
    width: 100%;
    margin: 10px 0;
    

    cursor: pointer;

    @media screen and (min-width: 1280px){
        width: 40%;
        margin: 20px 0;
    }

    @media screen and (min-width: 1920px){
        width: 35%;
        margin: 20px 0;
    }
`;


export const ResumeButtonText = styled.h6`

    margin: 22px 0;

    font-family: Arial, Helvetica, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 28px;
    line-height: 61px;
    text-align: center;
    letter-spacing: 4px;
    color: #0D6BBA;

    @media screen and (min-width: 1280px){
        font-size: 34px;
    }

    @media screen and (min-width: 1920px){
        font-size: 38px;
    }


`;
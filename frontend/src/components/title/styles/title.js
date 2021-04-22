import styled from 'styled-components';

export const TitleFrame = styled.div`

    display: flex;
    justify-content: ${props => props.justifyContent ? props.justifyContent : "flex-start"};
    width: 90%;
    margin-bottom: 20px;
`;


export const TitleText = styled.h2`


    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
    font-style: normal;
    font-weight: 100;
    font-size: 60px;
    color: #FFFFFF;

`;


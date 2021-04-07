import styled from 'styled-components';
import { Link as ReactRouterLink } from 'react-router-dom'; 

export const BackGroundFrame = styled.div`
    margin: 0;
    padding: 0;
`;

export const BackGroundIMG = styled.div`

    width: 100%;
    background: url(${props => props.url});
    background-repeat: no-repeat;
    -webkit-background-size: cover;
    background-position: center center;
    height: 650px;

    @media screen and (min-width: 1920px){
        height: 1000px;
    }
`;

import styled from 'styled-components';
import { Link as ReactRouterLink } from 'react-router-dom'; 

export const BackGroundFrame = styled.div`
    margin: 0;
    padding: 0;
`;

export const BackGroundIMG = styled.div`

    width: 100%;
    background: linear-gradient(0deg, rgba(64, 60, 54, 0.4), rgba(64, 80, 95, 0.4)), url(${props => props.url});
    background-repeat: no-repeat;
    -webkit-background-size: cover;
    background-position: center center;
    height: 650px;
`;

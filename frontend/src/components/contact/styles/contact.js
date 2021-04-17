import styled from 'styled-components';

export const ContactFrame = styled.div`

    width: 90%;
    display: flex;
    justify-content: center;
    // height: 400px;

    margin-bottom: 150px;

`;

export const Form = styled.div`

    // width: 85%;
    // background: #f8f8f8;
    // box-shadow: 14px 14px 28px rgba(255, 255, 255, 0.2);
    // border-radius: 20px;
`;

// not in use
export const InformationFrame = styled.div`

    width: 60%;
    background: #ffffff;
    box-shadow: 14px 14px 28px rgba(255, 255, 255, 0.2);
    border-radius: 20px;

    display: flex;
    justify-content: center;
`;

export const ContactFrameInner = styled.div`

    width: 80%;
    margin: 40px 0;

`;

export const Title = styled.h4`

    font-family: Arial, Helvetica, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 32px;
    color: #585A60;

`;

export const HorizontalBar = styled.div`

    background: #585A60;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.25);
    transform: matrix(1, 0, 0, -1, 0, 0);
    height: 2px;

    margin: 40px 0;
`

export const ContactInfoFrame = styled.div`

    display: flex;
    justify-content: flex-start;
    align-items: center;

`

export const PersonalImage = styled.img`

    height: 100px;

    @media screen and (min-width: 1280px){
        width: 18%;
        height: 250px;
    }

    @media screen and (min-width: 1920px){
        width: 27%;
        height: 350px;
    }
`;

export const ItemFrame = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    margin-left: 65px;
`;

export const Text = styled.p`

    font-family: Arial, Helvetica, sans-serif;
    font-style: normal;
    font-weight: ${ props => props.fontWeight ? props.fontWeight : null};
    font-size: 24px;


    color: #4E4D53;


`

export const SocialLogo = styled.img`
    
    margin-left: 65px;
    width: 149px;
    height: 123px;
    cursor: pointer;

`
import React from 'react';

import { Title } from '../components';




export default function TitleContainer(props){

    return (

        <Title justifyContent={"center"}>
            <Title.TitleText >{props.title}</Title.TitleText>
        </Title>

    )
}
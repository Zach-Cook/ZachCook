import React from 'react';
import { Main } from '../components';


export default function MainContainer({children, ...restProps}){
    return <Main>{children}</Main>
}

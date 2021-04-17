import React from 'react';

import { BarFrame } from './styles/bar';

export default function Bar({children, ...restProps}){

    return <BarFrame {...restProps}>{children}</BarFrame>
}

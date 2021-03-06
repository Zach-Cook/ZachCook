import React from 'react';

import { About } from '../components';
import { openInNewTab } from '../helpers/openinenewtab';

export default function AboutContainer(){

    const aStyle = {
        color: "#BA0D6B",
        textDecoration: "underline",
        cursor: "pointer"
    }

    return (
        
        <>
            <About>
                <About.AboutFrameInner>
                    {/* <About.TitleText>About:</About.TitleText> */}
                    <About.TextFrame>
                        <About.Text>- My name is Zach Cook. I graduated from the University of Kansas in 2019 with a Bachelor's in Information Systems.</About.Text>
                        <About.Text>- Jumping into my Family's organization right after graduation, I worked with them to build many useful applications.</About.Text>
                        <About.Text>- I also have a love for Crypto! From learning and investing since 2016 to setting up ETH2.0 Testnet Validators, to creating <span style={aStyle} onClick={()=> openInNewTab("https://chainfeed.io")}>ChainFeed.io</span> with Web3.js and Chainlink oracles, I have an array of knowledge accross the industry.</About.Text>
                    </About.TextFrame>
                </About.AboutFrameInner>
            </About>
        </>
        
        )
}
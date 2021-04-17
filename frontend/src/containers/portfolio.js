import React from 'react';

import { Portfolio } from '../components';

export default function PortfolioContainer(){

    return (
        
        <>  

            <Portfolio>
                <Portfolio.TitleFrame>
                    <Portfolio.TitleText>Portfolio:</Portfolio.TitleText>
                </Portfolio.TitleFrame>
                <Portfolio.PortfolioBox>
                    <Portfolio.PortfolioBoxInnerArrowFrame>
                        <Portfolio.ArrowFrame>
                            <Portfolio.ArrowDivBottom/>   
                            <Portfolio.ArrowDivTop/>
                             
                        </Portfolio.ArrowFrame>
                    </Portfolio.PortfolioBoxInnerArrowFrame>

                    <Portfolio.PortfolioCentralFrame>
                        
                    </Portfolio.PortfolioCentralFrame>

                    <Portfolio.PortfolioBoxInnerArrowFrame>
                        <Portfolio.ArrowFrame>
                            <Portfolio.ArrowDivTop/>
                            <Portfolio.ArrowDivBottom/>    
                        </Portfolio.ArrowFrame>
                    </Portfolio.PortfolioBoxInnerArrowFrame>
                </Portfolio.PortfolioBox>
            </Portfolio>

        </>
        
        )
}
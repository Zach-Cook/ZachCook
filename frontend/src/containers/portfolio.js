import React from 'react';
import { Portfolio } from '../components';

// custom hooks
import usePortfolio from '../hooks/useportfolio';
import usePortfolioOffset from '../hooks/useportfoliooffset';




export default function PortfolioContainer(){


    const portfolioData = usePortfolio()
    const { portfolioOffset, increment, decrement } = usePortfolioOffset()

    

    if(portfolioData){

        console.log("Length of portfolio ", portfolioData.length)

        return (
        
            <>  

                <Portfolio >
                    <Portfolio.TitleFrame>
                        <Portfolio.TitleText>Cook Land and Realty LLC:</Portfolio.TitleText>
                    </Portfolio.TitleFrame>

                    <Portfolio.PortfolioBox>
                        <Portfolio.PortoflioInnerWrapper>
                            <Portfolio.PortfolioBoxInnerArrowFrame>

                                <Portfolio.ArrowFrame onClick={decrement}>
                                    <Portfolio.ArrowDivBottom/>   
                                    <Portfolio.ArrowDivTop/>
                                </Portfolio.ArrowFrame>

                            </Portfolio.PortfolioBoxInnerArrowFrame>

                            <Portfolio.PortfolioCentralFrame>
                                <Portfolio.PortfolioCenterImage src={portfolioData[portfolioOffset].image}/>
                            </Portfolio.PortfolioCentralFrame>

                            <Portfolio.PortfolioBoxInnerArrowFrame>

                                <Portfolio.ArrowFrame onClick={increment}>
                                    <Portfolio.ArrowDivTop/>
                                    <Portfolio.ArrowDivBottom/>    
                                </Portfolio.ArrowFrame>

                            </Portfolio.PortfolioBoxInnerArrowFrame>
                        </Portfolio.PortoflioInnerWrapper>
                        <Portfolio.PortfolioBottom>
                            <Portfolio.ProjectButton cursor="pointer">
                                <Portfolio.ProjectButtonText>View Project</Portfolio.ProjectButtonText>
                            </Portfolio.ProjectButton>
                            <Portfolio.ProjectButton cursor="pointer">
                                <Portfolio.ProjectButtonText>View Repository</Portfolio.ProjectButtonText>
                            </Portfolio.ProjectButton>
                        </Portfolio.PortfolioBottom>
                    </Portfolio.PortfolioBox>

                </Portfolio>

            </>
        
        )
    } else{
        return <h1>Loading</h1>
    }
   
}
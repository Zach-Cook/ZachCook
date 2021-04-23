import React from 'react';
import { Portfolio } from '../components';
import usePortfolio from '../hooks/useportfolio';





export default function PortfolioContainer(){


    const portfolioData = usePortfolio()


    if(portfolioData){
        return (
        
            <>  

                <Portfolio id="portfolio">
                    <Portfolio.TitleFrame>
                        <Portfolio.TitleText>Cook Land and Realty LLC:</Portfolio.TitleText>
                    </Portfolio.TitleFrame>

                    <Portfolio.PortfolioBox>
                        <Portfolio.PortoflioInnerWrapper>
                            <Portfolio.PortfolioBoxInnerArrowFrame>
                                <Portfolio.ArrowFrame>
                                    <Portfolio.ArrowDivBottom/>   
                                    <Portfolio.ArrowDivTop/>
                                    
                                </Portfolio.ArrowFrame>
                            </Portfolio.PortfolioBoxInnerArrowFrame>

                            <Portfolio.PortfolioCentralFrame>
                                <Portfolio.PortfolioCenterImage src={portfolioData[0].image}/>
                            </Portfolio.PortfolioCentralFrame>

                            <Portfolio.PortfolioBoxInnerArrowFrame>
                                <Portfolio.ArrowFrame>
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
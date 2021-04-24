import React from 'react';
import { Portfolio } from '../components';

// custom hooks
import usePortfolio from '../hooks/useportfolio';

import { openInNewTab } from '../helpers/openinenewtab';


export default function PortfolioContainer(){


    const { portfolio, portfolioOffset, increment, decrement } = usePortfolio()

    

    if(portfolio){

        return (
        
            <>  

                <Portfolio >
                    <Portfolio.TitleFrame>
                        <Portfolio.TitleText>{portfolio[portfolioOffset].name}:</Portfolio.TitleText>
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
                                <Portfolio.PortfolioCenterImage src={portfolio[portfolioOffset].image}/>
                            </Portfolio.PortfolioCentralFrame>

                            <Portfolio.PortfolioBoxInnerArrowFrame>

                                <Portfolio.ArrowFrame onClick={increment}>
                                    <Portfolio.ArrowDivTop/>
                                    <Portfolio.ArrowDivBottom/>    
                                </Portfolio.ArrowFrame>

                            </Portfolio.PortfolioBoxInnerArrowFrame>
                        </Portfolio.PortoflioInnerWrapper>
                        <Portfolio.PortfolioBottom>
                            <Portfolio.ProjectButton cursor="pointer" onClick={ () => openInNewTab(portfolio[portfolioOffset].projectLink)}>
                                <Portfolio.ProjectButtonText>View Project</Portfolio.ProjectButtonText>
                            </Portfolio.ProjectButton>
                            <Portfolio.ProjectButton cursor="pointer" onClick={ () => {
                                    if(portfolio[portfolioOffset].respositoryLink){
                                        openInNewTab(portfolio[portfolioOffset].respositoryLink)
                                    }
                                }}>
                                <Portfolio.ProjectButtonText>{portfolio[portfolioOffset].respositoryLink ? "View Repository" : "Private Repository"}</Portfolio.ProjectButtonText>
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
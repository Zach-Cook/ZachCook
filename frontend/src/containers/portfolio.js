import React from 'react';
import { Portfolio } from '../components';

// custom hooks
import usePortfolio from '../hooks/useportfolio';
import useWindowDimensions from '../hooks/usewindowdimensions';

// helper function
import { openInNewTab } from '../helpers/openinenewtab';
import imageHandler from '../helpers/imagehandler';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleRight, faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons'

export default function PortfolioContainer(){


    const { portfolio, portfolioOffset, increment, decrement } = usePortfolio()
    const windowDimensions = useWindowDimensions()


    const arrowStyle={
        color: "#FFFFFF",
        height: "40px",
        width: "40px"
    }

    if(portfolio){


        return (
        
            <>  

                <Portfolio >
                    <Portfolio.TitleFrame>
                        <Portfolio.TitleText>{portfolio[portfolioOffset].Name}</Portfolio.TitleText>
                    </Portfolio.TitleFrame>

                    <Portfolio.PortfolioBox>
                        <Portfolio.PortoflioInnerWrapper >
                            <Portfolio.PortfolioBoxInnerArrowFrame >
                                <Portfolio.ArrowFrame onClick={decrement} >
                                    <FontAwesomeIcon icon={faArrowCircleLeft} style={arrowStyle}/>
                                </Portfolio.ArrowFrame>

                            </Portfolio.PortfolioBoxInnerArrowFrame>

                            <Portfolio.PortfolioCentralFrame>
                                <Portfolio.PortfolioCenterImage
        
                                    src={`${process.env.REACT_APP_BASE_URL}${imageHandler( windowDimensions, portfolio[portfolioOffset])}`}
                                />
                            </Portfolio.PortfolioCentralFrame>

                            <Portfolio.PortfolioBoxInnerArrowFrame>

                                <Portfolio.ArrowFrame onClick={increment}>
                                    <FontAwesomeIcon icon={faArrowCircleRight} style={arrowStyle}/>
                                </Portfolio.ArrowFrame>

                            </Portfolio.PortfolioBoxInnerArrowFrame>
                        </Portfolio.PortoflioInnerWrapper>
                        <Portfolio.PortfolioBottom>
                            <Portfolio.ProjectButton cursor="pointer" onClick={ () => openInNewTab(portfolio[portfolioOffset].ProjectLink)}>
                                <Portfolio.ProjectButtonText>View Project</Portfolio.ProjectButtonText>
                            </Portfolio.ProjectButton>
                            <Portfolio.ProjectButton 
                                cursor="pointer"
                                respositoryLink={!portfolio[portfolioOffset].RepositoryLink} 
                                onClick={ () => {
                                if(portfolio[portfolioOffset].RepositoryLink){
                                    openInNewTab(portfolio[portfolioOffset].RepositoryLink)
                                    }
                                }}
                            >
                                <Portfolio.ProjectButtonText >{portfolio[portfolioOffset].RepositoryLink ? "View Repository" : "Private Repository"}</Portfolio.ProjectButtonText>
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
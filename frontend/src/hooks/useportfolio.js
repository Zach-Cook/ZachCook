import { useState, useEffect } from 'react'

import makeNegativeIndex from '../proxy/makenegativeindex'
import { portfolioData } from '../data/projects'


export default function usePortfolio(){


    const [ portfolio, setPortfolio] = useState(null)
    const [ portfolioLength, setPortfolioLength ] = useState(null)
    const [ portfolioOffset, setPortfolioOffset ] = useState(0);

    useEffect(()=>{

        const data = makeNegativeIndex(portfolioData)
        setPortfolioLength(portfolioData.length)
        setPortfolio(data)

        
    }, [portfolioOffset])


    const increment = () => {
        // if the portfolio offset + 1 is equal to the length of the portfolio than it will just set it to 0
        if (portfolioOffset + 1 !== portfolioLength){
            setPortfolioOffset(portfolioOffset + 1)
        } else {
            setPortfolioOffset(0)
        }

        
    }

    const decrement = () => {
        // if the portfolio offset + 1 is equal to the length of the portfolio than it will just set it to 0
        // *-1 because of the negative indexing
        if (portfolioOffset * -1 !== portfolioLength){
            setPortfolioOffset(portfolioOffset - 1)
        } else {
            setPortfolioOffset(0)
        }
        
    }



    return { portfolio, portfolioOffset, increment, decrement}

}
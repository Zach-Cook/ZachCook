import { useState, useEffect } from 'react'

import makeNegativeIndex from '../proxy/makenegativeindex'
import { portfolioData } from '../data/projects'


export default function usePortfolio(){


    const [ portfolio, setPortfolio] = useState(null)
    const [ portfolioOffset, setPortfolioOffset ] = useState(0);

    useEffect(()=>{

        const data = makeNegativeIndex(portfolioData)
        setPortfolio(data)

        
    }, [portfolioOffset])

    


    const increment = () => {
        
        setPortfolioOffset(portfolioOffset + 1)
    }

    const decrement = () => {
        
        setPortfolioOffset(portfolioOffset - 1)
    }



    return { portfolio, portfolioOffset, increment, decrement}

}
import { useState, useEffect } from 'react'

import makeNegativeIndex from '../proxy/makenegativeindex'
import { portfolioData } from '../data/projects'


export default function usePortfolio(){


    const [ portfolio, setPortfolio] = useState(null)


    useEffect(()=>{

        const data = makeNegativeIndex(portfolioData)

        setPortfolio(data)
    }, [])


    return portfolio

}
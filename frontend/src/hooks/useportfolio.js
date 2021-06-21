import { useState, useEffect } from 'react'

import makeNegativeIndex from '../proxy/makenegativeindex'

import api from '../api/axios'


export default function usePortfolio(){


    const [ portfolio, setPortfolio] = useState(null)
    const [ portfolioLength, setPortfolioLength ] = useState(null)
    const [ portfolioOffset, setPortfolioOffset ] = useState(0);

    useEffect(()=>{

        async function getData(){

            try{
                const data = await api.get(`/project/api/v1/project/`)
                
                const negativeIndexData = await makeNegativeIndex(data.data)
                setPortfolioLength(negativeIndexData.length)
                setPortfolio(negativeIndexData)

            } catch (err){
                console.log(err)
            }   
        }

        getData()

        return ()=> {
            setPortfolio(null)
            setPortfolioLength(null)
            setPortfolioOffset(null)
        }
        
    }, [])


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
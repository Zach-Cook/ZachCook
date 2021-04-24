import { useState } from 'react';




export default function usePortfolioOffset(){

    const [ portfolioOffset, setPortfolioOffset ] = useState(0);


    const increment = () => {

        setPortfolioOffset(portfolioOffset + 1)
    }

    const decrement = () => {
        setPortfolioOffset(portfolioOffset - 1)
    }


    console.log(portfolioOffset)


    return { portfolioOffset, increment, decrement}
}
import { useState } from 'react';




export default function usePortfolioOffset(){

    const [ portfolioOffset, setPortfolioOffset ] = useState(0);


    const increment = () => {
        console.log("increment")
        setPortfolioOffset(portfolioOffset + 1)
    }

    const decrement = () => {
        console.log("decrement")
        setPortfolioOffset(portfolioOffset - 1)
    }


    console.log("Portfolio offset ", portfolioOffset)


    return { portfolioOffset, increment, decrement}
}
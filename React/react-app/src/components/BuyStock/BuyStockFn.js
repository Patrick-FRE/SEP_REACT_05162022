import React, { useEffect } from 'react'
import { getInitStockInfo } from '../../apis/stock.api'
import { useCounter } from '../../hooks/useCounter'
import { useLoading } from '../../hooks/useLoading'

const BuyStockFn = () => {
    const [isLoading, startLoading, endLoading, showLoading] = useLoading(false)
    const [
        stockAmount,
        buyStock,
        sellStock,
        setStockOption
    ] = useCounter()

    useEffect(() => {
        startLoading()
        getInitStockInfo().then(option => {
            //console.log(option)
            setStockOption(option);
            endLoading()
        })
    }, [])


    return <section>
        <h1>How many stock you want to buy</h1>
        {
            isLoading ? showLoading('normal') :
                <>
                    <button onClick={buyStock}>
                        +
                    </button>
                    <span>{stockAmount}</span>
                    <button onClick={sellStock}>
                        -
                    </button>
                </>
        }
    </section>
}

export default BuyStockFn;
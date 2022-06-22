import React, { useEffect } from 'react'
import { getInitStockInfo } from '../../apis/stock.api'
import { useCounter } from '../../hooks/useCounter'
import { useLoading } from '../../hooks/useLoading'
import { useBuyStockContext } from '../../context/BuyStockContext'

const BuyStockFn = () => {
    const {
        stockAmount,
        buyStock,
        sellStock,
        isLoadingStockAmount,
        renderSpinner
    } = useBuyStockContext()
    return <section>
        <header>BuyStockFn</header>
        <h1>How many stock you want to buy</h1>
        {
            isLoadingStockAmount ? renderSpinner() :
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
import React, { useContext, useEffect } from 'react';
import { useCounter } from '../hooks/useCounter';
import { getInitStockInfo } from '../apis/stock.api';
import { useLoading } from '../hooks/useLoading'

const BuyStockContext = React.createContext(null);

export const withBuyStockContext = (WrappedComponent) => {
    return class extends React.Component {
        static contextType = BuyStockContext;
        render() {
            return <WrappedComponent {...this.props} {...this.context} ></WrappedComponent>
        }
    }
}


export const useBuyStockContext = () => {
    return useContext(BuyStockContext)
}

export const BuyStockContextProvider = (props) => {
    const [
        stockAmount,
        buyStock,
        sellStock,
        setStockOption
    ] = useCounter()
    const [isLoading, startLoading, endLoading, showLoading] = useLoading(false)

    useEffect(() => {
        startLoading()
        getInitStockInfo().then(option => {
            //console.log(option)
            setStockOption(option);
            endLoading()
        })
    }, []);


    return <BuyStockContext.Provider value={{
        stockAmount,
        buyStock,
        sellStock,
        isLoadingStockAmount: isLoading,
        renderSpinner: () => showLoading('spinner')
    }}>
        {props.children}
    </BuyStockContext.Provider>
}
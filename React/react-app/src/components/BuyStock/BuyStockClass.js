import React from 'react';
import { withCounter } from '../../hoc/withCounter';
import { withLoading } from '../../hoc/withLoading';
import { getInitStockInfo } from '../../apis/stock.api'
import { withBuyStockContext } from '../../context/BuyStockContext'
class BuyStockClass extends React.Component {
    render() {
        return (
            <section>
                <header>BuyStockClass</header>
                <h1>How many stock you want to buy</h1>
                {
                    this.props.isLoadingStockAmount ? this.props.renderSpinner() :
                        <>
                            <button onClick={this.props.buyStock}>
                                +
                            </button>
                            <span>{this.props.stockAmount}</span>
                            <button onClick={this.props.sellStock}>
                                -
                            </button>
                        </>
                }
            </section>
        );
    }


}

//const BuyStockClassContainer = withNotification(withGlobal(withAuth(withCounter(withLoading(BuyStockClass)))));
// const BuyStockClassContainer = withCounter(withLoading(BuyStockClass));
const BuyStockClassContainer = withBuyStockContext(BuyStockClass)
export default BuyStockClassContainer;

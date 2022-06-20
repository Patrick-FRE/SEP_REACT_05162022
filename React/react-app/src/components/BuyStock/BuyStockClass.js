import React from 'react';
import { withCounter } from '../../hoc/withCounter';
import { withLoading } from '../../hoc/withLoading';
import { getInitStockInfo } from '../../apis/stock.api'
class BuyStockClass extends React.Component {
    render() {
        return (
            <section>
                <h1>How many stock you want to buy</h1>
                {
                    this.props.isLoading ? this.props.showLoading('spinner') :
                        <>
                            <button onClick={this.props.handleAdd}>
                                +
                            </button>
                            <span>{this.props.counter}</span>
                            <button onClick={this.props.handleSub}>
                                -
                            </button>
                        </>
                }
            </section>
        );
    }

    componentDidMount() {
        this.props.startLoading()
        getInitStockInfo().then(option => {
            this.props.handleSetOption(option);
            this.props.endLoading()
        })
    }
}

//const BuyStockClassContainer = withNotification(withGlobal(withAuth(withCounter(withLoading(BuyStockClass)))));


const BuyStockClassContainer = withCounter(withLoading(BuyStockClass));

export default BuyStockClassContainer;

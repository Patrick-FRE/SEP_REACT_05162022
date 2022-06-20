import React from 'react';
import { withCounter } from '../../hoc/withCounter';
class BuyStockClass extends React.Component {
    render() {
        return (
            <section>
                <h1>How many stock you want to buy</h1>
                <button onClick={this.props.handleAdd}>
                    +
                </button>
                <span>{this.props.counter}</span>
                <button onClick={this.props.handleSub}>
                    -
                </button>
            </section>
        );
    }
}

const BuyStockClassContainer = withCounter(BuyStockClass, { initCounter: 3, incrementNum: 3, decrementNum: 3 });

export default BuyStockClassContainer;

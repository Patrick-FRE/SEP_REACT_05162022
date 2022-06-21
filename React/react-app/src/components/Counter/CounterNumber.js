import React from 'react';
import { withCounter } from '../../hoc/withCounter'

class CounterNumber extends React.Component {
    render() {
        return <span>{this.props.counter}</span>
    }
}

const CounterNumberContainer = withCounter(CounterNumber);

export default CounterNumberContainer
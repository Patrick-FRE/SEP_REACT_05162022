import React from 'react';
import { withCounter } from "../../hoc/withCounter"

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "CounterClass"
        }
        this.hanldeAlert = this.hanldeAlert.bind(this);
    }

    hanldeAlert() {
        setTimeout(() => {
            alert(this.props.counter)
        }, 5000)
    }

    render() {
        console.log('render class compoennt')
        console.log("props counter class", this.props)
        return <section>
            <header>{this.state.title}:{this.props.counter}</header>
            <button onClick={this.props.handleAdd} >+</button><button onClick={this.props.handleSub}>-</button>
            <button onClick={this.hanldeAlert}>Alert after 5 s</button>
        </section>;
    }

}


const CounterContainer = withCounter(Counter);

export default CounterContainer;


// let state = {
//     counter: 0
// }

// function setState(newState) {
//     state = { ...state, ...newState }
// }


// this.setState({
//     counter: this.state.counter + 1
// })
// this.setState({
//     counter: this.state.counter + 1
// })
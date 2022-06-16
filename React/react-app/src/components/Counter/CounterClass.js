import React from 'react';

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            title: "CounterClass"
        }
        this.handleAdd = this.handleAdd.bind(this);
        this.handleSub = this.handleSub.bind(this);
        this.hanldeAlert = this.hanldeAlert.bind(this);
    }

    handleAdd() {
        this.setState({
            counter: this.state.counter + 1
        })
        this.setState({
            counter: this.state.counter + 1
        })
    }
    handleSub() {
        this.setState({
            counter: this.state.counter - 1
        })
    }

    hanldeAlert() {
        setTimeout(() => {
            alert(this.state.counter)
        }, 5000)
    }

    render() {
        console.log('render class compoennt')
        return <section>
            <header>{this.state.title}:{this.state.counter}</header>
            <button onClick={this.handleAdd} >+</button><button onClick={this.handleSub}>-</button>
            <button onClick={this.hanldeAlert}>Alert after 5 s</button>
        </section>;
    }

}

export default Counter;


let state = {
    counter: 0
}

function setState(newState) {
    state = { ...state, ...newState }
}


this.setState({
    counter: this.state.counter + 1
})
this.setState({
    counter: this.state.counter + 1
})
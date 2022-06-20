import React from 'react'

export const withCounter = (WrappedComponent, option = {
    initCounter: 0,
    incrementNum: 1,
    decrementNum: 1
}) => {
    return class NewComponent extends React.Component {
        state = {
            counter: option.initCounter,
        }
        handleAdd = () => {
            this.setState(preState => ({
                counter: preState.counter + option.incrementNum
            }))

        }
        handleSub = () => {
            this.setState(preState => ({
                counter: preState.counter - option.decrementNum
            }))
        }

        render() {
            return <WrappedComponent counter={this.state.counter} handleAdd={this.handleAdd} handleSub={this.handleSub}></WrappedComponent>
        }
    }
}
import React from 'react'

export const withCounter = (WrappedComponent, option = {
    initCounter: 20,
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

        handleSetOption = (opt) => {
            this.setState({
                counter: opt.initCounter
            })
            option.incrementNum = opt.incrementNum;
            option.decrementNum = opt.decrementNum;
        }

        render() {
            return <WrappedComponent {...this.props} counter={this.state.counter} handleAdd={this.handleAdd} handleSub={this.handleSub} handleSetOption={this.handleSetOption}></WrappedComponent>
        }
    }
}
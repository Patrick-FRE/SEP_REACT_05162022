import { store } from './MyRedux';
import React, { useEffect } from 'react';
import { useSelector, useDispatch, connect } from 'react-redux';


class MyReduxCounterClass extends React.Component {
    render() {
        return <section>
            <header>
                MyReduxCounterClass
            </header>
            Counter:{this.props.counter}
            <button onClick={() => {
                this.props.increment()
                console.log("after dispatch", store.getState())
            }} >+</button><button onClick={() => {
                this.props.dispatch({ type: 'counter/decremented' })
                console.log("after dispatch", store.getState())
            }} >-</button>
        </section>
    }
}
// currying | map Store State into WrappedCompnent props
function mapStateToProps(state) {
    const { value } = state
    return { counter: value }
}

// currying | map Store dispatch into WrappedCompnent props
const mapDispatchToProps = (dispatch) => {
    return {
        increment: () => dispatch({ type: 'counter/incremented' }),
        dispatch: dispatch
    }
}
export const MyReduxCounterClassContainer = connect(mapStateToProps, mapDispatchToProps)(MyReduxCounterClass)


export const MyReduxCounterNumberFn = () => {
    const count = useSelector((state) => state.value)
    return <span>{count}</span>
}

const MyReduxCounterFn = () => {
    const count = useSelector((state) => state.value)
    const dispatch = useDispatch()
    return <section>
        <header>
            MyReduxCounterFn
        </header>
        Counter:{count}
        <button onClick={() => {
            dispatch({ type: 'counter/incremented' })
            console.log("after dispatch", store.getState())
        }} >+</button><button onClick={() => {
            dispatch({ type: 'counter/decremented' })
            console.log("after dispatch", store.getState())
        }} >-</button>
    </section>
}

export default MyReduxCounterFn
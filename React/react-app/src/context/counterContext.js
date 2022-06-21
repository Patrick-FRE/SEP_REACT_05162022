import React, { useContext } from 'react';
import { useCounter } from '../hooks/useCounter'

export const CounterContext = React.createContext(null);

export const withCounterContext = (WrappedComponent) => {
    return class NewComponent extends React.Component {
        static contextType = CounterContext;
        render() {
            const [counter, handleAdd, handleSub, handleSetOption] = this.context;
            return <WrappedComponent {...this.props} counter={counter} handleAdd={handleAdd} handleSub={handleSub} handleSetOption={handleSetOption} />
        }
    }
}

export const useCounterContext = () => {
    return useContext(CounterContext);
}

export const CounterContextProvider = (props) => {
    const [
        counter,
        increment,
        decrement,
        setOption
    ] = useCounter()

    return <CounterContext.Provider value={[
        counter,
        increment,
        decrement,
        setOption
    ]}>
        {props.children}
    </CounterContext.Provider>
}
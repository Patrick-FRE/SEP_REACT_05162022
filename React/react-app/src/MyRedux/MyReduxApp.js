import { store } from './MyRedux';
import React, { useEffect } from 'react';
import { useForceUpdate } from '../hooks/useForceUpdate'

export const MyReduxCounterNumberFn = () => {
    const forceUpdate = useForceUpdate()
    useEffect(() => {
        store.subscribe(() => {
            console.log("subscribe")
            forceUpdate()
        })
    }, [])
    return <span>{store.getState().value}</span>
}



const MyReduxCounterFn = () => {
    const forceUpdate = useForceUpdate()
    useEffect(() => {
        store.subscribe(() => {
            console.log("subscribe")
            forceUpdate()
        })
    }, [])
    return <section>
        <header>
            MyReduxCounterFn
        </header>
        Counter:{store.getState().value}
        <button onClick={() => {
            store.dispatch({ type: 'counter/incremented' })
            console.log("after dispatch", store.getState())
        }} >+</button><button onClick={() => {
            store.dispatch({ type: 'counter/decremented' })
            console.log("after dispatch", store.getState())
        }} >-</button>
    </section>
}

export default MyReduxCounterFn
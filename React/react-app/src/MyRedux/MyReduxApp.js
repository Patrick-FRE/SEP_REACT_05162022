import { myStore } from './MyRedux';
import React, { useEffect } from 'react';
import { useForceUpdate } from '../hooks/useForceUpdate'
let store = myStore

export const MyReduxCounterNumberFn = () => {
    const forceUpdate = useForceUpdate()
    useEffect(() => {
        myStore.subscribe(() => {
            console.log("subscribe")
            forceUpdate()
        })
    }, [])
    return <span>{store.getState().value}</span>
}



const MyReduxCounterFn = () => {
    const [textObj, setText]
        = React.useState({ textValue: "this is my text" })

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

        <hr></hr>
        <div>
            {textObj.textValue}
            <button onClick={() => {
                console.log("textObj", textObj)
                textObj.textValue = "changedAgain"
                setText(textObj)
            }}>ChangeText</button>
        </div>
    </section>
}

export default MyReduxCounterFn
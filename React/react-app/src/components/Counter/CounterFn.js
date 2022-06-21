import React, { useEffect, useContext } from 'react';
import { useCounterContext } from '../../context/counterContext';
import { useCounter } from '../../hooks/useCounter'
//let counterRef;
const CounterFn = (props) => {
    console.log("render CounterFn")
    console.log(props)
    const [title, setTitle] = React.useState("CounterFn");
    const [isAlert, setIsAlert] = React.useState(false)
    const [
        counter,
        handleAdd,
        handleSub
    ] = useCounterContext()
    const counterRef = React.useRef(counter)

    counterRef.current = counter;

    console.log(counterRef);


    const hanldeAlert = () => {
        console.log("counter alert", counter)
        setTimeout(() => {
            alert(counterRef.current)
        }, 5000)
    }

    const hanldeAlertWayTwo = () => {
        setTimeout(() => {
            setIsAlert(true)
        }, 2000)
    }

    useEffect(() => {
        if (isAlert) {
            alert(counter)
            setIsAlert(false)
        }
    }, [isAlert])

    return <section>
        <header>{title}:{counter}</header>
        <button onClick={handleAdd} >+</button><button onClick={handleSub}>-</button>
        <button onClick={hanldeAlertWayTwo}>Alert after 5 s</button>
    </section>;
}

export default CounterFn;


// let fooCallTimes = 0;
// let state;
// function myuseState(initValue) {
//     fooCallTimes++;   // First Render 1 | second Render 2

//     console.log("foo has been called", fooCallTimes)

//     if (fooCallTimes === 1) {
//         state = initValue // state = 0;
//     }
//     const setState = (newState) => {
//         state = newState // state =1
//         // trigger render for React
//     }
//     return [state, setState]
// }

// myuseState();
// myuseState();
import React, { useEffect } from 'react';
//let counterRef;
const CounterFn = () => {
    console.log("render CounterFn")
    const [title, setTitle] = React.useState("CounterFn");
    const [counter, setCounter] = React.useState(0);
    const [isAlert, setIsAlert] = React.useState(false)
    const counterRef = React.useRef(counter)
    counterRef.current = counter;

    console.log(counterRef);
    const handleAdd = () => {
        setCounter(counter + 1)
    }
    const handleSub = () => {
        setCounter(counter - 1)
    }

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
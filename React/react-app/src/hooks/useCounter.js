import React from 'react'

export const useCounter = (initOption = {
    initCounter: 0,
    incrementNum: 1,
    decrementNum: 1
}) => {
    const [counter, setCounter] = React.useState(initOption.initCounter);
    const [option, setOption] = React.useState(initOption)

    const handleAdd = () => {
        setCounter(counter + option.incrementNum)
    }
    const handleSub = () => {
        setCounter(counter - option.decrementNum)
    }

    const handleSetOption = (newOption) => {
        setCounter(newOption.initCounter);
        setOption(newOption)
    }

    return [
        counter,
        handleAdd,
        handleSub,
        handleSetOption
    ]
}
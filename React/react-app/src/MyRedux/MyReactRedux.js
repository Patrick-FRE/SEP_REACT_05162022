import React, { useContext, useEffect } from 'react';


export const useForceUpdate = () => {
    const [_, forceUpdate] = React.useState(false);
    return () => { forceUpdate(pre => !pre) }
}
const MyReactReduxContext = React.createContext(null);

export const useMySelector = (selectorFn) => {
    const { getState } = useContext(MyReactReduxContext)
    return selectorFn(getState())
}
export const useMyDispatch = () => {
    const { dispatch } = useContext(MyReactReduxContext)
    return dispatch
}

export const MyProvider = ({ children, store }) => {
    const forceUpdate = useForceUpdate()
    console.log("Update")
    useEffect(() => {
        store.subscribe(() => {
            forceUpdate()
        })
    }, [])
    return <MyReactReduxContext.Provider value={{ ...store }}>
        {children}
    </MyReactReduxContext.Provider>
}


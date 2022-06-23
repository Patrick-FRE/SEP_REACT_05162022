import React, { useContext, useEffect } from 'react';

export function myconnect(mapStateToProps, mapDispatchToProps) {
    return function (WrappedComponent) {
        return class NewComponent extends React.Component {
            static contextType = MyReactReduxContext
            render() {
                const { getState, dispatch } = this.context;
                const mapStateProps = mapStateToProps(getState())
                const mapDispatchProps = mapDispatchToProps(dispatch)
                return <WrappedComponent {...this.props} {...mapStateProps} {...mapDispatchProps} />
            }
        }
    }
}



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
        const unsub = store.subscribe(() => {
            forceUpdate()
        })
        return () => {
            unsub()
        }
    }, [])
    return <MyReactReduxContext.Provider value={{ ...store }}>
        {children}
    </MyReactReduxContext.Provider>
}


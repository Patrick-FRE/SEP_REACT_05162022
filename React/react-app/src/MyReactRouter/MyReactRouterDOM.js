
import React from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';

export const useForceUpdate = () => {
    const [_, forceUpdate] = React.useState(false);
    return () => { forceUpdate(pre => !pre) }
}

const ReactRouterContext = React.createContext(null);



const match = (path, exac) => {
    console.log(window.location.pathname, path)
    if (exac) {
        return path === window.location.pathname
    }
    /// TODO
    return window.location.pathname.includes(path)
}


export const MyRoute = ({ exact, path, children }) => {
    // console.log("exact", exact)
    // console.log("path", path)
    // console.log("children", children)
    // console.log("history", window.history)
    // console.log("location", window.location)
    // if path eact math URL path return children
    const { match } = useRouter()

    if (match(path, exact)) {
        return children;
    }
    // else return null
    return null;
}

export const MyLink = ({ to, children }) => {
    const { navigate } = useRouter()
    // if you click MyLink, url path should change to TO props
    const hanldeClick = (e) => {
        e.preventDefault()
        navigate(to)
    }
    return <a href={to} onClick={hanldeClick}> {children}</a>
}

export const useRouter = () => {
    return useContext(ReactRouterContext)
}

export const useHistory = () => {
    const { navigate } = useRouter()

    return {
        push: navigate
    }
}

export const MyBrowserRouter = ({ children }) => {
    const updateRoute = useForceUpdate()

    const navigate = (to) => {
        window.history.pushState({}, "", to)
        updateRoute()
    }

    useEffect(() => {
        const update = () => {
            updateRoute()
        }
        // add listener to the url changes and trigger updateRoute
        window.addEventListener('popstate', update);
        return () => {
            window.removeEventListener(
                "popstate",
                update
            )
        }
    }, [])

    return <ReactRouterContext.Provider value={{ navigate, match }}>
        {children}
    </ReactRouterContext.Provider>
}
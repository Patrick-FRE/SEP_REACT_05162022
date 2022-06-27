


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
    if (match(path, exact)) {
        return children;
    }
    // else return null
    return null;
}

export const MyLink = ({ to, children }) => {
    // if you click MyLink, url path should change to TO props

    return <a> MyLink</a>
}
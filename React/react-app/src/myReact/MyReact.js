class MyReact {
    constructor(props) {
        this.props = props;
    }

    setState(partialState) {
        this.state = {
            ...this.state,
            ...partialState
        }
        const curReactElement = this.render();
        const domElement = this.parentDomElement;
        console.log("preVDOM", this.preVDOM)
        console.log("NextVDOM", curReactElement)
        update(curReactElement, domElement, true)
        // update UI
    }

}



const update = (
    reactElement,
    domElement,
    isRoot
) => {
    let curDom;
    // console.log("TEST", reactElement)
    if (reactElement === undefined) {
        return;
    }
    if (typeof reactElement === 'string' | typeof reactElement === 'number') {
        curDom =
            document.createTextNode(reactElement);
    } else {
        const { type, props } = reactElement;
        /// if type is ClassCompoennt
        if (type.prototype instanceof MyReact) {
            // console.log('class componnent props', props)
            /// Updating (TODS, Current is wrong)
            //  React is comparing the preVDOM to nextVDOM using diffing Algrithem 
            //  using Filter Scheduler to find the best way to update the RealDOM
            const curInstance = new type(props);
            // console.log("curInstance", curInstance)

            // getDerivedStateFromProps
            curInstance.state = type.getDerivedStateFromProps(props, curInstance.state)
            // console.log("curInstance", curInstance)

            // render
            const curReactElement = curInstance.render();

            // console.log("curReactElement", curReactElement);
            update(curReactElement, domElement, isRoot);
            if (curInstance.componentDidmount) {
                curInstance.componentDidmount()
            }
            return
        }

        // Assignment if it is function component
        if (typeof type === 'function') {
            const curReactElement = type(props);
            // console.log("function compoennts TEST", curReactElement)
            update(curReactElement, domElement);
            return
        }
        /// else 
        curDom = document.createElement(type);
        Object.entries(props).forEach(
            ([key, value]) => {
                if (key === 'children') {
                    if (Array.isArray(value)) {
                        // console.log(value);
                        value.forEach((rElement) => {
                            update(rElement, curDom);
                        });
                    } else {
                        update(value, curDom);
                    }
                } else if (key.startsWith('on')) {
                    curDom.addEventListener(
                        getEventActionFromProps(key),
                        value
                    );
                } else {
                    curDom[key] = value;
                }
            }
        );
    }
    if (isRoot) {
        domElement.replaceChild(curDom, domElement.childNodes[0]);
    } else {
        domElement.appendChild(curDom);
    }
};


//utils

function getEventActionFromProps(propsKey) {
    return propsKey.slice(2).toLowerCase();
}




const MyReactExport = {
    Component: MyReact
}
export default MyReactExport;
import React from 'react';

const render = (
    reactElement,
    domElement
) => {
    let curDom;
    console.log("TEST", reactElement)
    if (reactElement === undefined) {
        return;
    }
    if (typeof reactElement === 'string' | typeof reactElement === 'number') {
        curDom =
            document.createTextNode(reactElement);
    } else {
        const { type, props } = reactElement;
        /// if type is ClassCompoennt
        if (type.prototype instanceof React.Component) {
            console.log('class componnent props', props)
            /// Mounting
            /// constructor
            const curInstance = new type(props);
            console.log("curInstance", curInstance)

            // getDerivedStateFromProps
            curInstance.state = type.getDerivedStateFromProps(props, curInstance.state)
            console.log("curInstance", curInstance)

            // render
            const curReactElement = curInstance.render();
            console.log("curReactElement", curReactElement);
            render(curReactElement, domElement);
            if (curInstance.componentDidmount) {
                curInstance.componentDidmount()
            }
            return
        }

        // Assignment if it is function component

        /// else 
        curDom = document.createElement(type);
        Object.entries(props).forEach(
            ([key, value]) => {
                if (key === 'children') {
                    if (Array.isArray(value)) {
                        console.log(value);
                        value.forEach((rElement) => {
                            render(rElement, curDom);
                        });
                    } else {
                        render(value, curDom);
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

    domElement.appendChild(curDom);
};


//utils

function getEventActionFromProps(propsKey) {
    return propsKey.slice(2).toLowerCase();
}

const MyReactDOM = {
    render: render
}


export default MyReactDOM
import React from 'react';


export const useForceUpdate = () => {
    const [_, forceUpdate] = React.useState(false);
    return () => { forceUpdate(pre => !pre) }
}
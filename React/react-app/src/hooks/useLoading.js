
import React from 'react';

export const useLoading = (initOption = {
    initIsLoading: false
}) => {
    const [isLoading, setIsLoading] = React.useState(initOption.initIsLoading);

    const startLoading = () => {
        setIsLoading(true)
    }

    const endLoading = () => {
        setIsLoading(false)
    }

    const showLoading = (loadingType) => {
        switch (loadingType) {
            case 'normal':
                return <h1>loading...</h1>;
            case 'spinner':
                return <h1>spinner...</h1>;
            default:
                return <h1>loading...</h1>;
        }
    }

    return [isLoading, startLoading, endLoading, showLoading]

}
import React from 'react'

export const withLoading = (WrappedComponent, option = {
    initIsLoading: false
}) => {
    return class NewComponent extends React.Component {
        state = {
            isLoading: option.initIsLoading
        }

        startLoading = () => {
            this.setState({ isLoading: true })
        }

        endLoading = () => {
            this.setState({ isLoading: false })
        }

        showLoading = (loadingType) => {
            switch (loadingType) {
                case 'normal':
                    return <h1>loading...</h1>;
                case 'spinner':
                    return <h1>spinner...</h1>;
                default:
                    return <h1>loading...</h1>;
            }
        }

        render() {

            return <WrappedComponent {...this.props} isLoading={this.state.isLoading} startLoading={this.startLoading} endLoading={this.endLoading} showLoading={this.showLoading}></WrappedComponent>
        }
    }
}
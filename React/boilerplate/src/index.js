import React from 'react';
import ReactDOM from 'react-dom'
import Button from './components/Button/Button'
class HelloMessage extends React.Component {
    render() {
        return (
            <div>
                Hello {this.props.name}
                <Button></Button>
            </div>
        );
    }
}

ReactDOM.render(
    <HelloMessage name="Sam" />,
    document.getElementById('root')
);
import React, { Component } from 'react';

class Container extends Component {
    render() {
        const containerStyle = {
            margin: "0 2%"
        };
        return (<div style={ containerStyle } id="Container">
            { this.props.children }
        </div>);
    }
}
export default Container;

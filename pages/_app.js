import React, { Component } from 'react';

class App extends Component {
    render() {
        const { Component, pageProps } = this.props
        return (
            <div>
                <Component { ...pageProps } />
            </div>
        );
    }
}

export default App;
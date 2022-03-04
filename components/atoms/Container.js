import React, { Component } from 'react';

class Container extends Component {
    render() {
        return (
            <div id="Container">
                <style jsx>
                    { `
                    @media only screen and (max-width:1024px) {
                        #Container {
                            margin: 0 2%;
                        }
                    }
                    @media only screen and (min-width:1024px) {
                        #Container {
                            max-width: 1024px;
                            margin: 0 auto;
                        }
                    }
                    `}
                </style>
                { this.props.children }
            </div>);
    }
}
export default Container;

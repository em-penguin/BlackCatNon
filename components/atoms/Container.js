import React, { Component } from 'react';

class Container extends Component {
    render() {
        return (
            <div className="Container">
                <style jsx>
                    { `
                    @media screen and (max-width:799px) {
                        .Container {
                          padding: 0 2%;
                          text-align: center;
                        }
                    }
                    @media only screen and (max-width:1023px) {
                        .Container {
                          max-width: 635px;
                          margin : 0 auto;
                        }
                    }
                    @media only screen and (min-width:1024px) {
                        .Container {
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

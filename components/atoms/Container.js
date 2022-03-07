import React, { Component } from 'react';

class Container extends Component {
    render() {
        return (
            <div class="container">
                <style jsx>
                    { `
                    .container:nth-child(odd) {
                        background: #f5f5f5;
                    }
                    @media only screen and (max-width:1023px) {
                        .container_child{
                            padding: 0 2%;
                        }
                    }
                    @media only screen and (min-width:1024px) {
                        .container_child{
                            max-width: 1024px;
                            margin: 0 auto;
                        }
                    }
                    `}
                </style>
                <div class="container_child">
                    { this.props.children }
                </div>
            </div>);
    }
}
export default Container;

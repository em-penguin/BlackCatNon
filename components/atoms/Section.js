import React, { Component } from 'react';
import Link from '../atoms/Link';

class Section extends Component {
    render() {
        const center = {
            textAlign: "center"
        };
        const more = {
            textAlign: "center",
            padding: "1%",
            width: "30%",
            minWidth: "150px",
            margin: "0 auto",
            border: "1px solid"
        }
        return (
            <section style={ center }>
                <style jsx>
                    { `
                    @media only screen and (max-width:1024px) {
                        section {
                            margin: 0 2%;
                        }
                    }
                    @media only screen and (min-width:1024px) {
                        section {
                            max-width: 1024px;
                            margin: 0 auto;
                        }
                    }
                    `}
                </style>
                <h2>{ this.props.title }</h2>
                { this.props.children }
                <Link link={ this.props.link } onClick="">
                    <div variant="outlined" style={ more }>
                        { this.props.more }
                    </div>
                </Link>
            </section>
        );
    }
}
export default Section;

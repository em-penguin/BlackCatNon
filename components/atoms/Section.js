import React, { Component } from 'react';
import Link from '../atoms/Link';

class Section extends Component {
    render() {
        const center = {
            textAlign: "center"
        };
        const more = {
            textAlign: "center",
            padding: "0.4em",
            width: "30%",
            minWidth: "150px",
            margin: "0 auto",
            border: "1px solid"
        }
        return (
            <section style={ center }>
                <h2>{ this.props.title }</h2>
                { this.props.children }
                <Link link={ this.props.link } onClick="">
                    <div style={ more }>
                        { this.props.more }
                    </div>
                </Link>
            </section>
        );
    }
}
export default Section;

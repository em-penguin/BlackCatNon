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
            <div>
                <h2 style={ center }>{ this.props.title }</h2>
                { this.props.children }
                <Link link={ this.props.link } onClick="">
                    <div variant="outlined" style={ more }>
                        { this.props.more }
                    </div>
                </Link>
            </div>
        );
    }
}
export default Section;

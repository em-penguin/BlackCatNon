import React, { Component } from 'react';
import Link from '../components/Link';

class Section extends Component {

    render() {
        return (<div>
            <h2>{ this.props.title }</h2>
            { this.props.children }
            <Link link={ this.props.link } onClick="">
                <div variant="outlined">{ this.props.more }</div>
            </Link>
        </div>);
    }
}
export default Section;

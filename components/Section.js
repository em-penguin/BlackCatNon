import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';

class Section extends Component {

    render() {
        return (<div>
            <h2>{ this.props.title }</h2>
            { this.props.children }
            <Link href={ this.props.link } onClick="">
                <Button variant="outlined">{ this.props.more }</Button>
            </Link>
        </div>);
    }
}
export default Section;

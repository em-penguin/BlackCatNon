import React, { Component } from 'react';

class Section extends Component {
    render() {
        const section = {
            textAlign: "center"
        };
        const more = {
            textAlign: "center",
            padding: "0.4em",
            width: "30%",
            minWidth: "150px",
            margin: "0 auto",
            marginTop: "1em",
            border: "1px solid"
        };
        return (
            <section style={ section }>
                <h2>{ this.props.title }</h2>
                { this.props.children }
                <a href={ this.props.link } onClick="">
                    <div style={ more }>
                        <p>
                            { this.props.more }
                        </p>
                    </div>
                </a>
            </section>
        );
    }
}
export default Section;

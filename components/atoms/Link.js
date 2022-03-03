import React, { Component } from 'react';

function Link(props) {
    return (
        <a href={ props.link }>
            { props.children }
        </a>
    )
}
export default Link; 
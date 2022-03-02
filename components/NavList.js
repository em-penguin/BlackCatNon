import React, { Component } from 'react';
import Link from '../components/Link';

function NavList(props) {
    return (
        <div>
            <Link link="/about" title="about" />
            <Link link="/search" title="search" />
            <Link link="/book" title="book" />
            <Link link="/favorite" title="favorite" />
        </div>
    );
}
export default NavList;
import React, { Component } from 'react';
import Link from '../atoms/Link';
import NavList from '../block/NavList';

export default function Footer() {
    const FooterStyle = {
        background: "#333"

    }
    const NavStyle = {
        display: "flex"
    }
    return (
        <footer>
            <div style={ FooterStyle }>
                <div class="logo">
                    <Link link="/">
                        黒猫ノンちゃん
                    </Link>
                </div>
                <NavList style={ NavStyle } />
            </div>
        </footer>
    );
}
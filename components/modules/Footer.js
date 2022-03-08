import React, { Component } from 'react';
import NavList from '../block/NavList';
import Logo from '../atoms/Logo.js';

export default function Footer() {
    return (
        <footer>
            <style jsx>{
                `
                footer{
                    background: #FFF;
                    text-align: center;
                    padding-top: 30px;
                    padding-bottom: 50px;
                }
                `
            }</style>
            <Logo />
            <NavList />
        </footer>
    );
}
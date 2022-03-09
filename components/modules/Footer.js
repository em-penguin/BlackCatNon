import React, { Component } from 'react';
import NavList from '../block/NavList';
import Logo from '../atoms/Logo.js';
import Container from '../atoms/Container.js';

export default function Footer() {
    return (
        <footer>
            <style jsx>{
                `
                footer{
                    background: #fff;
                    text-align: center;
                    padding-top: 30px;
                    padding-bottom: 50px;
                }
                `
            }</style>
            <Container>
                <Logo />
                <NavList />
            </Container>
        </footer>
    );
}
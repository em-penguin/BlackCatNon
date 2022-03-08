import React from 'react';
import Logo from '../atoms/Logo.js';

export default function BackToTop() {
    return (
        <React.Fragment>
            <style jsx>{
                `
                header{
                    margin:10px 0;
                }
                `
            }</style>
            <header>
                <Logo />
            </header>
        </React.Fragment>
    );
}

import React, { Component } from 'react';

function NavList() {
    return (
        <div className='NavList'>
            <style jsx>{
                `
                .NavList{
                    display:flex;
                    justify-content: space-between;
                    align-items: center;
                }
                `
            }</style>
            <a href="/about">ABOUT</a>
            <a href="/blog">BLOG</a>
            <a href="/https://moti-meron.booth.pm/">ONLINE SHOP</a>
            <a href="/contact">CONTACT</a>
        </div>
    );
}
export default NavList;
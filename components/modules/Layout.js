import React, { Component } from 'react';
import Head from 'next/head'
import Navbar from '../modules/Navbar';
import Footer from '../block/Footer';
import style from '../../static/Style';

class Layout extends Component {
    render() {
        return (<div>
            <Head>
                <title>{ this.props.title }</title>
                <meta charSet='utf-8' />
                <meta name='viewport'
                    content='initial-scale=1.0, width=device-width' />
                <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
                <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Righteous&display=swap" rel="stylesheet" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Lato:wght@700&display=swap" rel="stylesheet" />
            </Head>
            { style }
            <Navbar>
                { this.props.children }
            </Navbar>
            <Footer footer="copyright" />
        </div>);
    }
}
export default Layout;

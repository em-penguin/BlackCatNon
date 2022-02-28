import React, { Component } from 'react';
import Link from 'next/link';
import Grid from '@material-ui/core/Grid';

function NavFooterPart(props) {
    const style = {
        padding: "10px",
        fontWeight: 700,
        color: "#FFF",
    }
    return (
        <Link href={ props.link } style={ style }>
            { props.title }
        </Link>
    )
}
class Footer extends Component {
    render() {
        const footerStyle = {
            width: "100%",
            display: "flex",
            flexWrap: "wrap",
            boxSizing: "border-box",
            background: "#006d77ff",
            textAlign: "center",
            padding: "20px 10px",
            marginTop: "20px",
        }
        const logoBottom = {
            fontFamily: "Righteous, cursive",
            fontSize: "16px",
            marginBottom: "20px",
        }
        const NavFooterParts = {
            display: "flex",
            justifyContent: "space-between",
            width: "80%",
            padding: "0 10%",
        }
        return (<footer>
            <Grid container spacing={ 0 } style={ footerStyle }>
                <Grid item xs={ 12 } style={ logoBottom }>
                    <div class="logo">
                        <Link href="/">
                            黒猫ノンちゃん
                        </Link>
                    </div>
                </Grid>
                <Grid item xs={ 12 } >
                    <div style={ NavFooterParts }>
                        <NavFooterPart link="/about" title="about" />
                        <NavFooterPart link="/search" title="search" />
                        <NavFooterPart link="/book" title="book" />
                        <NavFooterPart link="/favorite" title="favorite" />
                    </div>
                    <div>{ this.props.footer }</div>
                </Grid>
            </Grid>
        </footer>);
    }
}
export default Footer;
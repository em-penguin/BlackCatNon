import React, { Component } from 'react';
import Link from 'next/link';
import Grid from '@material-ui/core/Grid';

class Header extends Component {
    render() {
        const head = {
            backgroundColor: '#006d77ff',
            padding: "15px",
        }
        const logoTop = {
            display: "flex",
            alignItems: "unset",
            justifyContent: "start",
            fontFamily: "Righteous, cursive",
            fontSize: "20px",
        }
        const headContents = {
            display: "flex",
            justifyContent: "flex-end",
            fontSize: "12px",
            fontWeight: 700,
        }
        return (<header style={ head }>
            <Grid container spacing={ 0 }>
                <Grid item xs={ 8 } style={ logoTop }>
                    <div class="logo">
                        <Link href="/" class="logo">
                            黒猫ノンちゃん
                        </Link>
                    </div>
                </Grid>
                <Grid item xs={ 4 } style={ headContents }>
                    { this.props.header }
                </Grid>
            </Grid>
        </header>);
    }
}
export default Header;
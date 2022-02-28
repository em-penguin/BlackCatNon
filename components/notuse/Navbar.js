import React from 'react'
import Link from 'next/link';
import Grid from '@material-ui/core/Grid';
import AssistantPhotoIcon from '@material-ui/icons/AssistantPhoto';
import StoreIcon from '@material-ui/icons/Store';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import WbIncandescentIcon from '@material-ui/icons/WbIncandescent';

function NavPart(props) {
    const style = {
        verticalAlign: "middle",
        padding: "0",
        textAlign: "center",
    }
    return (
        <Grid item xs={ 3 }>
            <Link href={ props.link }>
                <div style={ style }>
                    { props.icon }
                    <div>
                        { props.title }
                    </div>
                </div>
            </Link>
        </Grid>
    )
}

class Navbar extends React.Component {
    render() {
        const NavContainer = {
            padding: "10px",
            paddingBottom: "5px",
            backgroundColor: "#83c5beff",
            marginTop: "-5px",
            fontFamily: 'Lato, sans-serif',
        }
        return (
            <div style={ NavContainer }>
                <Grid container spacing={ 0 }>
                    <NavPart link="/about" title="about" icon={ <HelpOutlineIcon fontSize="small" /> } />
                    <NavPart link="/search" title="search" icon={ <AssistantPhotoIcon fontSize="small" /> } />
                    <NavPart link="/book" title="book" icon={ <StoreIcon fontSize="small" /> } />
                    <NavPart link="/favorite" title="favorite" icon={ <WbIncandescentIcon fontSize="small" /> } />
                </Grid>
            </div>
        )
    }
}

export default Navbar;
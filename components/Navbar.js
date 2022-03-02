import React from 'react';
import PropTypes from 'prop-types';

function ScrollTop(props) {
    const { children, window } = props;
    const classes = useStyles();
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
        disableHysteresis: true,
        threshold: 100,
    });

    const handleClick = (event) => {
        const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');

        if (anchor) {
            anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    };

    return (
        <div in={ trigger }>
            <div onClick={ handleClick } role="presentation" className={ classes.root }>
                { children }
            </div>
        </div>
    );
}

ScrollTop.propTypes = {
    children: PropTypes.element.isRequired,
    window: PropTypes.func,
};

export default function BackToTop(props) {
    return (
        <React.Fragment>
            <h3 >黒猫ノンちゃん</h3>
            <div id="back-to-top-anchor" />
            { props.children }
            <div { ...props }>
                top
            </div>
        </React.Fragment>
    );
}

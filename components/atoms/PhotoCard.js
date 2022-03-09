import React from 'react';

function PhotoCard(props) {
    const aStyle = {
        position: 'relative',
        display: 'block'
    }
    const pStyle = {
        position: "absolute",
        top: "50%",
        display: "none"
    }
    let _img = {
        backgroundImage: 'url(' + props.img + ')',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        paddingTop: '100%'
    }
    return (
        <div className="PhotoCard">
            <a href={ props.link } style={ aStyle }>
                <div style={ _img }></div>
                <p style={ pStyle }>
                    { props.note }
                </p>
            </a>
        </div>
    );
};
export default PhotoCard; 
import React from 'react';

function InfoCard(props) {
    const infoCardStyle = {
        margin: '1%',
        width: '48%',
        maxWidth: '300px'
    }
    const pStyle = {
        padding: '4%',
        textAlign: 'initial'
    }
    let _img = {
        backgroundImage: 'url(' + props.img + ')',
        backgroundSize: 'cover',
        height: '100px',
        backgroundPosition: 'center center'
    }
    return (
        <div style={ infoCardStyle }>
            <a href={ props.link }>
                <div style={ _img }></div>
                <div style={ pStyle }>
                    <h3>
                        { props.title }
                    </h3>
                    <p>
                        { props.note }
                    </p>
                </div>
            </a>
        </div>
    );
};
export default InfoCard; 
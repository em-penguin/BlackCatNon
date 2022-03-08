import React from 'react';

function InfoCard(props) {
    const fontStyle = {
        padding: '0.6em',
        textAlign: 'initial'
    }
    const pStyle = {
        marginTop: '0.4em'
    }
    let _img = {
        backgroundImage: 'url(' + props.img + ')',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        paddingTop: '56.25%'
    }
    return (
        <div class="InfoCard_class">
            <a href={ props.link }>
                <div style={ _img }></div>
                <div style={ fontStyle }>
                    <h3>
                        { props.title }
                    </h3>
                    <p style={ pStyle }>
                        { props.note }
                    </p>
                </div>
            </a>
        </div>
    );
};
export default InfoCard; 
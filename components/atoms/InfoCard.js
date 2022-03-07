import React from 'react';

function InfoCard(props) {
    const pStyle = {
        padding: '4%',
        textAlign: 'initial'
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
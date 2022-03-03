import React from 'react';
const infoCardStyle = {
    padding: "1%"
}
const imgStyle = {
    width: "100%"
}
const pStyle = {
    padding: "1%"
}
function InfoCard(props) {
    return (
        <div style={ infoCardStyle }>
            <a href={ props.link }>
                <img src={ props.img } style={ imgStyle } />
                <div style={ pStyle }>
                    <h4>
                        { props.title }
                    </h4>
                    <p>
                        { props.note }
                    </p>
                </div>
            </a>
        </div>
    );
};
export default InfoCard; 
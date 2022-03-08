import React from 'react';

export default function Logo() {
    return (
        <React.Fragment>
            <style jsx>{
                `
                div a{
                    display:flex;
                    justify-content: center;
                    align-items: center;
                }
                div a img{
                    width: 3em;
                    margin-right: 1em;
                }
                `
            }</style>
            <div>
                <a href='/'>
                    <img src='../../static/img/icon.png'></img>
                    <h1>黒猫ノンちゃん</h1>
                </a>
            </div>
        </React.Fragment>
    );
}

import css from 'styled-jsx/css';

export default <style jsx>{ `
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400&display=swap');

:root {
  --font-family: 'Raleway', sans-serif;
  --background-gray: #f5f5f5;
  --color-a: #444;
}

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, font, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td{
	margin: 0;
	padding: 0;
	border: 0;
	outline: 0;
	font-size: 100%;
	vertical-align: baseline;
	background: transparent;
}
body{
	line-height:1;
}
ol, ul{
	list-style:none;
}
blockquote, q{
	quotes:none;
}
blockquote:before, blockquote:after, q:before, q:after{
	content:'';
	content:none;
}
:focus{
	outline:0;
}
ins{
	text-decoration:none;
}
del{
	text-decoration:line-through;
}
table{
	border-collapse:collapse;
	border-spacing:0;
}
tr {
    margin:0px;
}
th {
  font-size:14pt;
  font-weight:plain;
  text-align:left;
  padding:0px 20px;
  margin:0px;
}
td {
  font-size:14pt;
  font-weight:plain;
  text-align:left;
  padding:0px 20px;
  margin:0px;
}
.label {
  font-size:14pt;
  margin:20px 5px;
}
.login {
  text-align:right;
}
.account {
  cursor:pointer;
  font-size:12pt;
  padding:5px 10px;
  color:gray;
  border:2px solid lightgray;
}
fieldset {
  margin:0px 0px 30px 0px;
}
input {
  border: 0px solid white;
  border-bottom:1px solid gray;
  font-size:14pt;
}
button {
  font-size:14pt;
  padding: 0px 20px;
}
li {
  font-size:14pt;
  cursor:pointer;
}
a {
  text-decoration: none;
  color:var(--color-a);
}
a:hover {  
  color:red;
}
.logo a{
  color: #FFF;
}
h1, h2, h3, h4, h5, h6{
  font-family: var(--font-family);
}
h1{
  font-size: 1.5em;
}
h2{
  font-size: 2em;
  margin-bottom: 0.6em;
}
h3{
  font-size:1em;
}
p{
  font-size:0.8em;
}
.slider div {
  height: 200px;
}
.slider img {
  width: 100%;
}
.InfoCard_class{
  background: #FFF;
}
@media screen and (max-width:799px) {
  section {
    padding: 1.8em 2%;
  }
  .InfoCard_class{
    margin: 1%;
    width: 48%;
  }
}
@media screen and (min-width:650px) {
  section{
    padding: 2em 0;
  }
  section>div {
    max-width: 635px;
    margin : 0 auto;
  }
  .InfoCard_class{
    margin: 5px 0;
    max-width:  205px;
  }
}
@media screen and (min-width:1024px) {
  section{
    padding: 2em 0;
  }
  section>div {
    max-width: 1020px;
    margin : 0 auto;
  }
  .InfoCard_class{
    margin: 5px 0;
    max-width: 330px;
  }
}
section:nth-child(odd){
  background: var(--background-gray);
}
#index #blog{
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
}

`}</style>

// /* CSS HEX */
// --ming 深い緑: #006d77ff;
// --middle - blue - green　浅い緑: #83c5beff;
// --alice - blue: 白に近い青　#edf6f9ff;
// --unbleached - silk:薄いピンク　 #ffddd2ff;
// --dark - salmon:　濃いピンク #e29578ff;


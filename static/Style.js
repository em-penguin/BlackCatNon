import css from 'styled-jsx/css';

export default <style>{ `
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
}
.logo a{
  color: #FFF;
}
.slider div {
  height: 200px;
}
.slider img {
  width: 100%;
}
#index #blog{
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap
}
#index section{
  padding: 0 2%;
}
#index section:nth-child(odd){
  background: #f5f5f5;
}
`}</style>

// /* CSS HEX */
// --ming 深い緑: #006d77ff;
// --middle - blue - green　浅い緑: #83c5beff;
// --alice - blue: 白に近い青　#edf6f9ff;
// --unbleached - silk:薄いピンク　 #ffddd2ff;
// --dark - salmon:　濃いピンク #e29578ff;


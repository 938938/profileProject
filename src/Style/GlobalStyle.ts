import { createGlobalStyle } from 'styled-components';
import { CustomGray, CustomNavy } from './Color';

// rest 라이브러리 import해도 됨!

// reset.css
const GlobalStyle = createGlobalStyle`
* {
	margin: 0;
	padding: 0;
	border: 0;
	box-sizing: border-box;
	font: inherit;
	vertical-align: baseline;
	text-decoration:none;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
button,input,textarea{
	font-family: 'Noto Sans KR', sans-serif;
}
button{ 
	cursor: pointer;
	background-color:transparent;
	border:0;
	width: 100px;
  height: 40px;
  border: 1px solid ${CustomGray};
  background-color: ${CustomGray};
  border-radius: 10px;
  transition: all 0.3s;
  &:hover {
    background-color: ${CustomNavy};
    color: ${CustomGray};
  }
}
u {
    text-decoration: underline;
}
strong {
    font-weight: bold;
}
em {
    font-style: italic;
}
p{
	word-break: break-all;
}
`;

export default GlobalStyle;

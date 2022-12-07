import { createGlobalStyle } from "styled-components";




const GlobalStyle = createGlobalStyle`

*,*::before, *::after, h1, h2, h3, h4, h5, h6 {
    margin: 0;
    padding: 0;
} 
h1, h2, h3, h4, h5, h6 {
    display: inline-block;
}
a,
a:link,
a:visited {
  text-decoration:none;+
  color: inherit;
  cursor: pointer;
}
body{
    margin: 0;
    padding: 0;
    overflow-x: hidden; 
    font-family: 'Montserrat', sans-serif;
}
`

export default GlobalStyle;


import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`

* {
  box-sizing: border-box;
  font-family: 'Roboto';
}

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  pointer-events:${props => (props['data-isPopupOpened'] ? 'none' : 'auto')};

   
}



`

export default GlobalStyle

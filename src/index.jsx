import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'

import theme from './styles/theme'
import GlobalStyles from './styles/global'
import Navigation from './routes'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Navigation />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux';

import theme from './styles/theme'
import GlobalStyles from './styles/global'
import Navigation from './routes'

import store from './store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Navigation />
    </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

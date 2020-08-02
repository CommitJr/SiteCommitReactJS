import { createMuiTheme, MuiThemeProvider, CssBaseline } from '@material-ui/core'

import React from 'react'
import './App.css'
import MainPage from './pages/Main.page'
import {titleFont} from './utils/fontUtils'

export const generalTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#3B5095'
    },
    secondary: {
      main: '#F5F5F5'
    },
    yellow: {
      main: '#E8C344'
    },
    iceWhite: {
      main: '#F5F5F5'
    },
    darkgray: {
      main: '#343434'
    },
    lightGray: {
      main: '#959595'
    }
  },
  typography: {
    fontFamily: 'Poppins',
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [titleFont],
      },
    },
  },
})

function App() {
  return (
    <>
      <MuiThemeProvider theme={generalTheme}>
      <CssBaseline/>
        <MainPage />
      </MuiThemeProvider>
    </>
  );
}

export default App;

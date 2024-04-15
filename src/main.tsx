import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import "./styles/base.scss"
import { ThemeProvider } from 'styled-components'
import { theme } from './theme/theme.ts'
import { GlobalStyles } from './theme/globalStyles.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <GlobalStyles/>
    <App />
    </ThemeProvider>
  </React.StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'


const theme = createTheme({
  palette :{
    primary : {
      main:"#626bf7",
    }
  },
  typography:{
    fontFamily:"DM Sans",
    button:{
      textTransform:"none",
      fontWeight:"normal"
    }
  }
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <App />
      </CssBaseline>
    </ThemeProvider>
  </StrictMode>,
)

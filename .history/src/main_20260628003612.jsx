import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// Mantine UI
import { createTheme, MantineProvider } from '@mantine/core';

// Contexts
import { ThemeProvider } from './js/contexts/Theme'
// Browser Routes
import { BrowserRouter } from 'react-router-dom'
const theme = createTheme({
  /** Put your mantine theme override here */
});
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
)

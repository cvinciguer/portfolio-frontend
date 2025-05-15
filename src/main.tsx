import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/global.css'
import './styles/variables.css'
import './styles/animations.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router'
import { LanguageProvider } from './utils/i18n'

const website_adress = import.meta.env.PROD ? "/portfolio-frontend" : "/";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LanguageProvider>
      <BrowserRouter basename={website_adress}>
        <App />
      </BrowserRouter>
    </LanguageProvider>
  </StrictMode>
)
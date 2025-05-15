import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/global.css'
import './styles/variables.css'
import './styles/animations.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router'
import { LanguageProvider } from './utils/i18n'

// Utilise uniquement la variable d'environnement
const website_adress = import.meta.env.VITE_WEBSITE_ADRESS

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LanguageProvider>
      <BrowserRouter basename={website_adress}>
        <App />
      </BrowserRouter>
    </LanguageProvider>
  </StrictMode>
)
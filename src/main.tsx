import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './pages/index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router'
import { website_adress } from './data/data.tsx'
import { LanguageProvider } from './utils/i18n'; // à créer

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LanguageProvider>
      <BrowserRouter basename={website_adress}>
        <App />
      </BrowserRouter>
    </LanguageProvider>
  </StrictMode>
)

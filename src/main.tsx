import { StrictMode } from 'react'
import { preload } from 'react-dom'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import geistLatin400 from '@fontsource/geist/files/geist-latin-400-normal.woff2?url'
import geistLatin500 from '@fontsource/geist/files/geist-latin-500-normal.woff2?url'
import '@fontsource/geist/latin-400.css'
import '@fontsource/geist/latin-500.css'
import App from './App'
import './styles/globals.css'

preload(geistLatin400, { as: 'font', type: 'font/woff2', crossOrigin: 'anonymous' })
preload(geistLatin500, { as: 'font', type: 'font/woff2', crossOrigin: 'anonymous' })

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)

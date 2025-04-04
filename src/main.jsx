import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Calci from './Calculator/Calci'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <Calci />
  </StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App'
import { ModalProvider } from './components/modals'

const rootElement = document.getElementById('root')
const root = createRoot(rootElement)

root.render(
  <StrictMode>
    <ModalProvider>
      <App />
    </ModalProvider>
  </StrictMode>
)

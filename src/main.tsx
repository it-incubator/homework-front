import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './color-tokens.css'
import 'react-datepicker/dist/react-datepicker.css'
import { Provider } from 'react-redux'
import { store } from '@/app/store.ts'
import { App } from '@/app/App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
)

import { BrowserRouter } from "react-router-dom"
import { createRoot } from 'react-dom/client'
import { Provider as ReduxProvider } from "react-redux";
import App from './App.jsx'
import React from 'react'

createRoot(document.getElementById('root')).render(
  <ReduxProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ReduxProvider>

)

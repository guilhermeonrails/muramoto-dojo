import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Marca que o JS está ativo — o reveal on-scroll só esconde conteúdo quando há JS.
document.documentElement.classList.add('js')

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ContextHolder from './context/ContextHolder.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextHolder>
    <App />
    </ContextHolder>
    
  </React.StrictMode>,
)

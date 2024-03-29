import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Layout from './Layout/Layout.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className="h-screen">
      <Layout/>
    </div>
  </React.StrictMode>,
)

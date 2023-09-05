import React from 'react'
import ReactDOM from 'react-dom/client'
import Login from '../component/appLogin' 

ReactDOM
  .createRoot(document.getElementById('login')!)
    .render(
      <React.StrictMode>
        <Login />
      </React.StrictMode>,
    )
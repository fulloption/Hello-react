import React from 'react'
import ReactDOM from 'react-dom/client'
import Context from '../component/UseContext.tsx' 

ReactDOM
  .createRoot(document.getElementById('useContext')!)
    .render(
      <React.StrictMode>
        <Context />
      </React.StrictMode>,
    )
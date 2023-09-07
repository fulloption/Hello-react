import React from 'react'
import ReactDOM from 'react-dom/client'
import Callback from '../component/UseCallback.tsx' 

ReactDOM
  .createRoot(document.getElementById('calback')!)
    .render(
      <React.StrictMode>
        <Callback />
      </React.StrictMode>,
    )
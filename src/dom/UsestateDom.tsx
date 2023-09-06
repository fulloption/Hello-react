import React from 'react'
import ReactDOM from 'react-dom/client'
import UState from '../component/UseState.tsx' 

ReactDOM
  .createRoot(document.getElementById('useState')!)
    .render(
      <React.StrictMode>
        <UState />
      </React.StrictMode>,
    )
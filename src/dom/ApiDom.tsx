import React from 'react'
import ReactDOM from 'react-dom/client'
import ApiDom from '../component/ApiExample.tsx' 

ReactDOM
  .createRoot(document.getElementById('api')!)
    .render(
      <React.StrictMode>
        <ApiDom />
      </React.StrictMode>,
    )
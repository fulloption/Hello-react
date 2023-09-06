import React from 'react'
import ReactDOM from 'react-dom/client'
import UEffect from '../component/UseEffect.tsx' 

ReactDOM
  .createRoot(document.getElementById('useEffect')!)
    .render(
      <React.StrictMode>
        <UEffect />
      </React.StrictMode>,
    )
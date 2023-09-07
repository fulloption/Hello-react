import React from 'react'
import ReactDOM from 'react-dom/client'
import ApiDom from '../component/ApiExample.tsx' 
import Context from '../component/UseContext.tsx' 
import UEffect from '../component/UseEffect.tsx' 
import UState from '../component/UseState.tsx' 


ReactDOM
  .createRoot(document.getElementById('api')!)
    .render(
      <React.StrictMode>
        <ApiDom />
      </React.StrictMode>,
    )
ReactDOM
    .createRoot(document.getElementById('useContext')!)
    .render(
        <React.StrictMode>
        <Context />
        </React.StrictMode>,
    )    
ReactDOM
    .createRoot(document.getElementById('useEffect')!)
        .render(
        <React.StrictMode>
            <UEffect />
        </React.StrictMode>,
)
ReactDOM
  .createRoot(document.getElementById('useState')!)
    .render(
      <React.StrictMode>
        <UState />
      </React.StrictMode>,
    )
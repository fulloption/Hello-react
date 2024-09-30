import React from 'react'
import ReactDOM from 'react-dom/client'
import UState from '../component/UseState.tsx'
import UEffect from '../component/UseEffect.tsx'
import Context from '../component/UseContext.tsx'
import Callback from '../component/UseCallback.tsx' 
import UseReduce from '../component/UseReduce.tsx' 
import UseRef from '../component/UseRef.tsx'
import ApiDom from '../component/ApiExample.tsx'
ReactDOM
    .createRoot(document.getElementById('useState')!)
      .render(
        <React.StrictMode>
          <UState />
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
    .createRoot(document.getElementById('useContext')!)
    .render( 
        <React.StrictMode>
        <Context />
        </React.StrictMode>,
    )    
ReactDOM
    .createRoot(document.getElementById('callback')!)
        .render(
        <React.StrictMode>
            <Callback />
        </React.StrictMode>,
        )    
ReactDOM
    .createRoot(document.getElementById('reduce')!)
      .render(
        <React.StrictMode>
          <UseReduce />
        </React.StrictMode>,
      )

ReactDOM
  .createRoot(document.getElementById('useRef')!)
    .render(
      <React.StrictMode>
        <UseRef />
      </React.StrictMode>,
    )

ReactDOM
  .createRoot(document.getElementById('api')!)
    .render(
      <React.StrictMode>
        <ApiDom />
      </React.StrictMode>,
    )

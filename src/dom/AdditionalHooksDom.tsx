import React from 'react'
import ReactDOM from 'react-dom/client'
import Callback from '../component/UseCallback.tsx' 
import UseReduce from '../component/UseReduce.tsx' 

ReactDOM
  .createRoot(document.getElementById('reduce')!)
    .render(
      <React.StrictMode>
        <UseReduce />
      </React.StrictMode>,
    )
ReactDOM
    .createRoot(document.getElementById('callback')!)
        .render(
        <React.StrictMode>
            <Callback />
        </React.StrictMode>,
        )    
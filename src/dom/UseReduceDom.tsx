import React from 'react'
import ReactDOM from 'react-dom/client'
import UseReduce from '../component/UseReduce.tsx' 

ReactDOM
  .createRoot(document.getElementById('reduce')!)
    .render(
      <React.StrictMode>
        <UseReduce />
      </React.StrictMode>,
    )
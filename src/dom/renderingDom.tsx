import React from 'react'
import ReactDOM from 'react-dom/client'
import LifeCycle from '../component/rendering/LifeCycleDemoComp'
import ListAndKey from '../component/rendering/ListAndKey'
import RenderProps from '../component/rendering/RenderProps'
ReactDOM
    .createRoot(document.getElementById('lifeCycle')!)
      .render(
        <React.StrictMode>
          <LifeCycle />
        </React.StrictMode>,
      )

ReactDOM
    .createRoot(document.getElementById('listAndKey')!)
      .render(
        <React.StrictMode>
          <ListAndKey />
        </React.StrictMode>,
      )   

ReactDOM
    .createRoot(document.getElementById('renderProps')!)
      .render(
        <React.StrictMode>
          <RenderProps />
        </React.StrictMode>,
      )                 
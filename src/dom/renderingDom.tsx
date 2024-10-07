import React from 'react'
import ReactDOM from 'react-dom/client'
import LifeCycle from '../component/rendering/LifeCycleDemoComp'
import ListAndKey from '../component/rendering/ListAndKeyComp'
import RenderProps from '../component/rendering/RenderPropsComp'
import Refs from '../component/rendering/RefsComp'
import Event from '../component/rendering/EventComp'
import HighOrder from '../component/rendering/HighOrderComp'
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
      
ReactDOM
    .createRoot(document.getElementById('refs')!)
      .render(
        <React.StrictMode>
          <Refs />
        </React.StrictMode>,
      )    
ReactDOM
    .createRoot(document.getElementById('event')!)
      .render(
        <React.StrictMode>
          <Event />
        </React.StrictMode>,
      )
ReactDOM
    .createRoot(document.getElementById('hightOrder')!)
      .render(
        <React.StrictMode>
          <HighOrder />
        </React.StrictMode>,
      )             
            
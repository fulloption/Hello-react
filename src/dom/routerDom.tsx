import React from 'react'
import ReactDOM from 'react-dom/client'
import BasicRouter from '../component/routers/BasicRouter.tsx'; // Assuming BasicRouter.tsx is in the 'routers' folder


ReactDOM
  .createRoot(document.getElementById('basicRouter')!)
  .render(
    <React.StrictMode>
      <BasicRouter />
    </React.StrictMode>
  );


  
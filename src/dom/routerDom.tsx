import React from 'react';
import ReactDOM from 'react-dom/client';
import BasicRouter from '../routers/BasicRouter'; // Assuming BasicRouter.tsx is in the 'routers' folder

ReactDOM
  .createRoot(document.getElementById('basicRouter')!) // Replace 'basicRouter' with the actual ID of your HTML element
  .render(
    <React.StrictMode>
      <BasicRouter />
    </React.StrictMode>
  );

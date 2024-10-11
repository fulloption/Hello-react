import React from 'react'
import ReactDOM from 'react-dom/client'
import BasicRouter from '../component/routers/BasicRouter.tsx'; // Assuming BasicRouter.tsx is in the 'routers' folder
import Nested from '../component/routers/NestedRouting.tsx'; // Assuming BasicRouter.tsx is in the 'routers' folder
import Navigation from '../component/routers/Navigation.tsx'; // Assuming BasicRouter.tsx is in the 'routers' folder
import Guard from '../component/routers/RouteGuard.tsx'; // Assuming BasicRouter.tsx is in the 'routers' folder
import Redux from '../component/routers/Redux.tsx'; // Assuming BasicRouter.tsx is in the 'routers' folder
import ContextAPI from '../component/routers/ContextAPI.tsx'; // Assuming BasicRouter.tsx is in the 'routers' folder
import SSR from '../component/routers/SSR.tsx'; // Assuming BasicRouter.tsx is in the 'routers' folder
import Next from '../component/routers/RouterInNext.tsx'; // Assuming BasicRouter.tsx is in the 'routers' folder

// ReactDOM
//   .createRoot(document.getElementById('basicRouter')!)
//     .render(
//       <React.StrictMode>
//         <BasicRouter />
//       </React.StrictMode>
//   );

// ReactDOM
//   .createRoot(document.getElementById('nested')!)
//     .render(
//       <React.StrictMode>
//         <Nested />
//       </React.StrictMode>
//   );

// ReactDOM
//   .createRoot(document.getElementById('navigation')!)
//     .render(
//       <React.StrictMode>
//         <Navigation />
//       </React.StrictMode>
//   );
  
ReactDOM
  .createRoot(document.getElementById('guard')!)
    .render(
      <React.StrictMode>
        <Guard />
      </React.StrictMode>
  );
  
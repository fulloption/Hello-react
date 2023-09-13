import React from "react";

import DemoUseState from "./DemoUseState";
import DemoUseMemo from "./DemoUseMemo";

function App() {
  return (
    <div className="App">
      <h1>React Hooks useMemo</h1>
      <hr />
      <DemoUseMemo />
      <hr />
      <DemoUseState />
    </div>
  );
}
export default App;

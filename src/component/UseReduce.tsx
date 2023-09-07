import React, { useEffect, useRef, useReducer } from "react";



function reducer(state, action) {
  if (action === "increment") {
    console.log(state);
    return state + 1;
  }
}

function App() {
  let [state, dispatch] = useReducer(reducer, 0);
  let timerid = useRef();
  useEffect(function() {
    timerid.current = setInterval(function() {
      dispatch("increment");
    }, 2000);

    return () => clearInterval(timerid.current);
  }, []);

  return (
    <div className="App">
      <h5>UseEffect : {state}</h5>
    </div>
  );
}
export default App;

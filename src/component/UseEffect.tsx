
import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const [state, setState] = useState(0);

  useEffect(() => {
    console.log("mounted");
  }, []);

  useEffect(() => {
    console.log("updated");
  });

  useEffect(() => {
    console.log("updated with count");
  }, [count]);

  useEffect(() => {
    console.log("updated with state");
  }, [state]);

  useEffect(() => {
    const onMousedown = () => {
      console.log("mousedown");
    };
    window.addEventListener("mousedown", onMousedown);

    return () => {
      console.log("cleanup");
      window.removeEventListener("mousedown", onMousedown);
    };
  });

  return (
    <div className="App">
      <h1>useEffect Count: {count}</h1>
      <h2>useEffect Change State {state}</h2>
      <button
        onClick={() => {
          setCount((count) => count + 1);
        }}
      >
        Add Count
      </button>
      <button
        onClick={() => {
          setState((state) => state + 1);
        }}
      >
        Change State
      </button>
    </div>
  );
}

export default App
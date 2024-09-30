import React, { useState, useCallback } from "react";
// import ReactDOM from "react-dom";

const functionsCounter = new Set();

const Counter = () => {
  const [count, setCount] = useState(0);
  const [otherCounter, setOtherCounter] = useState(0);

  const increment = useCallback(() => {
    setCount(count + 1);
  }, [count]);
  const decrement = useCallback(() => {
    setCount(count - 1);
  }, [count]);
  const incrementOtherCounter = useCallback(() => {
    setOtherCounter(otherCounter + 1);
  }, [otherCounter]);
  const decrementOtherCounter = useCallback(() => {
    setOtherCounter(otherCounter - 1);
  }, [otherCounter]);

  functionsCounter.add(increment);
  functionsCounter.add(decrement);
  functionsCounter.add(incrementOtherCounter);
  functionsCounter.add(decrementOtherCounter);

  console.log(functionsCounter);

  return (
    <>
      useCallback  -  Count: {count}  
      &nbsp;&nbsp;<button onClick={increment}> + </button>
      &nbsp;&nbsp;<button onClick={decrement}> - </button>
      &nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;otherCounter: {otherCounter}
      &nbsp;&nbsp;<button onClick={incrementOtherCounter}>incrementOtherCounter</button>
      &nbsp;&nbsp;<button onClick={decrementOtherCounter}>decrementOtherCounter</button>
    </>
  );
};

export default Counter;

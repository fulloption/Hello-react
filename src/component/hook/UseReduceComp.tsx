import React, { useReducer } from 'react';

// 1. กำหนด initial state
const initialState = {
  count: 0,
};

// 2. สร้าง reducer function
// reducer function รับ state ปัจจุบันและ action
// แล้ว return state ใหม่
const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      return state;
  }
};

function Counter() {
  // 3. ใช้ useReducer hook
  // useReducer hook จะ return state ปัจจุบันและ dispatch function
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>{state.count}</h1>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
    </div>
  );
}

export default Counter;

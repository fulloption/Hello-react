import React, { useState, useCallback } from 'react';

// Child Component ที่รับฟังก์ชันเป็น props และ eventName
const ExpensiveComponent = React.memo(({ onEvent, eventName }) => {
  console.log('ExpensiveComponent rendered!');
  return <button onClick={onEvent}>{eventName}</button>;
});

const ParentComponent = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = useCallback(() => setCount(count + 1), [count]);
  const handleDecrement = useCallback(() => setCount(count - 1), [count]);
  const handleReset = useCallback(() => setCount(0), []); // เพิ่มฟังก์ชัน reset

  return (
    <div>
      <p>Count: {count}</p>
      {/* ส่งฟังก์ชันที่ memoize แล้วเป็น props */}
      <ExpensiveComponent onEvent={handleIncrement} eventName="Increment" />
      &nbsp;&nbsp;
      <ExpensiveComponent onEvent={handleDecrement} eventName="Decrement" />
      &nbsp;&nbsp;
      <ExpensiveComponent onEvent={handleReset} eventName="Reset" /> {/* เพิ่ม button reset */}
    
    </div>
  );
};

export default ParentComponent;
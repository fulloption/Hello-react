import React, { useState, useCallback } from 'react';

// Child Component ที่รับฟังก์ชันเป็น props
const ExpensiveComponent = React.memo(({ onEvent }) => {
  console.log('ExpensiveComponent rendered!');
  return <button onClick={onEvent}>Increment</button>;
});

const ParentComponent = () => {
  const [count, setCount] = useState(0);

  // ใช้ useCallback เพื่อ memoize ฟังก์ชัน onIncrement
  const handleIncrement = useCallback(() => {
    setCount(count + 1);
  }, [count]);
  // ใช้ useCallback เพื่อ memoize ฟังก์ชัน onIncrement
  const handleDecrement = useCallback(() => {
    setCount(count - 1);
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      {/* ส่งฟังก์ชันที่ memoize แล้วเป็น props */}
      <ExpensiveComponent onEvent={handleIncrement} />
      <ExpensiveComponent onEvent={handleDecrement} />
    </div>
  );
};

export default ParentComponent;

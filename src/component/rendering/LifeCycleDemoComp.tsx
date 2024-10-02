import React, { useState, useEffect } from 'react';

function Counter() {
  // 1. กำหนด State
  //    - count คือ ตัวแปรเก็บค่าจำนวน
  //    - setCount คือ ฟังก์ชันสำหรับเปลี่ยนแปลงค่า count
  //    - useState(0) คือ กำหนดค่าเริ่มต้นของ count เป็น 0
  const [count, setCount] = useState(0);

  // 2. useEffect สำหรับจำลอง ComponentDidMount และ ComponentWillUnmount
  useEffect(() => {
    // ComponentDidMount: ทำงานครั้งเดียวหลังจาก component ถูก render ครั้งแรก
    console.log('👋 สวัสดี! Counter เพิ่งถูกสร้างขึ้นมา');

    // ComponentWillUnmount: ทำงานก่อนที่ component จะถูกนำออก
    return () => {
      console.log('😢 ลาก่อน! Counter กำลังจะหายไป');
    };
  }, []); // [] หมายถึง effect นี้จะทำงานแค่ครั้งเดียวตอนเริ่มต้น

  // 3. useEffect สำหรับจำลอง ComponentDidUpdate
  useEffect(() => {
    // ComponentDidUpdate: ทำงานทุกครั้งหลังจาก state หรือ props เปลี่ยนแปลง
    console.log('🔄 Counter ถูกอัปเดตแล้ว! ค่าใหม่คือ', count);
  }, [count]); // [count] หมายถึง effect นี้จะทำงานเมื่อ count เปลี่ยนแปลง

  // 4. ฟังก์ชันสำหรับเพิ่มค่า count
  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>นับจำนวน: {count}</h1>
      <button onClick={handleClick}>เพิ่มจำนวน</button>
    </div>
  );
}

export default Counter;

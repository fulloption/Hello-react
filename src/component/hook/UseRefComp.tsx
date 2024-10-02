import React, { useRef, useState } from 'react';

function App() {
  // 1. สร้าง useRef เพื่อเก็บค่าของ input
  const inputRef = useRef<HTMLInputElement>(null);

  // 2. สร้าง state เพื่อเก็บข้อความที่แสดง
  const [message, setMessage] = useState('');

  // 3. ฟังก์ชันสำหรับอัปเดตข้อความ
  const updateMessage = () => {
    // ตรวจสอบว่า inputRef.current มีค่าหรือไม่
    if (inputRef.current) {
      // อัปเดตข้อความจากค่าใน input
      setMessage(inputRef.current.value);
    }
  };

  // 4. ฟังก์ชันสำหรับล้างค่าใน input
  const clearInput = () => {
    if (inputRef.current) {
      inputRef.current.value = '';
    }
  };

  return (
    <div>
      <h1>ตัวอย่างการใช้งาน useRef</h1>

      {/* ผูก input กับ useRef */}
      <input type="text" ref={inputRef} />

      {/* ปุ่มสำหรับอัปเดตข้อความ */}
      <button onClick={updateMessage}>แสดงข้อความ</button>

      {/* ปุ่มสำหรับล้างค่าใน input */}
      <button onClick={clearInput}>ล้างค่า</button>

      {/* แสดงข้อความ */}
      <p>{message}</p>
    </div>
  );
}
export default App;

import React, { useState } from 'react';

function EventExample() {
  const [inputValue, setInputValue] = useState('');

  // ฟังก์ชันจัดการ Event onChange สำหรับ input
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  // ฟังก์ชันจัดการ Event onClick สำหรับ button
  const handleClick = () => {
    alert(`ข้อความที่คุณพิมพ์คือ: ${inputValue}`);
  };

  return (
    <div>
      <h1>ตัวอย่างการจัดการ Events ใน React</h1>
      <p>
        พิมพ์ข้อความในช่องด้านล่าง:
        <input type="text" value={inputValue} onChange={handleChange} />
      </p>
      <button onClick={handleClick}>แสดงข้อความ</button>
    </div>
  );
}

export default EventExample;

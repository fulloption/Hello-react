import React from 'react';
import { BrowserRouter, Routes, Route, Link, useParams } from 'react-router-dom';

function UserDetail() {
  const { userId } = useParams();
  return (
    <div>
      <h1>รายละเอียดผู้ใช้ {userId}</h1>
      {/* แสดงข้อมูลผู้ใช้ตาม userId */}
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users/:userId" element={<UserDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
// คำอธิบาย:

// useParams: Hook ที่ใช้สำหรับดึงค่า parameter จาก URL
// :userId: ตัวแปร parameter ใน URL ที่ใช้สำหรับระบุ ID ของผู้ใช้
// UserDetail: องค์ประกอบที่แสดงรายละเอียดของผู้ใช้ตาม ID ที่ได้รับจาก parameter
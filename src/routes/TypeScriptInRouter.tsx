import React from 'react';
import { BrowserRouter, Routes, Route, Link, useParams } from 'react-router-dom';

interface User {
  id: number;
  name: string;
}

function UserDetail() {
  const { userId } = useParams();
  const user: User = { id: parseInt(userId), name: 'John Doe' }; // ตัวอย่างข้อมูลผู้ใช้

  return (
    <div>
      <h1>รายละเอียดผู้ใช้ {user.name}</h1>
      <p>ID: {user.id}</p>
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

// interface: ใช้สำหรับกำหนดชนิดข้อมูลของ User
// parseInt: ใช้สำหรับแปลงค่า string เป็น integer
// user: ตัวแปรที่เก็บข้อมูลผู้ใช้
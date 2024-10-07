import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>หน้าแรก</h1>
      <p>ยินดีต้อนรับสู่แอปพลิเคชันของเรา</p>
      <Link to="/about">ไปยังหน้าเกี่ยวกับเรา</Link>
    </div>
  );
}

function About() {
  return (
    <div>
      <h1>เกี่ยวกับเรา</h1>
      <p>นี่คือหน้าเกี่ยวกับแอปพลิเคชันของเรา</p>
      <Link to="/">กลับไปหน้าแรก</Link>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
// คำอธิบาย:

// BrowserRouter: องค์ประกอบหลักของ React Router ที่ช่วยให้เราสามารถใช้ routing ในแอปพลิเคชันได้
// Routes: องค์ประกอบที่ใช้สำหรับกำหนดเส้นทาง (routes) ต่าง ๆ ในแอปพลิเคชัน
// Route: องค์ประกอบที่ใช้สำหรับกำหนดเส้นทางเฉพาะ เช่น / สำหรับหน้าแรก, /about สำหรับหน้าเกี่ยวกับเรา
// path: คุณสมบัติที่ระบุเส้นทางของแต่ละหน้า
// element: องค์ประกอบ React ที่จะแสดงเมื่อเส้นทางตรงกับ path ที่กำหนด
// Link: องค์ประกอบที่ใช้สำหรับสร้างลิงก์ไปยังหน้าต่าง ๆ ในแอปพลิเคชัน
import React from 'react';
import { BrowserRouter, Routes, Route, Link, Navigate, useLocation } from 'react-router-dom';

function Login() {
  return (
    <div>
      <h1>เข้าสู่ระบบ</h1>
      {/* แสดงฟอร์มเข้าสู่ระบบ */}
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h1>แดชบอร์ด</h1>
      {/* แสดงข้อมูลในแดชบอร์ด */}
    </div>
  );
}

function PrivateRoute({ children }) {
  const location = useLocation();
  const isLoggedIn = false; // ตรวจสอบสถานะการเข้าสู่ระบบ

  if (!isLoggedIn) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
// คำอธิบาย:

// Navigate: องค์ประกอบที่ใช้สำหรับการนำทางไปยังหน้าต่าง ๆ ในแอปพลิเคชัน
// useLocation: Hook ที่ใช้สำหรับดึงข้อมูลเกี่ยวกับตำแหน่งปัจจุบันของผู้ใช้
// PrivateRoute: องค์ประกอบที่ใช้สำหรับการตรวจสอบสถานะการเข้าสู่ระบบ
// state: คุณสมบัติที่ใช้สำหรับการส่งข้อมูลไปยังหน้าต่างอื่น ๆ
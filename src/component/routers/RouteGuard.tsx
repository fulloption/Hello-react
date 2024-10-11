import React from 'react';
import { BrowserRouter, Routes, Route, Link, Navigate, useLocation } from 'react-router-dom';

// ฟังก์ชันจำลองการตรวจสอบสถานะการเข้าสู่ระบบ
const isAuthenticated = () => {
  // ตรวจสอบจาก localStorage, session, หรือ API
  // return localStorage.getItem('token') !== null;
  return true;
};

// ส่วนประกอบหน้าแรก
function Home() {
  return (
    <div>
      <h1>ยินดีต้อนรับสู่หน้าแรก</h1>
    </div>
  );
}

// ส่วนประกอบแดชบอร์ด
function Dashboard() {
  return (
    <div>
      <h1>แดชบอร์ด</h1>
      <p>ข้อมูลส่วนตัวของคุณจะปรากฏที่นี่</p>
    </div>
  );
}

// ส่วนประกอบ PrivateRoute สำหรับป้องกันเส้นทาง
const PrivateRoute = ({ children }) => {
  const location = useLocation();

  // ถ้าไม่ได้รับอนุญาต ให้เปลี่ยนเส้นทางไปยังหน้าเข้าสู่ระบบ
  if (!isAuthenticated()) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // ถ้าได้รับอนุญาต ให้แสดงส่วนประกอบที่ต้องการ
  return children;
};

// ส่วนประกอบหลักของแอปพลิเคชัน
function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li><Link to="/homeGuard">หน้าแรก</Link></li>
            <li><Link to="/dashboard">แดชบอร์ด</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/homeGuard" element={<Home />} />
          {/* ใช้ PrivateRoute เพื่อป้องกันเส้นทาง /dashboard */}
          <Route path="/dashboard" element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          } />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
// Note : เราใส่ return true; ใน isAuthenticated เพื่อให้เช็คว่ามีการ Login ค้างไว้


// Navigate: องค์ประกอบที่ใช้สำหรับการนำทางไปยังหน้าต่าง ๆ ในแอปพลิเคชัน
// useLocation: Hook ที่ใช้สำหรับดึงข้อมูลเกี่ยวกับตำแหน่งปัจจุบันของผู้ใช้
// PrivateRoute: องค์ประกอบที่ใช้สำหรับการตรวจสอบสถานะการเข้าสู่ระบบ
// state: คุณสมบัติที่ใช้สำหรับการส่งข้อมูลไปยังหน้าต่างอื่น ๆ
// การยืนยันตัวตน (Authentication): อนุญาตให้เฉพาะผู้ใช้ที่ลงชื่อเข้าใช้แล้วเท่านั้นที่สามารถเข้าถึงเส้นทางหรือส่วนประกอบบางอย่างได้
// การอนุญาต (Authorization): อนุญาตให้ผู้ใช้ที่มีบทบาทหรือสิทธิ์ที่เหมาะสมเท่านั้นที่สามารถเข้าถึงเส้นทางหรือฟีเจอร์บางอย่างได้
// การป้องกันการเข้าถึงโดยไม่ได้ตั้งใจ: ป้องกันไม่ให้ผู้ใช้เข้าถึงเส้นทางที่ไม่สมบูรณ์หรือยังไม่ได้รับอนุญาต
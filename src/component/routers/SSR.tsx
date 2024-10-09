import React from 'react';
import { BrowserRouter, Routes, Route, Link, useParams } from 'react-router-dom';
import { renderToString } from 'react-dom/server';

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

async function renderApp(url: string) {
  const app = (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users/:userId" element={<UserDetail />} />
      </Routes>
    </BrowserRouter>
  );

  const html = renderToString(app);
  return html;
}

export default renderApp;
// คำอธิบาย:

// renderToString: ฟังก์ชันที่ใช้สำหรับการเรนเดอร์องค์ประกอบ React เป็น HTML string
// renderApp: ฟังก์ชันที่ใช้สำหรับการเรนเดอร์แอปพลิเคชัน React เป็น HTML string
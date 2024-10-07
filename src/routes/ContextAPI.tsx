import React, { createContext, useContext, useState } from 'react';
import { BrowserRouter, Routes, Route, Link, useParams } from 'react-router-dom';

interface User {
  id: number;
  name: string;
}

const UserContext = createContext<User | null>(null);

function UserDetail() {
  const user = useContext(UserContext);

  return (
    <div>
      <h1>รายละเอียดผู้ใช้ {user?.name}</h1>
      <p>ID: {user?.id}</p>
    </div>
  );
}

function App() {
  const [user, setUser] = useState<User | null>(null);

  return (
    <BrowserRouter>
      <UserContext.Provider value={user}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users/:userId" element={<UserDetail />} />
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
// คำอธิบาย:

// createContext: ฟังก์ชันที่ใช้สำหรับการสร้าง Context API
// useContext: Hook ที่ใช้สำหรับการดึงข้อมูลจาก Context API
// UserContext.Provider: องค์ประกอบที่ใช้สำหรับการจัดหาข้อมูลไปยัง Context API
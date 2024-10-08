import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(`/search?q=${searchTerm}`);
  };

  return (
    <div>
      <h1>หน้าแรก</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        <button type="submit">ค้นหา</button>
      </form>
    </div>
  );
}

function Search() {
  const { q } = new URLSearchParams(window.location.search);
  return (
    <div>
      <h1>ผลการค้นหา</h1>
      <p>คำค้นหา: {q}</p>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
// คำอธิบาย:

// useNavigate: Hook ที่ใช้สำหรับการนำทางไปยังหน้าต่าง ๆ ในแอปพลิเคชัน
// navigate: ฟังก์ชันที่ใช้สำหรับการนำทางไปยังเส้นทางที่ระบุ
// URLSearchParams: คลาสที่ใช้สำหรับการจัดการ query parameter ใน URL
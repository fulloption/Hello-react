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

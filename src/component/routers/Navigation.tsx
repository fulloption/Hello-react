import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate(); // เรียกใช้ useNavigate hook

  const handleClick = () => {
    navigate('/aboutNavigation'); // นำทางไปยังหน้า '/about'
  };

  return (
    <div>
      <h1>หน้าแรก</h1>
      <p>ยินดีต้อนรับสู่แอปพลิเคชันของเรา</p>
      <button onClick={handleClick}>ไปยังหน้าเกี่ยวกับเรา</button>
    </div>
  );
}

function About() {
  return (
    <div>
      <h1>เกี่ยวกับเรา</h1>
      <p>นี่คือหน้าเกี่ยวกับแอปพลิเคชันของเรา</p>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li><Link to="/homeNavigation">หน้าแรก</Link></li>
          <li><Link to="/aboutNavigation">เกี่ยวกับเรา</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/homeNavigation" element={<Home />} />
        <Route path="/aboutNavigation" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

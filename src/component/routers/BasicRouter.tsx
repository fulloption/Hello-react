import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

const HomeBasic = () => { 
  return (
    <div>
      <h1>หน้าแรก</h1>
      <p>ยินดีต้อนรับสู่แอปพลิเคชันของเรา</p>
    </div>
  );
}

const AboutBasic = () => { 
  return (
    <div>
      <h1>เกี่ยวกับเรา</h1>
      <p>นี่คือหน้าเกี่ยวกับแอปพลิเคชันของเรา</p>
    </div>
  );
}

const AppBasic = () => {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
          <li>
              <Link to="/router.html">Router Main</Link>
            </li>
            <li>
              <Link to="/homeBasic">หน้าแรก</Link>
            </li>
            <li>
              <Link to="/aboutBasic">เกี่ยวกับเรา</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/homeBasic" element={<HomeBasic />} />
          <Route path="/aboutBasic" element={<AboutBasic />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default AppBasic;
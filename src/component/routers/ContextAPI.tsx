import React, { createContext, useState, useContext } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

// สร้าง Context สำหรับ Theme
const ThemeContext = createContext({
  isDarkMode: false,
  toggleTheme: () => {},
});

// สร้าง Provider component
const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // ฟังก์ชันสำหรับเปลี่ยน theme
  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  // สร้าง value object ที่จะส่งไปยัง context
  const value = {
    isDarkMode,
    toggleTheme
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

// สร้าง custom hook สำหรับใช้งาน context
const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

const Home = () => {
  // ใช้งาน custom hook เพื่อเข้าถึง context
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <div style={{ background: isDarkMode ? '#333' : '#fff', color: isDarkMode ? '#fff' : '#333' }}>
      <h1>หน้าหลัก</h1>
      <p>ยินดีต้อนรับสู่เว็บไซต์ของเรา!</p>
      <button onClick={toggleTheme}>
        {isDarkMode ? 'เปลี่ยนเป็นโหมดสว่าง' : 'เปลี่ยนเป็นโหมดมืด'}
      </button>
    </div>
  );
};

const About = () => {
  return (
    <div>
      <h1>เกี่ยวกับเรา</h1>
    </div>
  );
};

const Contact = () => {
  return (
    <div>
      <h1>ติดต่อเรา</h1>
    </div>
  );
};

// สร้าง App component หลัก
const App = () => {
  return (
    // ครอบ Router component เพื่อใช้งาน React Router
    <Router>
      {/* ครอบ ThemeProvider เพื่อใช้งาน Context API */}
      <ThemeProvider>
        <div>
          {/* สร้างเมนูนำทาง */}
          <nav>
            <ul>
              <li><Link to="/homeContextAPI">หน้าหลัก</Link></li>
              <li><Link to="/about">เกี่ยวกับเรา</Link></li>
              <li><Link to="/contact">ติดต่อเรา</Link></li>
            </ul>
          </nav>

          {/* กำหนด Route สำหรับแต่ละหน้า */}
          <Routes>
            <Route path="/homeContextAPI" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </ThemeProvider>
    </Router>
  );
};

export default App;

// Context API:

// -โปรแกรมใช้ Context API เพื่อจัดการสถานะของธีม (Theme) ซึ่งมีสถานะเป็น isDarkMode (โหมดมืดหรือไม่)
// -สร้าง ThemeContext และ ThemeProvider เพื่อให้ component ต่างๆ สามารถเข้าถึงและแก้ไขสถานะของธีมได้
// -useTheme เป็น custom hook ที่ช่วยให้ component ใช้งาน Context ได้ง่ายขึ้น
// -component Home จะใช้ useTheme เพื่อรับค่า isDarkMode และ toggleTheme
// -เมื่อกดปุ่มใน component Home ฟังก์ชัน toggleTheme จะถูกเรียก ทำให้สถานะ isDarkMode เปลี่ยนแปลง และธีมของแอปพลิเคชันก็จะเปลี่ยนตาม


//   ข้อควรทำในการพัฒนา:
// -ควรใช้ Context API เมื่อต้องการแชร์ข้อมูลที่ใช้ร่วมกันในหลาย component เช่น ธีม, ภาษา, หรือข้อมูลผู้ใช้
// -ควรสร้าง custom hook เพื่อให้ง่ายต่อการใช้งาน Context
// -ควรแยก component ออกเป็นส่วนย่อยๆ เพื่อให้ง่ายต่อการจัดการและนำกลับมาใช้ใหม่

//   ข้อไม่ควรทำในการพัฒนา:
// -ไม่ควรใช้ Context API กับข้อมูลที่มีการเปลี่ยนแปลงบ่อยครั้ง เพราะอาจทำให้เกิดปัญหา performance ได้
// -ไม่ควรเก็บข้อมูลที่ซับซ้อนหรือมีขนาดใหญ่ใน Context เพราะอาจทำให้แอปพลิเคชันทำงานช้าลง
// -ไม่ควรใช้ Context API แทน state management library เช่น Redux หากแอปพลิเคชันมีความซับซ้อนมาก
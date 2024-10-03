import React, { useState } from 'react';

// สมมุติว่าเรามีกล่องวิเศษ ที่สามารถเปลี่ยนสิ่งของที่ใส่เข้าไปได้
function MagicBox({ render }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {isOpen && render()} 
      <button onClick={handleToggle}>
        {isOpen ? 'ปิดกล่อง' : 'เปิดกล่อง'}
      </button>
      {/* นี่คือส่วนที่เราใช้ render props */}
      
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>✨ ทดสอบ Render Props ✨</h1>
      <MagicBox
        render={() => (
          <div>
            <h2>🎁 inside object 🎁</h2>
          </div>
        )}
      />
    </div>
  );
}

export default App;

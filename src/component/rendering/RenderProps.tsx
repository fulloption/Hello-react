import React, { useState } from 'react';

// สมมุติว่าเรามีกล่องวิเศษ ที่สามารถเปลี่ยนสิ่งของที่ใส่เข้าไปได้
function MagicBox({ render }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={handleToggle}>
        {isOpen ? 'ปิดกล่อง' : 'เปิดกล่อง'}
      </button>
      {/* นี่คือส่วนที่เราใช้ render props */}
      {isOpen && render()} 
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>✨ กล่องวิเศษ ✨</h1>
      <MagicBox
        render={() => (
          <div>
            <h2>🎁 ข้างในกล่องมีของขวัญ! 🎁</h2>
          </div>
        )}
      />
    </div>
  );
}

export default App;

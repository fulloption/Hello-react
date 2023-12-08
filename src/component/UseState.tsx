import React, { useState } from 'react';
function MyApp() {
    // สร้างตัวแปรสถานะ count และกำหนดค่าเริ่มต้นเป็น 0
    const [count, setCount] = useState(0);
  
    return (
      <div>
        <p>useState-ค่าปัจจุบัน : {count}</p>
        <button onClick={() => setCount(count + 1)}>เพิ่มค่า</button>
      </div>
    );
  }
  
  export default MyApp;
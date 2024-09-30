import React, { useEffect,useState } from 'react';
const StateTest = () => {
// function MyApp() {
    // สร้างตัวแปรสถานะ count และกำหนดค่าเริ่มต้นเป็น 0
    const [count, setCount] = useState(0);    
    // useEffect(() => {
    //     console.log("useEffect updated in  useState");
    //   });

    const handleClick = () => {
        setCount(count + 1);
        console.log(count);
    };
    return (
        <div>
            <p>useState-ค่าปัจจุบัน : {count}</p>
            <button onClick={handleClick}>เพิ่มค่า</button>
        </div>
    );
  }  
  export default StateTest;
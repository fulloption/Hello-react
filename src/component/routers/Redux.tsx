import React from 'react';
import { BrowserRouter, Routes, Route, Link, useParams } from 'react-router-dom';
import { useSelector, useDispatch, Provider } from 'react-redux';
import { createStore } from 'redux';

// 1. กำหนดโครงสร้างข้อมูล
interface User {
  id: number;
  name: string;
}

interface RootState {
  users: User[];
}

// 2. กำหนด State เริ่มต้นของ Redux store
const initialState: RootState = {
  users: [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'John Vee' },
    { id: 3, name: 'John Doi' },
    { id: 4, name: 'John Kuy' }
  ]
};

// 3. สร้าง Reducer สำหรับจัดการ Action และอัพเดท State
const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    default:
      return state;
  }
};

// 4. สร้าง Redux store
const store = createStore(reducer);

// 5. ส่วนประกอบหน้าแรก
function Home() {
  return (
    <div>
      <h1>ยินดีต้อนรับสู่หน้าแรก</h1>
    </div>
  );
}

// 6. ส่วนประกอบแสดงรายละเอียดผู้ใช้
function UserDetail() {
  // 6.1 ดึง userId จาก URL parameter
  const { userId } = useParams();

  // 6.2 ดึงข้อมูลผู้ใช้จาก Redux store โดยใช้ useSelector
  const user = useSelector((state: RootState) => 
    state.users.find((u) => u.id === Number(userId))
  );

  // 6.3 ตรวจสอบว่าพบผู้ใช้หรือไม่
  if (!user) {
    return <div><h1>ไม่พบผู้ใช้</h1></div>;
  }

  return (
    <div>
      <h1>รายละเอียดผู้ใช้: {user.name}</h1>
      <p>ID: {user.id}</p>
    </div>
  );
}

// 7. ส่วนประกอบหลักของแอปพลิเคชัน
function App() {
  return (
    // 7.1 เชื่อมต่อ Redux store กับแอปพลิเคชันผ่าน Provider
    <Provider store={store}>
      <BrowserRouter>
        <div>
          {/* 7.2 สร้าง Navigation bar */}
          <nav>
            <ul>
              <li><Link to="/homeRedux">หน้าแรก</Link></li>
              <li><Link to="/users/1">แดชบอร์ด (ผู้ใช้ ID 1)</Link></li>
              <li><Link to="/users/2">แดชบอร์ด (ผู้ใช้ ID 2)</Link></li>
              <li><Link to="/users/3">แดชบอร์ด (ผู้ใช้ ID 3)</Link></li>
              <li><Link to="/users/4">แดชบอร์ด (ผู้ใช้ ID 4)</Link></li>
            </ul>
          </nav>

          {/* 7.3 กำหนด Routes */}
          <Routes>
            <Route path="/homeRedux" element={<Home />} />
            <Route path="/users/:userId" element={<UserDetail />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

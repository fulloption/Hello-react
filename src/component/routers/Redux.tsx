import React from 'react';
import { BrowserRouter, Routes, Route, Link, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

interface User {
  id: number;
  name: string;
}

interface UserState {
  users: User[];
}

const initialState: UserState = {
  users: [],
};

const reducer = (state: UserState = initialState, action: any) => {
  switch (action.type) {
    case 'ADD_USER':
      return { ...state, users: [...state.users, action.payload] };
    default:
      return state;
  }
};

const store = createStore(reducer);

function UserDetail() {
  const { userId } = useParams();
  const user = useSelector((state: UserState) => state.users.find((u) => u.id === parseInt(userId)));

  return (
    <div>
      <h1>รายละเอียดผู้ใช้ {user?.name}</h1>
      <p>ID: {user?.id}</p>
    </div>
  );
}

function App() {
  const dispatch = useDispatch();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users/:userId" element={<UserDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
// คำอธิบาย:

// useSelector: Hook ที่ใช้สำหรับการดึงข้อมูลจาก Redux store
// useDispatch: Hook ที่ใช้สำหรับการส่ง action ไปยัง Redux store
// createStore: ฟังก์ชันที่ใช้สำหรับการสร้าง Redux store
// reducer: ฟังก์ชันที่ใช้สำหรับการจัดการ state ใน Redux store
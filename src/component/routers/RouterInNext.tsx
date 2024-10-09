import React from 'react';
import { useRouter } from 'next/router';

interface User {
  id: number;
  name: string;
}

function UserDetail({ userId }: { userId: string }) {
  const user: User = { id: parseInt(userId), name: 'John Doe' }; // ตัวอย่างข้อมูลผู้ใช้

  return (
    <div>
      <h1>รายละเอียดผู้ใช้ {user.name}</h1>
      <p>ID: {user.id}</p>
    </div>
  );
}

function Home() {
  const router = useRouter();

  return (
    <div>
      <h1>หน้าแรก</h1>
      <button onClick={() => router.push('/users/1')}>ไปยังหน้าผู้ใช้ 1</button>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <Home />
      <UserDetail userId="1" />
    </div>
  );
}
// คำอธิบาย:

// useRouter: Hook ที่ใช้สำหรับการจัดการ routing ใน Next.js
// router.push: ฟังก์ชันที่ใช้สำหรับการนำทางไปยังเส้นทางที่ระบุ
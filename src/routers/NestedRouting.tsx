import React from 'react';
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';

function Products() {
  return (
    <div>
      <h1>สินค้า</h1>
      <ul>
        <li><Link to="/products/1">สินค้า 1</Link></li>
        <li><Link to="/products/2">สินค้า 2</Link></li>
      </ul>
      <Outlet />
    </div>
  );
}

function ProductDetail() {
  const { productId } = useParams();
  return (
    <div>
      <h1>รายละเอียดสินค้า {productId}</h1>
      {/* แสดงข้อมูลสินค้าตาม productId */}
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />}>
          <Route path=":productId" element={<ProductDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
// คำอธิบาย:

// Outlet: องค์ประกอบที่ใช้สำหรับแสดงองค์ประกอบย่อย (child component) ของเส้นทางปัจจุบัน
// Products: องค์ประกอบที่แสดงรายการสินค้า
// ProductDetail: องค์ประกอบที่แสดงรายละเอียดของสินค้าตาม ID
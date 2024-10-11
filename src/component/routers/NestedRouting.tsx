import React from 'react';
import { BrowserRouter, Routes, Route, Link, Outlet, useParams } from 'react-router-dom';
const Home = () => { 
  return (
    <div>
      <h1>หน้าแรก</h1>
      <p>ยินดีต้อนรับสู่แอปพลิเคชันของเรา</p>
    </div>
  );
}

const Products= () => { 
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

const ProductDetail = () => { 
  const { productId } = useParams();
  return (
    <div>
      <h1>รายละเอียดสินค้า {productId}</h1>
      {/* แสดงข้อมูลสินค้าตาม productId */}
    </div>
  );
}

const App = () => {
  return (    
    <BrowserRouter>
      <div> 
        <nav>
          <ul>
            <li><Link to="/router.html">Router Main</Link></li> {/* เปลี่ยนเส้นทางเป็น "/" */}
            <li><Link to="/homeNested">หน้าแรก</Link></li>
            <li><Link to="/productsNested">สินค้า</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/homeNested" element={<Home />} /> 
          <Route path="/productsNested" element={<Products />}>
            <Route path=":productIdNested" element={<ProductDetail />} />
          </Route>
        </Routes>
      </div> 
    </BrowserRouter>
  );
}
export default App;
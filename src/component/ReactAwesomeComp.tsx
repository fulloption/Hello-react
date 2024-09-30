import { PhoneInput } from '@react-awesome/phone-input'
import '@react-awesome/phone-input/dist/style.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
function หน้าแรก() {
  return <h2>หน้าแรก</h2>;
}

function เกี่ยวกับเรา() {
  return <h2>เกี่ยวกับเรา</h2>;
}

function ติดต่อ() {
  return <h2>ติดต่อ</h2>;
}
export default function App() {
  return (    
      
      // <BrowserRouter>
      // <div>
      //   <nav>
      //     <ul>
      //       <li>
      //         <Link to="/">หน้าแรก</Link>
      //       </li>
      //       <li>
      //         <Link to="/เกี่ยวกับเรา">เกี่ยวกับเรา</Link>
      //       </li>
      //       <li>
      //         <Link to="/ติดต่อ">ติดต่อ</Link>
      //       </li>
      //     </ul>
      //   </nav>

      //   <Routes>
      //     <Route path="/" element={<หน้าแรก />} />
      //     <Route path="/เกี่ยวกับเรา" element={<เกี่ยวกับเรา />} />
      //     <Route path="/ติดต่อ" element={<ติดต่อ />} />
      //   </Routes>
      // </div>

      <div>
        <PhoneInput />
      </div>
    // </BrowserRouter>
  );
}
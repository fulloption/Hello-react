import React, { useState } from 'react';

function ShoppingList() {
  // สมมุติว่าเรามีรายการสินค้าในตะกร้าแบบนี้
  const [items, setItems] = useState([
    { id: 1, name: '🍎 แอปเปิ้ล' },
    { id: 2, name: ' มะละกอ' },
    { id: 3, name: '🍌 กล้วย' },
    { id: 4, name: '🍊 ส้ม' },
  ]);

  // ฟังก์ชันสำหรับลบสินค้าออกจากตะกร้า
  const handleRemoveItem = (itemId) => {
    setItems(items.filter((item) => item.id !== itemId));
  };

  return (
    <div>
      <h1>🛒 ตะกร้าสินค้า</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name}
            <button onClick={() => handleRemoveItem(item.id)}>
              ❌ ลบ
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;

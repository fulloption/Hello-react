import React, { useState } from 'react';

function ShoppingList() {
  // สมมุติว่าเรามีรายการสินค้าในตะกร้าแบบนี้
  const [items, setItems] = useState([
    { id: 1, name: '🍎 APP' },
    { id: 2, name: ' MARA' },
    { id: 3, name: '🍌 BANA' },
    { id: 4, name: '🍊 ORAN' },
  ]);

  // ฟังก์ชันสำหรับลบสินค้าออกจากตะกร้า
  const handleRemoveItem = (itemId) => {
    setItems(items.filter((item) => item.id !== itemId));
  };

  return (
    <div>
      <h1>🛒 Object List</h1>
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

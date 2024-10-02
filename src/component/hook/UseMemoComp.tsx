import React, { useMemo, useState } from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
  discountPercentage: number;
}

const calculateDiscount = (price: number, discountPercentage: number): number => {
  console.log('Calculating discount...'); // สำหรับตรวจสอบว่ามีการเรียกใช้ฟังก์ชันหรือไม่
  return price * (discountPercentage / 100);
};

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([
    { id: 1, name: 'Product A', price: 100, discountPercentage: 10 },
    { id: 2, name: 'Product B', price: 200, discountPercentage: 15 },
    { id: 3, name: 'Product C', price: 300, discountPercentage: 20 },
    // ... รายการสินค้าอื่นๆ อีกมากมาย
  ]);

  const discountedProducts = useMemo(() => {
    return products.map((product) => ({
      ...product,
      discountedPrice: product.price - calculateDiscount(product.price, product.discountPercentage),
    }));
  }, [products]); // dependencies คือ products

  return (
    <ul>
      {discountedProducts.map((product) => (
        <li key={product.id}>
          {product.name} - ราคา: {product.price} บาท - ราคาหลังหักส่วนลด: {product.discountedPrice} บาท
        </li>
      ))}
    </ul>
  );
};

export default ProductList;

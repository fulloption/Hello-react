import React from 'react';

// HOC สำหรับเพิ่มฟังก์ชันการแสดงข้อความ
const withMessage = (WrappedComponent) => {
  return (props) => {
    return (
      <div>
        <p>ข้อความเพิ่มเติม</p>
        <WrappedComponent {...props} />
      </div>
    );
  };
};

// Component ธรรมดา
const MyComponent = (props) => {
  return (
    <div>
      <p>นี่คือ MyComponent</p>
      <p>ข้อความจาก MyComponent</p>
    </div>
  );
};

// ใช้ HOC เพื่อเพิ่มฟังก์ชันการแสดงข้อความ
const EnhancedComponent = withMessage(MyComponent);

function HOCExample() {
  return (
    <div>
      <h1>ตัวอย่าง High Order Components (HOC)</h1>
      <EnhancedComponent />
    </div>
  );
}

export default HOCExample;

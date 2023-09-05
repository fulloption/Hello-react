import React, { useContext } from 'react';

// สร้าง Context
const MyContext = React.createContext(null);

// Component ที่อยากใช้ Context
function ChildComponent() {
  const contextValue = useContext(MyContext);

  return (
    <div>
      <p>ค่าจาก Context: {contextValue}</p>
    </div>
  );
}

function ParentComponent() {
  return (
    <MyContext.Provider value={"Suthinan Prajuabchok"}>
      <ChildComponent />
    </MyContext.Provider>
  );
}

function App() {
  return (
    <div>
      <h5>React Context Example</h5>
      <ParentComponent />
    </div>
  );
}

export default App;

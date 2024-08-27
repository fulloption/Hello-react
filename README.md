# hello-react
react + Vite
NPM : yarn create vite
Running :  yarn dev --port 4000
2023 Test

    React  
    -Component Basics
        JSX
        Props vs State
        Conditional Rendering
        Composition vs Inheritance
    -Functional Components***
    
    -Basic Hooks   
        useState - จัดการ State ของคอมโพเนนต์ 
        useEffect - ทำ Side Effect เช่น fetch data, set up subscriptions    
        useContext - แชร์ข้อมูลระหว่างคอมโพเนนต์ที่ไม่เกี่ยวข้องโดยตรง
        useReducer - จัดการ State ที่ซับซ้อนด้วย reducer pattern
        useMemo - Memoize ค่าเพื่อเพิ่มประสิทธิภาพ
        useCallback - Memoize ฟังก์ชันเพื่อเพิ่มประสิทธิภาพ
        useRef - เข้าถึง DOM Node โดยตรง
        ** Best Practices สำหรับ React Hooks
        - เรียก Hooks เสมอที่ Top Level ของฟังก์ชัน โดยไม่เรียกใน loop หรือ if 
        - เรียก Hooks เฉพาะภายในฟังก์ชันคอมโพเนนต์เท่านั้น จะไม่ไปเรียกที่อื่น
        - ใช้ Custom Hooks เพื่อแยก Logic ที่ซับซ้อนหรือใช้ร่วมกันหลายคอมโพเนนต์
        - หลีกเลี่ยงการเรียก Hooks ภายในเงื่อนไข 
        - จัดการ Dependencies ของ useEffect อย่างระมัดระวัง
        - ใช้ useCallback(memoize ฟังก์ชัน) และ useMemo(memoize value) เพื่อเพิ่มประสิทธิภาพ
        - หลีกเลี่ยงการใช้ Ref สำหรับจัดการ State Ref ควรใช้สำหรับการเข้าถึง DOM Node โดยตรง
        - ทำความเข้าใจ Lifecycle Methods ของ Hooks -function มีพฤติกรรมที่แตกต่างกัน
    -Additional Hooks   
        useReducer   
        useCallback   
        useMemo   
        useRef   
        useImperativeHandle   
        useLayoutEffect   
        useDebugValue   
        useDeferredValue   
        useTransition   
        useId   
    -Library Hooks   
        useSyncExternalStore   
        useInsertionEffect   
-----------------------------------------
# hello-react
    React + Vite  Project Starter
    NPM : yarn create vite
    Running :  yarn dev --port 4000
    2023 Test

    React  
    -Component Basics
        JSX - (JavaScript XML)
        Props vs State
            Props-ส่งข้อมูลจากพ่อไปลูก อ่านอย่างเดียว
            State-ข้อมูลภายใน Component เปลี่ยนแปลงได้ ทำให้ Component Render ใหม่อีกครั้ง
        Conditional Rendering - การแสดงผลโดยมีเงือนไข เช่น ต้อง login ก่อนถึงแสดงผล
        Composition vs Inheritance
    -Functional Components*** ปัจจุบันนิยมใช้ Function ในการทำ components เท่านั้น
    
    -Basic Hooks   
        useState - จัดการ State ของคอมโพเนนต์ 
        useEffect - ทำ Side Effect เช่น fetch data, set up subscriptions    
        useContext - แชร์ข้อมูลระหว่างคอมโพเนนต์ที่ไม่เกี่ยวข้องโดยตรง
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
        useReducer - จัดการ State ที่ซับซ้อนด้วย reducer pattern
        useCallback - Memoize ฟังก์ชันเพื่อเพิ่มประสิทธิภาพ 
        useMemo - Memoize ค่าเพื่อเพิ่มประสิทธิภาพ  
        useRef - เข้าถึง DOM Node โดยตรง
        useImperativeHandle - เข้าถึงและควบคุม Component Child จาก Parent
        useLayoutEffect - รัน Effect หลังการ Layout คล้ายกับ useEffect
        useDebugValue - แสดงค่า Debug ใน React DevTools
        useDeferredValue -เลื่อนการอัปเดตค่าเพื่อเพิ่มประสิทธิภาพ
        useTransition - จัดการการเปลี่ยนแปลง UI อย่างราบรื่น
        useId - สร้าง ID ที่ไม่ซ้ำกันสำหรับองค์ประกอบ
    -Library Hooks   
        useSyncExternalStore -จัดการ State จากภายนอก React   
        useInsertionEffect - รัน Effect หลังการแทรกองค์ประกอบ
-----------------------------------------
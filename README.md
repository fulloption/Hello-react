# hello-react
    React + Vite  Project Starter
    NPM : yarn create vite
    Running :  yarn dev --port 4000
    2023 Test

    React  
    -HTML Interface
    -----
    -DOMS
    -ReactDOM
        - ReactDOM.render(): ฟังก์ชันนี้ใช้สำหรับเรนเดอร์องค์ประกอบ React ไปยัง DOM element ที่ระบุ
        - ReactDOM.createRoot(): เป็นวิธีที่แนะนำสำหรับการเรนเดอร์องค์ประกอบใน React 18 ขึ้นไป ช่วยให้การจัดการ lifecycle ของแอปพลิเคชันทำได้ง่ายขึ้น
    -----
    -Components
    -Component Basics
        JSX - (JavaScript XML) เปลี่ยนไปใช้ TSX (TypeScript JSX)
        Props vs State
            Props-ส่งข้อมูลจากพ่อไปลูก อ่านอย่างเดียว
            State-ข้อมูลภายใน Component เปลี่ยนแปลง ทำให้ Component Render ใหม่อีกครั้ง
        Conditional Rendering - การแสดงผลโดยมีเงือนไข เช่น ต้อง login ก่อนถึงแสดงผล
        Composition vs Inheritance[ลักษณะการเขียนแบบ class ไม่นิยมใน React]
            Composition เป็นที่นิยมมากกว่า
            1.Functional จะไม่มีสถานะ และไม่มีโครงสร้างแบบ class-based
            2.props ซึ่งเป็นค่าที่ไม่เปลี่ยนแปลงที่ส่งผ่านจาก component พ่อไปยัง component ลูก
            3.HOCs เป็นรูปแบบที่ช่วยให้สามารถรวม component ต่างๆ เข้าด้วยกันได้โดยการห่อหุ้มด้วยฟังก์ชันการทำงานเพิ่มเติม
    -Functional Components*** ปัจจุบัน[2024-Sep]นิยมใช้ Function ในการทำ components เท่านั้น
    
    -Basic Hooks
        useState - จัดการ State ของคอมโพเนนต์
        useEffect - ทำ Side Effect เช่น fetch data, set up subscriptions / event
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

    Tool Lib
        [Move faster with intuitive React UI tools](https://mui.com/)
        [React hooks for axios](https://www.npmjs.com/package/axios-hooks)
        [open-source software for web developers](https://tanstack.com/)


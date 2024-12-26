import { VirtualizedList, ShoppingCart, Crud, DarkModeToggle, FormValidation, InfiniteScroll, ExportCSV } from "./exam";

function App() {
  return (
    <>
      {/* 1. สร้าง Virtualized List Component */}
      {/* <VirtualizedList /> */}

      {/* 
        2. สร้าง Custom Hook สำหรับ Pagination
        8. สร้างระบบการจัดการตะกร้าสินค้า 
        10. ใช้ Redux Toolkit ในการจัดการ State
      */}
      <ShoppingCart />

      {/* 3. สร้างระบบจัดการสินค้า (CRUD) */}
      {/* <Crud /> */}

      {/* 4. ทำ Dark Mode Toggle */}
      {/* <DarkModeToggle /> */}

      {/* 6. ทำ Form Validation */}
      {/* <FormValidation /> */}

      {/* 7. พัฒนา Infinite Scroll */}
      {/* <InfiniteScroll /> */}

      {/* 9. Export ข้อมูลเป็น CSV */}
      {/* <ExportCSV /> */}
    </>
  )
}

export default App;
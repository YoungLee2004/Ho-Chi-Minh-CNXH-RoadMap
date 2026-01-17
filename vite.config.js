import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/', // <--- Sửa thành dấu gạch chéo đơn (hoặc xóa luôn dòng này cũng được)
})
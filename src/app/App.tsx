import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import { Sprint1 } from '../homeworks/sprint-1/sprint-1.tsx'
import { Sprint2 } from '../homeworks/sprint-2/sprint-2.tsx'
import { Header } from '@/layout/Header/Header.tsx'
import { Sprint3 } from '../homeworks/sprint-3/sprint-3.tsx'
import { Sprint4 } from '@/homeworks/sprint-4/sprint-4.tsx'
import { Footer } from '@/layout/Footer/Footer.tsx'

export function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="container">
        <Routes>
          <Route path="/" element={<Sprint1 />} />
          <Route path="sprint-2" element={<Sprint2 />} />
          <Route path="sprint-3" element={<Sprint3 />} />
          <Route path="sprint-4" element={<Sprint4 />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

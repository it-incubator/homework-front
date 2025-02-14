import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import { Sprint1 } from '../homeworks/sprint-1/sprint-1.tsx'
import { Sprint2 } from '../homeworks/sprint-2/sprint-2.tsx'
import { Header } from '../layout/header/header.tsx'

export function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Sprint1 />} />
          <Route path="sprint-2" element={<Sprint2 />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

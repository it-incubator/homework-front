import './App.css'
import { Homework1 } from './homeworks/sprint-1/hw-1/homework-1.tsx'
import { Homework2 } from './homeworks/sprint-1/hw-2/homework-2.tsx'
import { Homework3 } from './homeworks/sprint-1/hw-3/homework-3.tsx'
import { Homework4 } from './homeworks/sprint-1/hw-4/homework-4.tsx'
import { Homework5 } from './homeworks/sprint-2/hw-5/homework-5.tsx'
import { Homework6 } from './homeworks/sprint-2/hw-6/homework-6.tsx'
import { Homework7 } from './homeworks/sprint-2/hw-7/homework-7.tsx'

export function App() {
  return (
    <>
      <h2>Sprint 1</h2>
      <Homework1 />
      <Homework2 />
      <Homework3 />
      <Homework4 />

      <h2>Sprint 2</h2>
      <Homework5 />
      <Homework6 />
      <Homework7 />
    </>
  )
}

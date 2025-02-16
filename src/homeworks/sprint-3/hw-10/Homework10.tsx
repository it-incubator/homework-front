import { useState } from 'react'
import s from './Homework10.module.css'

/*
 * Обычно сортировку и фильтрацию данных делают на сервере, но иногда бывает нужно сделать это на клиенте.
 *
 * 📝 Задача:
 * 1. Реализовать сортировку по возрасту (по убыванию и возрастанию) при клике на заголовок "Возраст"
 * - изначально отображаются исходные неотсортированные данные
 * - при первом клике на заголовок "Возраст" данные сортируются по возрастанию (asc)
 * - при втором клике на заголовок "Возраст" данные сортируются по убыванию (desc)
 * - при третьем клике на заголовок "Возраст" отображаются исходные неотсортированные данные
 *
 * 2. Реализовать фильтрацию по возрасту (показать только 18+)
 * - при клике на чекбокс "Показать только 18+" отображаются только те данные, у которых возраст >= 18 (согласно сортировке)
 * - при повторном клике на чекбокс "Показать только 18+" отображаются все данные (согласно сортировке)
 * */

type Person = {
  id: number
  name: string
  age: number
}

type SortDirection = 'asc' | 'desc'

// Не меняйте исходные данные - они нужны для проверки!
const initialData: Person[] = [
  { id: 1, name: 'Александр', age: 66 },
  { id: 2, name: 'Коля', age: 16 },
  { id: 3, name: 'Виктор', age: 44 },
  { id: 4, name: 'Дмитрий', age: 40 },
  { id: 0, name: 'Кот', age: 3 },
  { id: 5, name: 'Ирина', age: 55 },
]

export const Homework10 = () => {
  const [sortDirection, setSortDirection] = useState<SortDirection | null>(null)
  const [filterAdults, setFilterAdults] = useState(false)

  const handleSort = () => {
    // 📝 Завершите реализацию
  }

  const handleFilter = () => {
    // 📝 Завершите реализацию
  }

  // 📝 Завершите реализацию
  const sortedData = initialData

  const arrow = sortDirection && (sortDirection === 'asc' ? '▲' : '▼')

  return (
    <section id="hw10">
      <h3>Homework 10 - Сортировка и фильтрация</h3>
      <label className={s.checkboxLabel}>
        <input
          id="hw-10-filter-checkbox"
          type="checkbox"
          checked={filterAdults}
          onChange={handleFilter}
          className={s.checkbox}
        />
        Показать только 18+
      </label>
      <table className={s.table}>
        <thead>
          <tr>
            <th>Имя</th>
            <th id="hw-10-sort-button" className={s.thAge} role="button" tabIndex={0} onClick={handleSort}>
              Возраст {arrow}
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((person) => (
            <tr key={person.id} id={`hw-10-person-${person.id}`}>
              <td>{person.name}</td>
              <td>{person.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}

import { useAppDispatch } from '@/shared/hooks/useAppDispatch'
import { useEffect, useState } from 'react'
import { fetchUsersTC, selectUsers } from './model/users-slice'
import { useAppSelector } from '@/shared/hooks/useAppSelector'
import { TextField } from '@/homeworks/sprint-2/hw-7/TextField/TextField'

/*
 * 🧙‍♂️ Дебаунс (debounce) - важная техника оптимизации в современной веб-разработке.
 * Часто используется для оптимизации поисковых запросов. Познакомимся с ней в данном задании.
 *
 * Мы рендерим список пользователей, который приходит с сервера.
 *
 * Откройте Network и обратите внимание на то, что при каждом вводе символа в поле поиска,
 * отправляется запрос на сервер. Если мы печатаем быстро, то можно увидеть множество запросов.
 *
 * Это нагружает сервер и замедляет скорость работы приложения.
 *
 * Для решения этой проблемы мы можем использовать кастомный хук useDebounce.
 * Его суть в том, что он будет возвращать значение, которое будет обновляться не чаще, чем указано в параметре delay.
 * Например, если мы быстро напишем поисковой запрос, то запрос на сервер будет отправлен только через заданное время после ввода последнего символа.
 *
 * 📝 1. Завершите реализацию хука useDebounce
 * - Данный хук принимает значение и задержку.
 *  ❗ В качестве задержки передавайте 500мс - это необходимо для автоматической проверки задания
 * - Если значение не изменялось за указанный период, то возвращается это значение
 * - Если значение изменялось, то возвращается новое значение, через указанный период
 *
 * 📝 2. Используйте хук useDebounce для оптимизации поиска пользователей
 *
 * 🧙‍♂️ Для реализации вам скорее всего понадобятся `useEffect`, `setTimeout`, `clearTimeout`
 * 🧙‍♂️ Вы можете попробовать найти готовую реализацию, но попробуйте затем написать её самостоятельно (Подобное задание часто даётся на собеседованиях).
 */

const DEBOUNCE_DELAY = 500

export const Homework17 = () => {
  const dispatch = useAppDispatch()
  const users = useAppSelector(selectUsers)

  const [name, setName] = useState('')
  // 📝 Используйте хук useDebounce для оптимизации поиска пользователей

  useEffect(() => {
    dispatch(fetchUsersTC({ name }))
  }, [dispatch, name])

  return (
    <section id={'hw17'}>
      <h3>Homework 17 - Debounce</h3>
      <TextField id="hw17-input" label="Поиск по имени" value={name} onChange={(e) => setName(e.target.value)} />
      <ul id="hw17-users">
        {users.map((user, index) => (
          <li key={user.id}>
            <span>{user.name}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}

// 🧙‍♂️ Для типизации используем Generic
export function useDebounce<T>(value: T, delay: number = DEBOUNCE_DELAY): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value)

  // 📝 Завершите реализацию

  return debouncedValue
}

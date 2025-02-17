import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ThemeMode } from '@/app/app-reducer.ts'
import s from './ThemeSwitcher.module.css'

/*
 * Sprint-3, Homework-11
 *  📝 Завершите реализацию
 * */

export const THEME_KEY = 'themeMode' // ключ в LocalStorage

export const ThemeSwitcher = () => {
  const dispatch = useDispatch()
  const themeMode = 'light' // 📝 1. Получи текущую тему из Redux

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedTheme = e.target.value as ThemeMode
    // 📝  2. Отправьте выбранную тему в redux state
  }

  // 🧙‍♂️ При монтировании компонента проверяем сохраненную тему в localStorage
  // и если она есть, то отправляем ее в redux state
  useEffect(() => {
    const savedTheme = localStorage.getItem(THEME_KEY) as ThemeMode | null
    if (savedTheme) {
      // 📝 3. Отправьте сохранённую тему в redux state
    }
  }, [dispatch])

  // 🧙‍ При изменении темы в redux state, записываем ее в localStorage
  // и устанавливаем на html элементе атрибут data-theme
  useEffect(() => {
    if (themeMode) {
      localStorage.setItem(THEME_KEY, themeMode)
      // @ts-expect-error - после выполнения задания можно удалить!
      if (themeMode === 'system') {
        // проверяем, предпочитает ли пользователь тёмную тему в настройках своей операционной системы или браузера
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
        document.documentElement.setAttribute('data-theme', prefersDark ? 'dark' : 'light')
      } else {
        document.documentElement.setAttribute('data-theme', themeMode)
      }
    }
  }, [themeMode])

  return (
    <div id="hw11" className={s.box}>
      <ul className={s.themeList}>
        <li className={s.themeItem}>
          <label htmlFor="hw11-light">
            <input
              type="radio"
              id="hw11-light"
              name="theme"
              value="light"
              checked={themeMode === 'light'}
              onChange={handleChange}
            />
            Светлая
          </label>
        </li>
        <li className={s.themeItem}>
          <label htmlFor="hw11-dark">
            <input
              type="radio"
              id="hw11-dark"
              name="theme"
              value="dark"
              // @ts-expect-error - после выполнения задания можно удалить!
              checked={themeMode === 'dark'}
              onChange={handleChange}
            />
            Тёмная
          </label>
        </li>
        <li className={s.themeItem}>
          <label htmlFor="hw11-system">
            <input
              type="radio"
              id="hw11-system"
              name="theme"
              value="system"
              // @ts-expect-error - после выполнения задания можно удалить!
              checked={themeMode === 'system'}
              onChange={handleChange}
            />
            Системная
          </label>
        </li>
      </ul>
    </div>
  )
}

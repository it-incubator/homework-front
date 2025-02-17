import { createAction, createReducer } from '@reduxjs/toolkit'
import { RootState } from '@/app/store.ts'

/*
 * Sprint-3, Homework-11
 * 📝 Завершите реализацию
 * 1. Добавьте changeThemeModeAC
 * 2. Обработайте его в .addCase в appReducer: он должен менять themeMode на тему из action.payload
 * 3. Добавьте selectThemeMode
 * Продолжите работу в файле widgets/theme-switcher/ThemeSwitcher.tsx
 * */

export type ThemeMode = 'dark' | 'light' | 'system'

const initialState = {
  themeMode: 'light' as ThemeMode,
  isLogged: false,
}

export const appReducer = createReducer(initialState, (builder) => {})

import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { appReducer, ThemeMode } from './app-reducer.ts'
import { habitsReducer } from '@/homeworks/sprint-3/hw-9/model/habits-reducer.ts'
import { THEME_KEY } from '@/widgets/theme-switcher/ThemeSwitcher.tsx'

const rootReducer = combineReducers({
  habits: habitsReducer,
  app: appReducer,
})

export const store = configureStore({
  reducer: rootReducer,
  preloadedState: {
    app: {
      themeMode: (localStorage.getItem(THEME_KEY) as ThemeMode) || 'light',
    },
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

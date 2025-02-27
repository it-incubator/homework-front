import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { appReducer, ThemeMode } from './app-reducer'
import { habitsReducer } from '@/homeworks/sprint-3/hw-9/model/habits-reducer'
import { THEME_KEY } from '@/widgets/theme-switcher/ThemeSwitcher'
import { studentsSlice } from '@/homeworks/sprint-4/hw-13/model/students-slice'
import { animeSlice } from '@/homeworks/sprint-4/hw-14/model/anime-slice'
import { wizardWorldSlice } from '@/homeworks/sprint-4/hw-16/model/wizard-world-slice'

const rootReducer = combineReducers({
  habits: habitsReducer,
  app: appReducer,
  [studentsSlice.name]: studentsSlice.reducer,
  [animeSlice.name]: animeSlice.reducer,
  [wizardWorldSlice.name]: wizardWorldSlice.reducer,
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

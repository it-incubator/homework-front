import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { habitsReducer } from '../homeworks/sprint-3/hw-9/model/habits-reducer.ts'

const rootReducer = combineReducers({
  habits: habitsReducer,
})

export const store = configureStore({
  reducer: rootReducer,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

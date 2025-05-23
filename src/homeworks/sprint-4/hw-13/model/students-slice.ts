import { createSlice } from '@reduxjs/toolkit'
import { Student } from '../students-fake-api'

/* 📝 Создайте fetchStudentsTC и завершите работу над studentsSlice */

export const studentsSlice = createSlice({
  name: 'students',
  initialState: {
    students: [] as Student[],
  },
  reducers: {},
  extraReducers: (builder) => {},
  selectors: {},
})

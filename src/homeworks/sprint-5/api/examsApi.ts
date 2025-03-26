import axios from 'axios'
import { GetUsersParams, GetUsersResponse } from './exams.types'

const instance = axios.create({
  baseURL: 'https://exams-frontend.kimitsu.it-incubator.io/api',
})

export const examsApi = {
  getUsers(params: GetUsersParams) {
    return instance.get<GetUsersResponse>('/users', { params })
  },
}

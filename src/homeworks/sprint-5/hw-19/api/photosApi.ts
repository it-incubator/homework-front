import { baseExamsApi } from '../../examsApi'

/* 1. 📝 Создайте два эндпоинта в `api/photosApi'
 * - GET /photos
 * - PUT /photos/{id}
 * swagger: https://exams-frontend.kimitsu.it-incubator.io/api#/%F0%9F%93%B8%20Photos
 */
export const photosApi = baseExamsApi.injectEndpoints({
  endpoints: (build) => ({
    // getPhotos
    // updatePhoto
  }),
})

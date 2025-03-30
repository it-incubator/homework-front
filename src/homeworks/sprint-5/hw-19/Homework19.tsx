import styles from './Homework19.module.css'

/*
 * В этом задании вам нужно будет реализовать работу с эндпоинтами в RTK Query.
 * Мы должны отобразить фотографии, а также иметь возможность обновлять их заголовки с помощью кнопки "Update title".
 *
 * Задание:
 * 1. Создайте два эндпоинта в `api/photosApi'
 * - Нам понадобятся `getPhotos` и `updatePhoto`
 * - Ссылка на swagger: https://exams-frontend.kimitsu.it-incubator.io/api#/%F0%9F%93%B8%20Photos
 * - Укажите `providesTags` и `invalidatesTags`
 *
 * 2. Отобразите фотографии в компоненте Homework19
 * - Для рендера фотографии используйте компонент PhotoItem.tsx
 *
 * 3. В компоненте PhotoItem реализуйте обновление title
 * - При обновлении фотографии должен инвалидироваться кеш и отправиться новый запрос за фотографиями
 * - ❗ Наш учебный бэкенд сгенерирует новый title независимо от отправленных данных
 */
export const Homework19 = () => {
  // 📝 2.1 Получите фотографии с сервера


  return (
    <section id={'hw19'}>
      <h3>Homework 19 - RTK Query cache invalidation</h3>
      <div id="hw19-grid" className={styles.photosGrid}>
        {/* 📝 2.2 Отрендерите фотографии сюда. Используйте компонент PhotoItem.tsx  */}
      </div>
    </section>
  )
}

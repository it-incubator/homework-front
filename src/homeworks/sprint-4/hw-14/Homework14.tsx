import { ChangeEvent, useEffect, useState } from 'react'
import s from './Homework14.module.css'
import { AnimeCard } from '@/homeworks/sprint-4/hw-14/AnimeCard/AnimeCard.tsx'
import { TextField } from '@/homeworks/sprint-2/hw-7/TextField/TextField.tsx'
import { Anime, animeApi } from '@/homeworks/sprint-4/hw-14/anime-fake-api.ts'

/*
 * Во многих случаях хорошим решением будет хранить state не в useState или Redux, а в URL!
 * Это позволяет делиться ссылкой на страницу с другими пользователями, сохранять состояние при обновлении страницы,
 * или при переходе по истории браузера.
 *
 * В данный момент приложение полностью функционально, но не сохраняет состояние при обновлении страницы.
 * 📝 Ваша задача - сохранить состояние фильтров в URL. Можете удалить из компонента states, отвечающие за фильтры.
 * - используйте хук useSearchParams из библиотеки react-router для получения и установки параметров поиска в URL.
 *
 * 🧙‍♂️ Можете посмотреть видео про useSearchParams от Игоря из плейлиста "React-router-dom
 *
 * 🧙‍♂️ Функция setSearchParams может принимать функцию, которая принимает предыдущее значение (URLSearchParams) и возвращает новое.
 * Пример:
 * ```
 * setSearchParams((prev) => {
 *   prev.set('queryKey', 'new value') // добавить или изменить значение к параметрам поиска
 *   return prev
 * })
 * */

export const Homework14 = () => {
  const [anime, setAnime] = useState<Anime[]>([])
  const [filterTitle, setFilterTitle] = useState('') // данный state можно удалить
  const [isFavorite, setIsFavorite] = useState(false) // данный state можно удалить

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFilterTitle(e.target.value)
  }

  const handleFavoriteChange = (e: ChangeEvent<HTMLInputElement>) => {
    setIsFavorite(e.target.checked)
  }

  useEffect(() => {
    animeApi
      .getAnime({
        title: filterTitle,
        isFavorite,
      })
      .then((anime) => {
        setAnime(anime)
      })
  }, [isFavorite, filterTitle])

  return (
    <section id="hw14">
      <h3>Homework 14 - Search Params ^_^</h3>
      <div className={s.container}>
        <div className={s.filters}>
          <TextField
            id="hw14-title-input"
            className={s.textField}
            placeholder="Поиск по названию"
            aria-label="Поиск по названию"
            value={filterTitle}
            onChange={handleNameChange}
          />
          <label>
            <input id="hw14-favorite-checkbox" type="checkbox" checked={isFavorite} onChange={handleFavoriteChange} />
            Только любимое аниме
          </label>
        </div>
        <div className={s.grid}>
          {anime.map((anime) => (
            <AnimeCard key={anime.id} anime={anime} />
          ))}
        </div>
      </div>
    </section>
  )
}

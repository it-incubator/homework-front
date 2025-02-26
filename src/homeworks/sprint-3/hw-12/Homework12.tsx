import s from './Homework12.module.css'
import { useState } from 'react'
import { Button } from '@/homeworks/sprint-2/hw-7/Button/Button.tsx'

/* 📝
 * В данном задании необходимо реализовать часы, которые отображают текущее время при нажатии на кнопку start.
 * - если таймер запущен, то кнопка start должна быть задизейблена
 * - если таймер не запущен, то кнопка stop должна быть задизейблена
 * - при наведении на часы должна отображаться дата (в формате: February, 18.02.2025).
 * - при клике на кнопку stop часы должны остановиться.
 * - текущее время должно сохраняться в LocalStorage и отображаться при обновлении страницы.
 *
 * 🧙‍ Для работы с датами часто используют библиотеки (например, date-fns), но мы попробуем
 * использовать нативные возможности JS.
 *
 * 🧙‍ Немного терминологии. locale (локаль) — идентификатор для установки языка и предпочитаемого форматирования (дат, времени и др.).
 * Состоит из кода языка, и кода страны/региона (код региона не обязателен).
 * Примеры:
 * - `en-US` — английский для США
 * - `en-GB` — английский для Великобритании
 * - `ru-RU` — русский для России
 * - `nl` — голландский, без указания региона
 * */

const DATE_KEY = 'hw9-date' // ключ для LS
const getInitialDate = () => new Date(localStorage.getItem(DATE_KEY) || Date.now())

export const Homework12 = () => {
  const [timerId, setTimerId] = useState<number | undefined>(undefined)

  // 🧙‍♂️ В качестве initial state в useState, можно передать функцию => эта функция будет вызвана для установки значения.
  // Вызов функции будет выполнен только один раз - при ререндерах повторных вызовов не будет.
  const [date, setDate] = useState<Date>(getInitialDate)

  const [show, setShow] = useState(false)

  const start = () => {
    /*
     * 📝 1. запустить часы (должно отображаться реальное время) - https://learn.javascript.ru/settimeout-setinterval#setinterval
     *
     * 📝 2. сохранить ID таймера в state
     * 🧙‍♂️ setInterval возвращает ID таймера. По умолчанию TypeScript воспринимает setInterval как функцию из Node.js,
     * а не браузерного API и типизирует ID как NodeJS.Timer. Чтобы подсказать TypeScript, можно явно указать,
     * что мы работаем с браузерным API, и вызвать функцию как свойство window: `window.setInterval(() => {...})`
     *
     * 📝 3. сохранять новую дату в LocalStorage
     * 🧙‍♂️ В LocalStorage данные хранятся в виде строки. Преобразовать дату в строку можно с помощью метода .toString()
     */
  }

  const stop = () => {
    window.clearInterval(timerId)
    setTimerId(undefined)
  }

  const onMouseEnter = () => {
    // 📝 показать дату если наведена мышка
  }

  const onMouseLeave = () => {
    // 📝 спрятать дату если мышка не наведена
  }

  // 📝 отобразить время в формате HH:mm:ss (например: 23:02:03 или 00:00:01)
  // 🧙‍♂️ Для форматирования времени можно использовать методы объекта Date,
  // например .toLocaleTimeString(), передав соответствующую локаль (`Ru-ru`)
  const stringTime = 'date -> time'

  // 📝 отобразить дату в формате dd.MM.YYYY (например, 18.02.2025)
  // 🧙‍ Можно использовать метод .toLocaleDateString(), передав соответствующую локаль (`Ru-ru`)
  const stringDate = 'date -> date'

  // 🧙‍ Для форматирования можно также использовать встроенный JS-объект Intl, предоставляющий Internationaliztion API.
  // Он позволяет форматировать числа и даты, в зависимости от локали.
  // (https://learn.javascript.ru/intl#intl-datetimeformat)
  // Можно также использовать методы объекта Date, например .toLocaleDateString(), передав локаль и опции
  // например, (new Date).toLocaleDateString('Ru-ru', { weekday: 'long' })
  // (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString)

  // 📝 день недели на английском (например, Tuesday)
  const stringDay = 'date -> day'
  // 📝 месяц на английском (например, February)
  const stringMonth = 'date -> month'

  return (
    <section id="hw12">
      <h3>Homework 12 - Работа с Date</h3>

      <div className={s.clock}>
        <div id={'hw9-watch'} className={s.watch} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
          <span id={'hw9-day'}>{stringDay}</span>,{' '}
          <span id={'hw9-time'}>
            <time>{stringTime}</time>
          </span>
          {show && (
            <div id={'hw9-more'} className={s.more}>
              <span id={'hw9-month'}>{stringMonth}</span>, <time id={'hw9-date'}>{stringDate}</time>
            </div>
          )}
        </div>

        <div className={s.buttonBox}>
          <Button
            id={'hw9-button-start'}
            disabled={true} // 📝 задизэйблить, если таймер запущен
            onClick={start}>
            start
          </Button>
          <Button
            id={'hw9-button-stop'}
            disabled={true} // 📝 задизэйблить, если таймер не запущен
            onClick={stop}>
            stop
          </Button>
        </div>
      </div>
    </section>
  )
}

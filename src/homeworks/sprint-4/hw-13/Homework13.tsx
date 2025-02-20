import { Student, studentsApi } from './students-fake-api.ts'
import styles from './Homework13.module.css'
import DatePicker, { registerLocale } from 'react-datepicker'
import { ru } from 'date-fns/locale/ru'
import { TextField } from '@/homeworks/sprint-2/hw-7/text-field/text-field.tsx'
import { StudentsTable } from './StudentsTable/StudentsTable.tsx'

/*
 * react-datepicker - это популярная библиотека для работы с датами и временем. В данном задании мы с ней познакомимся!
 * В MUI есть свой компонент для работы с датами, но react-datepicker более гибкий и настраиваемый (и не требует тяжеловесной
 * установки MUI).
 *
 * 📝 Вам необходимо реализовать компонент Homework13, который будет отображать список студентов с фильтрацией по дате.
 *
 * 1. Получите список студентов с фейкового "сервера" при помощи studentsApi.getStudents() и отобразите данные в компоненте StudentsTable.
 * 2. Добавьте фильтрацию по дате регистрации студента. Мы должны иметь возможность выбрать диапазон дат с помощью двух DatePicker'ов.
 * Передайте выбранные даты в studentsApi.getStudents(). Допустимо передавать только startDate или endDate, оба параметра или не передавать ничего.
 * В доработке нуждается только компонент Homework13, остальные файлы не требуют изменений.
 *
 * 🧙‍ При необходимости, можете обратиться к документации react-datepicker: https://reactdatepicker.com
 * 🧙‍ Мы используем локаль 'ru' для DatePicker (она уже подключена и готова к использованию).
 * Информация о настройке локали: https://github.com/Hacker0x01/react-datepicker/?tab=readme-ov-file#localization
 * */

registerLocale('ru', ru)

export const Homework13 = () => {
  // 📝 Напишите необходимую логику для хранения стейта и получения студентов из studentsApi с фильтрацией по диапазону дат

  return (
    <section id="hw13">
      <h3>Homework 13 - Date range фильтрация</h3>
      <div className={styles.filters}>
        <div>
          <DatePicker
            id="hw13-start-date"
            autoComplete="off"
            selected={null} // 📝 Добавьте необходимое значение
            onChange={() => {}} // 📝 Добавьте обработчик
            placeholderText="Дата от"
            customInput={<TextField />} // 🧙‍♂️ Мы можем использовать свой компонент в качестве кастомного инпута
            locale="ru" // 🧙‍♂️ Можно установить локаль для DatePicker
            dateFormat="dd.MM.yyyy" // 🧙‍♂️ Можно установить формат даты
          />
        </div>
        <div>
          <DatePicker
            id="hw13-end-date"
            autoComplete="off"
            selected={null} // 📝 Добавьте необходимое значение
            onChange={() => {}} // 📝 Добавьте обработчик
            customInput={<TextField autoComplete="off" />}
            placeholderText="Дата до"
            locale="ru"
            dateFormat="dd.MM.yyyy"
          />
        </div>
      </div>
      <StudentsTable students={[]} /> {/* 📝 Передайте студентов полученных из studentsApi в компонент */}
    </section>
  )
}

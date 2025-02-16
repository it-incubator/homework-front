import { TextField } from '../../../../sprint-2/hw-7/text-field/text-field.tsx'
import { FormEvent, useState } from 'react'
import { Button } from '../../../../sprint-2/hw-7/button/button.tsx'
import s from './NewHabitForm.module.css'

// 📝 Закончите логику добавления привычки

export const NewHabitForm = () => {
  const [newHabitTitle, setNewHabitTitle] = useState('')
  const isEmpty = newHabitTitle.trim() === ''

  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    setNewHabitTitle(e.currentTarget.value)
  }

  const handleAddHabit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (isEmpty) return
    setNewHabitTitle('')
  }

  return (
    <form className={s.form} onSubmit={handleAddHabit}>
      <TextField
        label="Ваша новая привычка"
        className={s.input}
        value={newHabitTitle}
        onChange={handleChange}
        name="title"
      />
      <Button type="submit" disabled={isEmpty}>
        Добавить
      </Button>
    </form>
  )
}

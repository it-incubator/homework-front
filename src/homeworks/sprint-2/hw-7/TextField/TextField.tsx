import { ComponentProps, ReactNode, useId } from 'react'

import { clsx } from 'clsx'

import s from './TextField.module.css'

export type TextFieldProps = {
  errorMessage?: string
  label?: ReactNode
} & ComponentProps<'input'>

export const TextField = ({ className, errorMessage, id, label, ...rest }: TextFieldProps) => {
  const showError = !!errorMessage && errorMessage.length > 0

  const generatedId = useId() // генерируем уникальный id для того, чтобы связать label и input
  const inputId = id || generatedId // если id передан в пропсах, то используем его, иначе используем сгенерированный

  return (
    <div className={clsx(s.box, className)}>
      {label && (
        <label htmlFor={inputId} className={s.label}>
          {label}
        </label>
      )}

      {/*
       * clsx позволяет удобно комбинировать CSS-классы.
       * Пример: clsx(s.input, showError && s.error)
       * Всегда добавит s.input, а s.error — только если showError === true.
       */}
      <input className={clsx(s.input, showError && s.error)} id={inputId} type={'text'} {...rest} />

      {showError && <p className={s.error}>{errorMessage}</p>}
    </div>
  )
}

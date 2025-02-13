import { ComponentProps } from 'react'

import s from './button.module.css'

export type ButtonVariant = 'primary' | 'secondary'

export type ButtonProps = {
  fullWidth?: boolean
  variant?: ButtonVariant
} & ComponentProps<'button'>

// 📝 Завершите реализацию компонента Button согласно заданию
export const Button = (props: ButtonProps) => {
  return <button {...props} />
}

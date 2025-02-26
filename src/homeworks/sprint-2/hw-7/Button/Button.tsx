import { ComponentProps } from 'react'

import s from './Button.module.css'

export type ButtonVariant = 'primary' | 'secondary'

export type ButtonProps = {
  fullWidth?: boolean
  variant?: ButtonVariant
} & ComponentProps<'button'>

// 📝 Завершите реализацию компонента Button согласно заданию
export const Button = ({ fullWidth, ...props }: ButtonProps) => {
  return <button {...props} />
}

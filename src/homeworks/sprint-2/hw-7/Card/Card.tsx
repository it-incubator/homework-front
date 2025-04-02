import { ComponentProps, ReactNode } from 'react'
import { clsx } from 'clsx'
import s from './Card.module.css'

type CardProps = {
  headerContent?: ReactNode
  children: ReactNode
  footerContent?: ReactNode
} & ComponentProps<'div'>

export const Card = ({ headerContent, footerContent, children, className, ...props }: CardProps) => {
  return (
    /*
     * clsx объединяет классы компонента:
     * всегда добавляется s.box,
     * а также className, если его передали через пропсы
     */
    <div className={clsx(s.box, className)} {...props}>
      {headerContent && <header>{headerContent}</header>}
      {children}
      {footerContent && <footer>{footerContent}</footer>}
    </div>
  )
}

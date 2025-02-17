import { Link, NavLink } from 'react-router'
import s from './header.module.css'
import { Logo } from '../../assets/logo.tsx'
import { clsx } from 'clsx'
import { ThemeSwitcher } from '@/widgets/theme-switcher/ThemeSwitcher.tsx'

const NAV_LINKS = [
  { to: '/', label: 'Sprint 1', id: 'nav-link-sprint-1' },
  { to: '/sprint-2', label: 'Sprint 2', id: 'nav-link-sprint-2' },
  { to: '/sprint-3', label: 'Sprint 3', id: 'nav-link-sprint-3' },
]

export const Header = () => {
  return (
    <header className={s.header}>
      <div className={clsx('container', s.container)}>
        <Link to="https://it-incubator.io/education/front-end" target="_blank" rel="noopener noreferrer">
          <Logo width={150} height={40} />
        </Link>

        <nav>
          <ul className={s.list}>
            {NAV_LINKS.map(({ to, label, id }) => (
              <li key={id}>
                <NavLink className={s.link} to={to} end={to === '/'} id={id}>
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className={s.themeSwitcherBox}>
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  )
}

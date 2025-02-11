import s from './filters.module.css'
import { Genre } from '../homework-6.tsx'
import { getGenreEmoji } from '../utils/get-genre-emoji.ts'

type FiltersProps = {
  filter: any
  setFilter: any
}

const genres: Array<{ label: string; value: Genre | null; emoji?: string }> = [
  { label: 'All', value: null },
  { label: `Dev ${getGenreEmoji('Dev')}`, value: 'Dev' },
  { label: `Fantasy ${getGenreEmoji('Fantasy')}`, value: 'Fantasy' },
  { label: `Classic ${getGenreEmoji('Classic')}`, value: 'Classic' },
]

export const Filters = (props: FiltersProps) => {
  return (
    <ul className={s.list}>
      {genres.map(({ label, value }) => (
        <li key={label} className={props.filter === value ? s.active : ''}>
          <button
            id={`hw6-filter-${value || 'all'}`}
            // добавьте обработчик события
          >
            {label}
          </button>
        </li>
      ))}
    </ul>
  )
}

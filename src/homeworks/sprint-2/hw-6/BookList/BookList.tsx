import { Book, Genre } from '../Homework6.tsx'
import s from './BookList.module.css'
import { getGenreEmoji } from '../utils/get-genre-emoji.ts'

// 📝 Замените any
type BookListProps = {
  books: any
  handleDeleteBook: any
}

export const BookList = (props: BookListProps) => {
  return (
    <ul className={s.list}>
      {/* 📝 замените any */}
      {props.books.map((book: any) => (
        <li id={`hw6-book-item-${book.id}`} key={book.id} className={s.item}>
          <span>{getGenreEmoji(book.genre)}</span>
          <span id={`hw6-book-title-${book.id}`}>{book.title}</span>
          <button
            id={`hw6-delete-button-${book.id}`}
            aria-label={`Delete book`}
            // 📝 добавьте обработчик события
          >
            ✖
          </button>
        </li>
      ))}
    </ul>
  )
}

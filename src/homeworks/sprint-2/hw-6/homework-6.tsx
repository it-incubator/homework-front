import { useState } from 'react'
import { Filters } from './filters/filters.tsx'
import { BookList } from './book-list/book-list.tsx'

/*
 * Ваша задача дописать приложение, которое отображает список книг.
 * В приложении есть возможность фильтровать книги по жанру, а также удалять книги
 *
 * 1. Добавьте типизацию (в том числе в компонентах Filters и BookList), избавьтесь от any
 * 2. Реализуйте фильтрацию книг по жанру
 * 3. Реализуйте удаление книги
 */

/*
 * Не изменяйте эти данные! Они нужны для тестов.
 * */
const BOOKS: any = [
  { id: 1, title: 'Grokking Algorithms', genre: 'Dev' },
  { id: 2, title: 'The Hobbit', genre: 'Fantasy' },
  { id: 3, title: 'The Great Gatsby', genre: 'Classic' },
  { id: 4, title: 'Clean Code', genre: 'Dev' },
  { id: 5, title: 'The Catcher in the Rye', genre: 'Classic' },
]

export type Book = any

export type Genre = any

export const Homework6 = () => {
  const [filter, setFilter] = useState<Genre | null>(null)
  const [books, setBooks] = useState(BOOKS)

  const handleDeleteBook = (id: number) => {
    // Напишите логику удаления книги
  }
  const filteredBooks = [] // Напишите логику фильтрации книг

  return (
    <section id={'hw6'}>
      <h3>Homework 6</h3>
      <Filters filter={filter} setFilter={setFilter} />
      <BookList
        books={filteredBooks} // Передайте необходимые данные
        handleDeleteBook={handleDeleteBook}
      />
    </section>
  )
}

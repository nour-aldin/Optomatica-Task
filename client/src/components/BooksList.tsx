import { useState, useEffect } from "react"
import Card from "../UI/Card"
import BooksSearch from "./BooksSearch"

interface Book {
  _id: string
  title: string
  author: string
  description: string
  publishedDate: string
}

export const BooksList = () => {
  const [books, setBooks] = useState<Book[]>([])
  const [searchResults, setSearchResults] = useState<Book[]>([])
  const [searchTitle, setSearchTitle] = useState("")

  useEffect(() => {
    const getBooks = async () => {
      try {
        const res = await fetch("http://localhost:3000/books")
        const books = await res.json()
        setBooks(books)
      } catch (error) {
        console.log(error)
      }
    }
    getBooks()
  }, [])

  const reqSearch = async (title: string, year: string) => {
    setSearchTitle(title + year)
    try {
      // Construct the URL for the backend API based on the search criteria
      let apiUrl = `http://localhost:3000/books`
      if (title) {
        apiUrl = `http://localhost:3000/books?title=${title}`
      }

      if (year) {
        apiUrl = `http://localhost:3000/books?&year=${year}`
      }
      if (title && year) {
        apiUrl = `http://localhost:3000/books?title=${title}&year=${year}`
      }
      const res = await fetch(apiUrl)
      const books = await res.json()
      setSearchResults(books)
    } catch (error) {
      console.log(error)
    }
  }

  const handleDelete = async (id: string) => {
    let newBooks: Book[] = []
    try {
      const res = await fetch(`http://localhost:3000/books/${id}`, {
        method: "DELETE",
      })
      const data = await res.json()
      if (data.msg == "deleted") {
        newBooks = books.filter((book) => book._id !== id)
      }
    } catch (error) {
      console.log(error)
    } finally {
      setBooks(newBooks)
    }
  }

  return (
    <div>
      <h1>Books List</h1>
      <BooksSearch reqSearch={reqSearch} />
      <div className='flex flex-row flex-wrap gap-4 mt-5'>
        {searchTitle && searchResults.length === 0 ? (
          <h1>No result found</h1>
        ) : (
          (searchTitle ? searchResults : books).map((book) => (
            <Card key={book._id} book={book} handleDelete={handleDelete} />
          ))
        )}
      </div>
    </div>
  )
}

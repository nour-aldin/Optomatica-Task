import { useState } from "react"
import { BooksList } from "./components/BooksList"
import AddBookModal from "./components/AddBookModal"

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [refreshKey, setRefreshKey] = useState(0)

  const handleBookAdded = async (data: object) => {
    try {
      const res = await fetch("http://localhost:3000/books", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
      const d = await res.json()
    } catch (error) {
      console.log(error)
    } finally {
      setRefreshKey(refreshKey + 1)
    }
  }

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <div className='App m-10'>
      <BooksList key={refreshKey} />
      <button
        className='bg-blue-600 text-white font-semibold py-2 px-4 rounded  hover:bg-blue-700 transition-colors text-sm mt-4'
        onClick={openModal}
      >
        Add Book
      </button>
      <AddBookModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        onAddBook={handleBookAdded}
      />
    </div>
  )
}

export default App

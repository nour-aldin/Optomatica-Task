import { useState, useEffect } from "react"

const BooksSearch = ({ reqSearch }) => {
  const [title, setTitle] = useState("")
  const [year, setYear] = useState("")

  // Use useEffect to call reqSearch when title or year changes
  useEffect(() => {
    reqSearch(title, year)
  }, [title, year])

  return (
    <div className='flex flex-col items-start border-gray-800 border-[1px] px-4 py-2 rounded w-[70%]'>
      <input
        type='text'
        placeholder='Search'
        className='border-[1px] border-gray-300 p-1 rounded focus-within:border-gray-500 my-2 w-[50%]'
        value={title}
        onChange={(e) => setTitle(e.target.value)} // Update title state
      />
      <div>
        <input
          type='number'
          value={year}
          onChange={(e) => setYear(e.target.value)} // Update year state
          className='border-[1px] border-gray-300 p-1 rounded focus-within:border-gray-500 my-2 w-[50%]'
          placeholder='Year'
        />
      </div>
    </div>
  )
}

export default BooksSearch

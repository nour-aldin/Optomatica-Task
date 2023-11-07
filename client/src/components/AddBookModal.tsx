import React, { useState } from "react"
import Modal from "react-modal"

Modal.setAppElement("#root")

function AddBookModal({ isOpen, onRequestClose, onAddBook }) {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    description: "",
    publishedDate: "",
  })
  const [inputError, setInputError] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = () => {
    if (
      !formData.title ||
      !formData.author ||
      !formData.description ||
      !formData.publishedDate
    ) {
      setInputError(true)
    }
    // Validate and submit the form
    else {
      setInputError(false)
      onAddBook(formData)
      setFormData({
        title: "",
        author: "",
        description: "",
        publishedDate: "",
      })
      onRequestClose()
    }
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel='Add Book Modal'
    >
      <div className='flex flex-col items-center gap-4'>
        <div>
          <h2>Add a New Book</h2>
        </div>
        {inputError && (
          <p className='text-red-500 text-sm'>Please fill all fields</p>
        )}
        <form className=''>
          <div>
            <input
              type='text'
              name='title'
              placeholder='Title'
              value={formData.title}
              onChange={handleChange}
              className='border-[1px] border-gray-300 p-1 rounded focus-within:border-gray-500 my-2'
            />
          </div>
          <div>
            <input
              type='text'
              name='author'
              placeholder='Author'
              value={formData.author}
              onChange={handleChange}
              className='border-[1px] border-gray-300 p-1 rounded focus-within:border-gray-500 my-2'
            />
          </div>
          <div>
            <textarea
              name='description'
              placeholder='Description'
              value={formData.description}
              onChange={handleChange}
              className='border-[1px] border-gray-300 rounded focus-within:border-gray-500 my-2 w-[300px] h-[150px] p-2'
            />
          </div>
          <div>
            <input
              type='number'
              name='publishedDate'
              placeholder='Published Date'
              value={formData.publishedDate}
              onChange={handleChange}
              className='border-[1px] border-gray-300 p-1 rounded focus-within:border-gray-500 my-2'
            />
          </div>
          <button
            type='button'
            onClick={handleSubmit}
            className='bg-blue-600 text-white font-semibold py-2 px-4 rounded  hover:bg-blue-700 transition-colors text-sm mt-4'
          >
            Add Book
          </button>
        </form>
      </div>
    </Modal>
  )
}

export default AddBookModal

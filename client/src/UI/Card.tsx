const Card = ({ book, handleDelete }) => {
  return (
    <div className='p-4 border border-gray-300 rounded-md shadow-md hover:shadow-lg max-w-[500px]'>
      <header className='border-b border-gray-300 p-2 text-center'>
        <h1 className='text-sm font-semibold'>{book.title}</h1>
      </header>
      <div className='py-2'>
        <p className='text-gray-700 text-sm my-1'>
          <span className='font-semibold'>Author:</span> {book.author}
        </p>
        <p className='text-gray-700 text-sm my-1'>
          <span className='font-semibold'>Released Year:</span>{" "}
          {book.publishedDate}
        </p>
        <div className='h-24 overflow-y-auto mt-2 bg-gray-200 px-1 rounded'>
          <p className='text-gray-700 text-base'>{book.description}</p>
        </div>
      </div>
      <button
        type='button'
        className='bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-full transition-colors text-sm  mt-4 w-full'
        onClick={() => handleDelete(book._id)}
      >
        Delete
      </button>
    </div>
  )
}
export default Card

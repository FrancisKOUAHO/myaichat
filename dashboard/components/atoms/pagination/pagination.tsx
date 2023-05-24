const Pagination = () => {
  return(
    <nav aria-label="Page navigation">
      <ul className="inline-flex">
        <li>
          <button
            className="h-10 px-5 text-indigo-600 transition-colors duration-150 bg-white rounded-l-lg focus:shadow-outline hover:bg-indigo-100">Prev
          </button>
        </li>
        <li>
          <button className="h-10 px-5 text-white transition-colors duration-150 bg-indigo-600 focus:shadow-outline">1
          </button>
        </li>
        <li>
          <button
            className="h-10 px-5 text-indigo-600 transition-colors duration-150 bg-white focus:shadow-outline hover:bg-indigo-100">2
          </button>
        </li>
        <li>
          <button
            className="h-10 px-5 text-indigo-600 transition-colors duration-150 bg-white focus:shadow-outline hover:bg-indigo-100">3
          </button>
        </li>
        <li>
          <button
            className="h-10 px-5 text-indigo-600 transition-colors duration-150 bg-white rounded-r-lg focus:shadow-outline hover:bg-indigo-100">Next
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default Pagination

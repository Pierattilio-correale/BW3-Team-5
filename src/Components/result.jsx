import { useLocation } from 'react-router-dom'
import { useState } from 'react'
import { FaStar, FaRegStar } from 'react-icons/fa'

const CompanySearchResults = () => {
  const location = useLocation()
  const jobs = location.state?.jobs || []

  const [favorites, setFavorites] = useState([])

  const toggleFavorite = (jobId) => {
    setFavorites((prev) =>
      prev.includes(jobId)
        ? prev.filter((id) => id !== jobId)
        : [...prev, jobId]
    )
  }

  return (
    <div className="container mt-4">
      <h2 className='text-center text-primary'>Posizioni aperte </h2>
      <ul className="list-unstyled">
        {jobs.map((job) => (
          <li key={job._id} className="mb-3 d-flex align-items-center justify-content-between">
            <a
              href={job.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-warning flex-grow-1 text-start text-primary me-2"
            >
              {job.title}
            </a>
            <button
              className="btn"
              onClick={() => toggleFavorite(job._id)}
            >
              {favorites.includes(job._id) ? (
                <FaStar   className="text-warning fs-4" />
              ) : (
                <FaRegStar className="text-warning fs-4" />
              )}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CompanySearchResults

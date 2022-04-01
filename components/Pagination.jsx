import React from 'react'

export default function Pagination({len, page, setPage}) {
  return (
    <div className="pagination">
      {Array(len)
        .fill(0)
        .map((_, index) => (
          <span
            className={page === index + 1 ? 'active' : ''}
            key={index}
            onClick={() => setPage(index + 1)}
          >
            {index + 1}
          </span>
        ))}
    </div>
  )
}

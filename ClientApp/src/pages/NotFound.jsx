import React from 'react'

const NotFound = () => {
  return (
    <div className="pageNotFound">
      <h2>
        {Math.ceil(Math.random() * 100) % 2 === 0 ? (
          <span></span>
        ) : (
          <span></span>
        )}
        <h2>Not sure how you got here. </h2>
        <h2>Do you want to</h2>
        <a
          className="goBack"
          href=""
          onclick="window.history.go(-1); return false;"
        >
          go back?
        </a>
      </h2>
    </div>
  )
}

export default NotFound

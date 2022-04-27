import React from 'react'

const RandomPage = (details) => {
  return (
    <div className="repo-details">
        <h2> Name Count: {details.name}</h2>
        <h2> Language: {details.languages}</h2>
        <h2> Stars: {details.star}</h2>
        <h2> Watchers: {details.watchers}</h2>
    </div>
  )
}

export default RandomPage

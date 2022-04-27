import React from 'react'

const RandomPage = (details) => {
  return (
    <div className="repo-details">
        <h2> Name: {details.name}</h2>
        <h2> Language: {details.language}</h2>
        <h2> Stars: {details.stargazers_count}</h2>
        <h2> Watchers: {details.watchers_count}</h2>
    </div>
  )
}

export default RandomPage

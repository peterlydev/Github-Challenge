import React, { useState } from 'react'

const RepoPage = () => {

    const[username, setUsername] = useState('');
    const[isPending, setIsPending] = useState('');
    const[repos, setRepos] = useState([]);
    const[details, setDetails] = useState([])
    const[page, setPage] = useState(1)

  return (
    <div className="github-page">
        
    </div>
  )
}

export default RepoPage

import React from 'react';

import '../App.css'

export default function RepoDetails({details, loading}) {


    if (loading) {
        return (
            <h1 className="loader">Loading... </h1>
        )
    }
    return (
        <div className="repo-details-container">
            <div className="details-row">
                <label className="label">Repo Name 	
                &#128062;</label>
                <span className="value">{details.name}</span>
            </div>
            <div className="details-row">
                <label className="label">How many forks? &#8916; </label>
                <span className="value">{details.forks}</span>
            </div>
            <div className="details-row"> 
                <label className="label">What language? &#35486;</label>
                <span className="value">{details.language}</span> 
            </div>
            <div className="details-row"> 
                <label className="label">How many Stars? &#9733;</label>
                <span className="value">{details.stargazers_count}</span> 
            </div>
            <div className="details-row"> 
                <label className="label">How many Watchers? &#128064;</label>
                <span className="value">{details.watchers_count}</span> 
            </div>
           
        </div>
    )

    }


import React, {useEffect, useState} from 'react';
import axios from 'axios';
import RepoDetails from './RepoDetails';

import '../App.css'
// import RandomPage from './RandomPage';

//----------------------------Defining States----------------------------------//
const Users = () => {
    const [username, setUsername] = useState('');
    const [isPending, setIsPending] = useState(false);
    const [repos, setRepos] = useState([]);
    const [details, setDetails] = useState({});
    const [loadingDetails, setLoadingDetails] = useState(false);


    useEffect(() => {
        setRepos([]);
        setDetails({});

    }, [username]);

   function ScrollToTop(e){
       e.preventDefault();
       <ScrollToTop />

   }

    //-- Defining functions when submitting Github names //

    //Submitting github name//
    function handleSubmit(e) {
        e.preventDefault();
        searchRepos();
    }
    
    //Defining what searchRepo will do//

    function searchRepos() {
        setIsPending(true);
        axios({
            method: 'GET',
            url: `https://api.github.com/users/${username}/repos`,
        }).then(res => {
            setIsPending(false);
            //setRepos will show the data fetched
            setRepos(res.data);
            // console.log(res.data)
        });
    }

    function renderRows(repo) {
        return(
            <div 
                className='repo-button' 
                onClick={() => getDetails(repo.name)}
                key={repo.id}
            >
                <h3 className='repo-name'>
                {repo.name}
                <button onClick={window.scrollTo({top:0,behavior:'smooth'})}>View Repo</button>
                </h3>
            </div>

        )
    }
    function getDetails(repoName) {
        setLoadingDetails(true);
        axios({
            method: 'GET',
            url: `https://api.github.com/repos/${username}/${repoName}`,
        }).then(res => {
            setLoadingDetails(false);
            setDetails(res.data);
        });        
        
    }
    
    return (
        <div className='page'>
        <RepoDetails details={details} loading={loadingDetails} />
            <form className='form'>
                <input 
                className='input' value={username} onChange={e => {setUsername(e.target.value)}} placeholder='Enter GitHub userName'/>
                <button className='button' onClick={handleSubmit} required>{isPending ? 'Loading..' : 'View Repos'}</button>
                </form>
                <div className='results'>
                <h3 className="repo-heading">You are now viewing {username}'s Repos:</h3> {repos.map(renderRows)}
                    </div>
                </div>
    )
};

export default Users;

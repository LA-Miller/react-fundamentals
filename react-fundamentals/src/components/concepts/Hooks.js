import React, {useState, useEffect} from 'react';

const Hooks = () => {
    const [ query, setQuery ] = useState('');
    const [ results, setResults ] = useState({});

    return(
        <div className='main'>
            <div className='mainDiv'>
                <input value={query} onChange={e => setQuery(e.target.value)} placeholder="enter your sw character number"/>
            </div>
        </div>
    )
}

export default Hooks;
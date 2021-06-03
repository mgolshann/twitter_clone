import React, { useEffect, useState } from 'react';

const Search = () => {

    const [query, setQuery] = useState();

    useEffect( () => {
        if (!query) return;
        
    }, [query])

    return (
        <div style={{textAlign: "center"}}>
            <input style={{
                width: "400px"
            }} value={query} onChange={e=>setQuery(e.target.value)} />
        </div>
    );
};

export default Search;
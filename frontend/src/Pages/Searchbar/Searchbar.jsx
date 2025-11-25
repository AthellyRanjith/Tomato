import React, { useContext, useState } from 'react'
import './Searchbar.css'
import { StoreContext } from '../../Context/StoreContext'
import { assets } from '../../assets/assets'

const Searchbar = () => {
    const [query, setQuery] = useState("")
    const { items } = useContext(StoreContext);

    const filteredItems = items ? items.filter((item) => item.name.toLowerCase().includes(query.toLowerCase())) : [];

    return (
        <div className='search-bar'>
            <input type="text" value={query} onChange={e => setQuery(e.target.value)} placeholder='search' />
            <img src={assets.search_icon} onClick={() => console.log("Search for:", query)} />
            
            {query && (
                <div className="search-results">
                    {filteredItems.map((item) => (
                        <p key={item.id}>{item.name}</p>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Searchbar
import React from 'react'

const SearchBar = () => {
    return (
        <form className='searchBar'>
                <input className='searchBarInput' type="search" placeholder="Buscar" aria-label="Buscar" />
                <span className="material-symbols-rounded searchBarIcon">search</span>
        </form>
    )
}

export default SearchBar
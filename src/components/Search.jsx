import React, { useState } from 'react'

const Search = ({search,setSearch}) => {
    
  return (
    <div>
        <h2>Pesquisar</h2>
        <input 
            type="text" 
            value={search} 
            onChange={(e)=>setSearch(e.target.value)}
            placeholder='Digite aqui...'/>
    </div>
  )
}

export default Search
import React from 'react'
import './search.css'

//  de esta forma no es necesario hacer return
const Search = () => (
  <form className="Search">
    <input type="text" className="Search-input" placeholder="Buscar tu video" />
  </form>
)

export default Search
import React from 'react'
import './search.css'

//  de esta forma no es necesario hacer return
const Search = (props) => (
  <form className="Search" onSubmit={props.handleSubmit}>
    <input
     ref={props.setRef}
     type="text" 
     className="Search-input" 
     name="search" 
     placeholder="Buscar tu video" 
     onChange={props.handleChange}
     value={props.value}
    />
  </form>
)

export default Search
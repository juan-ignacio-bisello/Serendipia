import React , { useState } from 'react'

export const SearchBar = () => {

    const [query, setQuery] = useState('');

    const handleChange = ( e ) => {
        setQuery( e.target.value );
        onSearch( e.target.value );
    };

  return (
    <div>
        <input type="text" value={ query } onChange={ handleChange } placeholder='Buscar' />
    </div>
    
  )
}

import React from 'react'
import { useLocation } from 'react-router-dom'

const SearchResults = () => {
    const location = useLocation()
    const queryParams = new URLSearchParams(location.search)
    const query = queryParams.get(queryParams);
  return (
    <div>
        <h1>검색결과</h1>
        <h2>{query}</h2>
    </div>
  )
}

export default SearchResults
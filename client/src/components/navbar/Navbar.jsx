import React, { useContext } from 'react'
import { SearchContext } from '../../search_context/SearchContext'

const Navbar = () => {
  const { setSearchParams, search } = useContext(SearchContext)
  return (
    <form role="search">
      <input type="search" placeholder="Search gif" value={search} onChange={(e) => setSearchParams({ q: e.target.value })} aria-label="Search" />

    </form>
  )
}

export default Navbar
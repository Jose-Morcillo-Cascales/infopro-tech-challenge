import React, { useContext } from 'react'
import { SearchContext } from '../../search_context/SearchContext'
import { InputStyle, NavbarStyle, TitleStyle } from '../style/generalStyle'

const Navbar = () => {
  const { setSearchParams, search } = useContext(SearchContext)
  return (
    <NavbarStyle>
      <TitleStyle>Employees</TitleStyle>
      <InputStyle type="search" placeholder="Search employee" value={search} onChange={(e) => setSearchParams({ q: e.target.value })} aria-label="Search" />
    </NavbarStyle>
  )
}

export default Navbar
import { useQuery } from '@tanstack/react-query'
import { useContext, useEffect, useState } from 'react'
import { fetchKey } from '../../api'
import {SearchContext} from '../../search_context/SearchContext'
import { ColumnStyle, DashboardStyle, RowStyle } from '../style/generalStyle'
const FilterDashboard = () => {
    const {data, status} =useQuery(["employees","employees"],async () => {
        return await fetchKey("employees")
 })
 const { search} = useContext(SearchContext)
 const [searchResults, setSearchResults] = useState([])

 useEffect(() => {
     
    const filterEmployee = data?.filter(
      employee => 
          employee.name.toLowerCase().includes(search.toLowerCase())
    )
    setSearchResults(filterEmployee)
  }, [search,data])
  return (
    <DashboardStyle>
      <RowStyle key = "0">
              <ColumnStyle>Employee Code</ColumnStyle>
              <ColumnStyle> Name</ColumnStyle>
              <ColumnStyle>Password</ColumnStyle>
              <ColumnStyle>Date of discharge</ColumnStyle> 
              <ColumnStyle>Active Working</ColumnStyle>
            </RowStyle>
    {searchResults?.map(result =>{
        return <RowStyle key ={result.id}>
        <ColumnStyle>{result.employee_code}</ColumnStyle>
        <ColumnStyle>{result.name}</ColumnStyle>
        <ColumnStyle>{result.password}</ColumnStyle>
        <ColumnStyle>{result.date_of_discharge}</ColumnStyle> 
        <ColumnStyle>{result.active_working === 0 ? "No" : "Yes"}</ColumnStyle>
      </RowStyle>
    })}
    </DashboardStyle>
  )
}

export default FilterDashboard
import { useQuery } from '@tanstack/react-query'
import { useContext, useEffect, useState } from 'react'
import { fetchKey } from '../../api'
import {SearchContext} from '../../search_context/SearchContext'
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
    searchResults?.map(result =>{
        return <div key ={result.id}>
        <div>{result.employee_code}</div>
        <div>{result.name}</div>
        <div>{result.password}</div>
        <div>{result.date_of_discharge}</div> 
        <div>{result.active_working === 0 ? "No" : "Yes"}</div>
      </div>
    })
  )
}

export default FilterDashboard
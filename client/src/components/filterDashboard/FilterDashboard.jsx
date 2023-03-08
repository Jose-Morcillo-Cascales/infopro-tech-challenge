import { useQuery } from '@tanstack/react-query'
import { useContext, useEffect, useState } from 'react'
import { fetchKey } from '../../api'
import { FilterContext } from '../../filter_context/FilterContext'
import { SearchContext } from '../../search_context/SearchContext'
import { ButtonPrimaryStyle, ColumnStyle, DashboardStyle, RowStyle } from '../style/generalStyle'
const FilterDashboard = ({ seePass, setSeePass }) => {
  const { data, status } = useQuery(["employees", "employees"], async () => {
    return await fetchKey("employees")
  })
  const { search } = useContext(SearchContext)
  const [searchResults, setSearchResults] = useState([])
  const { workers, setWorkers } = useContext(FilterContext)

  const filterAllEmployee = data?.filter(
    employee =>
      employee.name.toLowerCase().includes(search.toLowerCase())
      ||
      employee.employee_code.toLowerCase().includes(search.toLowerCase())
      ||
      employee.date_of_discharge.toLowerCase().includes(search.toLowerCase())

  )
  const filterWorkingEmployee = data?.filter(employee => employee.active_working === 1).filter(
    employee =>
      employee.name.toLowerCase().includes(search.toLowerCase())
      ||
      employee.employee_code.toLowerCase().includes(search.toLowerCase())
      ||
      employee.date_of_discharge.toLowerCase().includes(search.toLowerCase())

  )
  useEffect(() => {
    workers ?
      setSearchResults(filterWorkingEmployee)
      :
      setSearchResults(filterAllEmployee)
  }, [search, data, workers])
  return (
    <DashboardStyle>
      <RowStyle key="0">
        <ColumnStyle>Employee Code</ColumnStyle>
        <ColumnStyle> Name</ColumnStyle>
        <ColumnStyle>
          {seePass ?
            <ButtonPrimaryStyle onClick={() => setSeePass(false)}>Hide Password</ButtonPrimaryStyle>
            :
            <ButtonPrimaryStyle onClick={() => setSeePass(true)}>See Password</ButtonPrimaryStyle>
          }</ColumnStyle>
        <ColumnStyle>Date of discharge</ColumnStyle>
        <ColumnStyle> {workers ?
          <ButtonPrimaryStyle onClick={() => setWorkers(false)}>Active Working</ButtonPrimaryStyle>
          :
          <ButtonPrimaryStyle onClick={() => setWorkers(true)}>All</ButtonPrimaryStyle>
        }</ColumnStyle>
      </RowStyle>
      {searchResults?.map(result => {
        return <RowStyle key={result.id}>
          <ColumnStyle>{result.employee_code}</ColumnStyle>
          <ColumnStyle>{result.name}</ColumnStyle>
          {
            !seePass ?
              <ColumnStyle>
                <p>------</p>
              </ColumnStyle>
              :
              <ColumnStyle>
                <p>{result.password}</p>
              </ColumnStyle>
          }
          <ColumnStyle>{result.date_of_discharge}</ColumnStyle>
          <ColumnStyle>{result.active_working === 0 ? "No" : "Yes"}</ColumnStyle>
        </RowStyle>
      })}
    </DashboardStyle>
  )
}

export default FilterDashboard
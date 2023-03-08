import { useContext, useEffect, useState } from 'react'
import { useQuery } from "@tanstack/react-query"
import { fetchKey } from "./../../api/"
import { ButtonPrimaryStyle, ColumnStyle, DashboardStyle, RowStyle } from '../style/generalStyle'
import { FilterContext } from '../../filter_context/FilterContext'
const Dashboard = ({ seePass, setSeePass }) => {
  const { data, status } = useQuery(["employees", "employees"], async () => {
    return await fetchKey("employees")
  })
  const { workers, setWorkers } = useContext(FilterContext)
  const [sortDate, setSortDate] = useState(false)
  const [resultSort ,setResultSort] =useState([])
  useEffect(()=>{
    sortDate ?
    setResultSort( [].concat(data)
    .sort((a,b)=>new Date(a.date_of_discharge).getTime()>new Date(b.date_of_discharge).getTime()? -1 : 1))
    :
    setResultSort( [].concat(data)
    .sort((a,b)=>new Date(a.date_of_discharge).getTime()>new Date(b.date_of_discharge).getTime()? -1 : 1).reverse())
  },[sortDate])
  
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
          }
        </ColumnStyle>
        <ColumnStyle>
        {sortDate ?
            <ButtonPrimaryStyle onClick={() => setSortDate(false)}> Date of discharge ▲</ButtonPrimaryStyle>
            :
            <ButtonPrimaryStyle onClick={() => setSortDate(true)}> Date of discharge ▼</ButtonPrimaryStyle>
          }
        </ColumnStyle>
        <ColumnStyle>
          {workers ?
            <ButtonPrimaryStyle onClick={() => setWorkers(false)}>Active Working</ButtonPrimaryStyle>
            :
            <ButtonPrimaryStyle onClick={() => setWorkers(true)}>All</ButtonPrimaryStyle>
          }

        </ColumnStyle>
      </RowStyle>
      {
        workers ?
        resultSort?.filter(employee => employee.active_working === 1).map(employee => {
            return <RowStyle key={employee.id}>
              <ColumnStyle>{employee.employee_code}</ColumnStyle>
              <ColumnStyle>{employee.name}</ColumnStyle>
              <ColumnStyle>{employee.password}</ColumnStyle>
              <ColumnStyle>{employee.date_of_discharge}</ColumnStyle>
              <ColumnStyle>{employee.active_working === 0 ? "No" : "Yes"}</ColumnStyle>
            </RowStyle>
          })
          :
          resultSort?.map((employee) => {

            return <RowStyle key={employee.id}>
              <ColumnStyle>{employee.employee_code}</ColumnStyle>
              <ColumnStyle>{employee.name}</ColumnStyle>
              {
                !seePass ?
                  <ColumnStyle>
                    <p>------</p>
                  </ColumnStyle>
                  :
                  <ColumnStyle>
                    <p>{employee.password}</p>
                  </ColumnStyle>
              }
              <ColumnStyle>{employee.date_of_discharge}</ColumnStyle>
              <ColumnStyle>{employee.active_working === 0 ? "No" : "Yes"}</ColumnStyle>
            </RowStyle>
          })
      }
    </DashboardStyle>

  )
}

export default Dashboard
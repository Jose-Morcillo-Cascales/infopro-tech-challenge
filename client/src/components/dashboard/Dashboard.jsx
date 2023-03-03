import React from 'react'
import {useQuery} from "@tanstack/react-query"
import {fetchKey} from "./../../api/"
import { ColumnStyle, DashboardStyle, RowStyle } from '../style/generalStyle'
const Dashboard = () => {
    const {data, status} =useQuery(["employees","employees"],async () => {
        return await fetchKey("employees")
 })

  return (
   
      <DashboardStyle>
      <RowStyle key = "0">
              <ColumnStyle>Employee Code</ColumnStyle>
              <ColumnStyle> Name</ColumnStyle>
              <ColumnStyle>Password</ColumnStyle>
              <ColumnStyle>Date of discharge</ColumnStyle> 
              <ColumnStyle>Active Working</ColumnStyle>
            </RowStyle>
      {
        data?.map(employee=>{
            return <RowStyle key ={employee.id}>
              <ColumnStyle>{employee.employee_code}</ColumnStyle>
              <ColumnStyle>{employee.name}</ColumnStyle>
              <ColumnStyle>{employee.password}</ColumnStyle>
              <ColumnStyle>{employee.date_of_discharge}</ColumnStyle> 
              <ColumnStyle>{employee.active_working === 0 ? "No" : "Yes"}</ColumnStyle>
            </RowStyle>
        })
      }
      </DashboardStyle>
    
  )
}

export default Dashboard
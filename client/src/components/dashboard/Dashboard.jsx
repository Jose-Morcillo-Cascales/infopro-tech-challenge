import React from 'react'
import {useQuery} from "@tanstack/react-query"
import {fetchKey} from "./../../api/"
const Dashboard = () => {
    const {data, status} =useQuery(["employees","employees"],async () => {
        return await fetchKey("employees")
 })
 console.log(data)
  return (
    <>
      {
        data?.map(employee=>{
            return <div key ={employee.id}>
              <div>{employee.employee_code}</div>
              <div>{employee.name}</div>
              <div>{employee.password}</div>
              <div>{employee.date_of_discharge}</div>
              <div>{employee.active_working === 0 ? "No" : "Yes"}</div>
            </div>
        })
      }
    </>
  )
}

export default Dashboard
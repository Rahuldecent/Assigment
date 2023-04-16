import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const Admin = () => {
  const [data, setdata] = useState([])
  const getdata = () => {
    axios.get("http://localhost:8080/userdata").then((res) => {
      setdata(res.data)
    })
  }
  useEffect(() => {
    getdata()
  }, [])
  console.log(data)
  return (
    <div>
      <h1>Admin Page</h1>
      <hr />
      <div>
        <Table>
          <tr>
            <th>S No</th>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Contact</th>
            <th>Email</th>
          </tr>
          {
            data.length > 0 && data.map((item, index) => {
              return <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.firstname}</td>
                <td>{item.lastname}</td>
                <td>{item.contact}</td>
                <td>{item.email}</td>
              </tr>
            })
          }



        </Table>
      </div>
    </div>
  )
}

export default Admin

const Table=styled.table`
  height:auto;
  width:600px;
  border:1px solid teal;
  margin:auto;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`
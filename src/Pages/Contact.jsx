import axios from 'axios'
import React, { useState } from 'react'
import styled from 'styled-components'

const Contact = () => {
  const [firstname, setfirstname] = useState("")
  const [lastname, setlastname] = useState("")
  const [contact, setcontact] = useState("")
  const [email, setemail] = useState("")


  const handlesubmit = (e) => {
    e.preventDefault()
    const user = {
      firstname,
      lastname,
      contact,
      email
    }
    axios.post("http://localhost:8080/userdata", user).then((res) => [
      alert("Data Added successfully")


    ]).catch((err) => {
      console.log(err)
    })


    setfirstname("")
    setcontact("")
    setemail("")
    setlastname("")
  }

  return (
    <div >
      <Div >
        <form action="" className='form' onSubmit={handlesubmit}>
          <h1>Contact Us</h1>
          <input type="text" placeholder='name' name='firstname' value={firstname} onChange={(e) => setfirstname(e.target.value)} />
          <br />
          <br />
          <input type="text" placeholder='lastname' name='lastname' value={lastname} onChange={(e) => setlastname(e.target.value)} />
          <br />
          <br />
          <input type="number" placeholder='contact number' name='contact' value={contact} onChange={(e) => setcontact(e.target.value)} />
          <br />
          <br />
          <input type="email" placeholder='email' name='email' value={email} onChange={(e) => setemail(e.target.value)} />
          <br />
          <br />
          <input type="submit" />
        </form>
      </Div>

    </div>
  )
}

export default Contact

const Div=styled.div`
height:400px;
width:400px;
border:1px solid teal;
display:flex;
flex-direction: column;
margin:auto;
margin-top:30px;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

.form{
  margin-top:10px;

 
}
`
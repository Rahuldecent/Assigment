import React from 'react'
import styled from "styled-components"
import {Link} from "react-router-dom"
const Navbar = () => {
  return (
    <Div>
        <div className='logo'><Link to="/">Logo</Link> </div>
        <div className='end'>
            <div><Link to="/about">About</Link></div>
            <div><Link to="/contact">Contact Us</Link></div>
            <div><Link to="/admin">Admin</Link></div>
        </div>
    </Div>
  )
}

export default Navbar

const Div=styled.div`
  height:100px;
  width:100%;
  border:1px solid teal;
  display:flex;
 
 
  .logo{
    width:30%;
    height:100%;
    border:1px solid teal;
    display:flex;
    align-items: center;
    background-color:teal;
   text-de
  }
  .end{
    width:70%;
    height:100%;
    border:1px solid teal;
    display:flex;
    justify-content:space-evenly;
     align-items: center;
     background-color:teal;
     color:white;
  }
`
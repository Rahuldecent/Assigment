import React, { useEffect, useState } from 'react'
import axios from "axios"
import styled from 'styled-components'
const About = () => {
    const [data,setdata]=useState([])
    const getdata=()=>{
        axios.get("http://localhost:8080/products").then((res)=>{
            setdata(res.data)
        }) 
    }
    console.log(data)
    useEffect(()=>{
        getdata()
    },[])
  return (
    <div>
        <h1>Products</h1>
        <hr />
        <Div>
        {
            data.length>0 && data.map((item,index)=>{
                return <div className='box' key={item.id}>
                    <img width="100%" height="60%" src={item.image}/>
                    <h3>{item.title}</h3>
                    <p>{item.description.substring(0,43)}</p>
                    <h4>{item.price}</h4>
                </div>
            })
        }
        </Div>
    </div>
  )
}

export default About

const Div=styled.div`
      width:100%;
      display: grid;
      grid-template-columns:repeat(3,1fr);
      gap:5px;
    .box{
        height:400px;
        width:400px;
        border:1px solid teal;
        margin-left:20px;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    }


`
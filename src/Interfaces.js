import React, { useEffect, useState } from 'react'
import './interfaces.scss';



  

function Interfaces() {

  const [users,setUsers]=useState([]);

  useEffect(()=>{
    const Interfaces = async ()=>{
      try{
       const response = await fetch("https://reqres.in/api/users");
       const result = await response.json();
       setUsers(result.data)
      }catch(error){
        console.log("error");
      }
    };
    Interfaces();
  },[]);
  return (
    <div>
      <h1> User Data</h1>
      <table>
        {users.map((items)=>(
          <tr key={items.id}> 
          <tr>
            <th>Email </th>
            <th> FirstName </th>
            <th> LastName </th>
            <th> Image </th>
          </tr>
          <tr>
            <td> {items.email} </td>
            <td> {items.first_name} </td>
            <td> {items.last_name} </td>
            <td> <img src={items.avatar} alt='avatar'/> </td>
          </tr>
          </tr>

        ))}
      </table>
    </div>
  )
}
export default Interfaces 
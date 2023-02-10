
import Link from "next/link"
import { useEffect, useState } from "react";
import axios from "axios";

function usersList() {
  const [user, setUser] = useState();

  /**
   * desc fetching all data
   * @returns all users
   */
  const fetchData = () => {
    return fetch("http://localhost:3000/api/auth/users")
          .then((response) => response.json())
          .then((data) => setUser(data));
  }

  useEffect(() => {
    fetchData();
    

  },[])
  
/**
 * desc delete user handler
 * @param {*} user 
 */
const  deleteHandle = async(user)=>{
  try{
    // delete user 

  console.log(user._id)
   const result =  await axios.post(`http://localhost:3000/api/auth/deleteUser/${user._id}`)  
  //  console.log(result)

  }
 catch(err){
    console.log(err)
 }
}


  return (
    <div>
       <div className="flex items-end">
       <button className="btn btn-red"><Link href="/userAdd" >Add User</Link></button>
        <button className="btn btn-red"><Link href="userLogin">Logout</Link></button>
       </div>
      
           
        <table id="customers">
          <tr>
            <th>User Name</th>
            <th>E mail</th>
            <th>Password</th>
            <th>Actions</th>
          </tr>
          
          {user?.map((data,i) => (
                     
                
                    <tr  key={i+1} className="user">
                      <td>{data.username}</td>
                      <td>{data.email}</td>
                      <td>{data.password}</td>
                      <td><Link href={`/user/edit/${data._id}`}>Edit</Link> <button onClick={()=>deleteHandle(data)}>Delete</button></td>
                    </tr>
                
              ))}
          
          
        </table>
           
    </div>
  )
}

export default usersList
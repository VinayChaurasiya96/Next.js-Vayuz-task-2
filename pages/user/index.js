
import Link from "next/link"
import { useEffect, useState } from "react";

function usersList() {
  const [user, setUser] = useState();

  const fetchData = () => {
    return fetch("http://localhost:3000/api/auth/users")
          .then((response) => response.json())
          .then((data) => setUser(data));
  }

  useEffect(() => {
    fetchData();
    

  },[])
  
  console.log(user)
  return (
    <div>
       <div className="flex items-end">
       <button className="btn btn-red"><Link href="/user/edit" >Add User</Link></button>
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
                      <th>{data.username}</th>
                      <th>{data.email}</th>
                      <th>{data.password}</th>
                      <th><Link href={`/user/edit/${data._id}`}>Edit</Link> <Link href="">Delete</Link></th>
                    </tr>
                
              ))}
          
          
        </table>
           
    </div>
  )
}

export default usersList
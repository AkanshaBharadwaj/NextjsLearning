import Link from "next/link";
import { useEffect,useState } from "react"
export default function Users(){
    const [users,setUsers]=useState([]);
    console.log(users);
    useEffect(()=>{
      async function fetchUsers(){
        const data=await fetch('https://dummyjson.com/users');
setUsers( (await data.json()).users);
      }
      fetchUsers();
    },[])
    return <>
    <h1>Users page</h1>
     
        {users.map(user=> <li><Link href={`/users/${user.id}`}>{user.firstName}</Link></li>)}
       
     
    </>
}
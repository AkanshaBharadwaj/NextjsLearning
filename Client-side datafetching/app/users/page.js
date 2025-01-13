"use client"
import Link from 'next/link';
import {useEffect,useState} from 'react';

const UserPage=()=>{
  const [users,setUsers]=useState([])
  console.log(users);
    useEffect(()=>{
    async function fetchUsers(){
        const data=await fetch("https://dummyjson.com/users");
        setUsers(await data.json());
    }
    fetchUsers();
    },[])
    return (
        <div>
            <h1>Users</h1>
            {users && users.users && users.users.map((user) =><Link key={user.id} href={`/users/${user.id}`}>
            <div>{user.firstName}</div></Link>)}
        </div>
    )
}
export default UserPage;
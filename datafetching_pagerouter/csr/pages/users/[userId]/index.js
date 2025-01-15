import { useRouter } from "next/router";
import {useEffect, useState} from 'react'
export default function UserInfo(){
    const router=useRouter();
    const [userInfo,setuserInfo]=useState();
    console.log(userInfo);
    
    useEffect(()=>{
        const Id=router.query.userId;
        async function fetchUserInfo(Id){
            const data=await fetch(`https://dummyjson.com/users/${Id}`);
            

    setuserInfo(await data.json());
          }
          fetchUserInfo(Id);
    },[router.query.userId])
    

  return <>
  <h1 className="info">Id no:- { userInfo?.id}</h1>
  <h1 className="info">Name:- {userInfo?.firstName}</h1>
  </>
}
import Link from "next/link";
export default function UserPage(props){
    
    const {users}=props.data;
    console.log(users);
    return <>
    <h1>User Info</h1>
    {users.map(user=><li><Link href={`/users/${user.id}`}>{user.firstName}</Link></li>)}
    

    </>
}
export const getServerSideProps=async()=>{
    const data=await (await fetch('https://dummyjson.com/users')).json();
return {
    props:{
        data,
    },
};
} ;
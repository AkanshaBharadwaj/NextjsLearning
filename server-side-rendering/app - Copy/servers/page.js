const Userpage= async()=>{
    const apiData=await getData();
    console.log(apiData.users.firstName)
    return (
    
    <div>
    <h1>User Names</h1>
        {apiData.users.map(user=> <div key={user.id}>{user.firstName}</div>)}
            
        
    </div>
    )
}

export async function getData(){
    const data=  await fetch("https://dummyjson.com/users")
    if(!data.ok){
        throw new Error("failed to fetch Api data");
    }
    return data.json();
};
export default Userpage;
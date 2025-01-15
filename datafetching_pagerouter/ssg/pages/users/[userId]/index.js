export default function UserInfo({ data }) {
   // Logs the fetched user data to inspect
  
    return (
      <>
        <h1>User Info</h1>
        <p>Name: {data.firstName} {data.lastName}</p>
        <p>Email: {data.email}</p>
        <p>Age: {data.age}</p>
      </>
    );
  }
  
  export const getStaticPaths = async () => {
    const data = await (await fetch(`https://dummyjson.com/users`)).json();
  
    // Extract user IDs
    const UserIds = data.users.map(user => user.id);
    
  
    return {
      paths: UserIds.map(id => (
        { params: { userId: id.toString() } } // Ensure userId is a string
      )),
      fallback: false, // Only predefined paths will be generated
    };
  };
  
  export const getStaticProps = async (context) => {
    const { userId } = context.params; // Use params, not query
    const data = await (await fetch(`https://dummyjson.com/users/${userId}`)).json();
  
    return {
      props: {
        data, // Pass fetched user data to the component
      },
    };
  };
  
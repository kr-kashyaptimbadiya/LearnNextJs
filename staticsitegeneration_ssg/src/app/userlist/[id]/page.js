import getUsers from "../../../../services/getUsers"


export default async function Page(params){
    const users =  getUsers();
    const userlist = await users;
    const paramsId = params.params.id;
    const userData = userlist[paramsId-1];
    
    return(
        <div>
            <h1>User Detail Page</h1>
            <h4>{userData.id}</h4> 
            <h4>{userData.name}</h4>        
            <h4>{userData.website}</h4>        
        </div>
    )
}

export async function generateStaticParams(){
    const getUserList = getUsers();
    const users = await getUserList;
    return users.map(user=>({
        id:user.id.toString()
    }))
}
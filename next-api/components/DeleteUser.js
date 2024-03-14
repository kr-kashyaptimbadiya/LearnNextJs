"use client";

export default function DeleteUser(props) {
const id = props.id
const deleteuser = async () => {
    let result = await fetch("http://localhost:3000/api/users/"+id,{
        method:"delete"
    });
    result = await result.json();
    console.log("🚀 ~ file: DeleteUser.js:10 ~ deleteuser ~ result:", result)
    if(result.success){
        alert("user is deleted")
    }
}
  return <button onClick={deleteuser}>Delete </button>;
}

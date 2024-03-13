"use client"
export default function Page({params}){
    console.log(params)
    return(
        <>
        <h1>Name : {params.position[0]}</h1>
        <h2>Position: {params.position[1]}</h2>
        </>
    ); 
}
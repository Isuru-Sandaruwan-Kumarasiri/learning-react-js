import { useState,useEffect} from "react";

function UserEffect() {
    const [userText,setuserText]=useState("ISuru");
    const [subText,setsubText]=useState(0);

    useEffect(()=>{
           console.log("userEffect is working")
    },[subText]);//[]=>dependencis--->page eka render wenkot vitark usereffect call wenwa
    return ( 
        <>
        <div>
           <button onClick={()=>{setuserText("User")}} >User</button>
           <button  onClick={()=>{setuserText("Home")}}>Home</button>
           <button onClick={()=>{setuserText("About us")}}>  About us</button>

           <h2>{userText}</h2>

           <h1>{subText}</h1>
           <button onClick={()=>{setsubText(subText+1)}}>Click me</button>
        </div>
        </>
     );
}

export default UserEffect;
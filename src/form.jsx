import React, { useState } from "react";

function Form(){

    const [name,setname]=useState("Nirmal")


    const updatename=()=>{
        setname("My name is Nirmal kumar")
    }
    console.log(name)

    return(
        <>
<h1>{name}</h1>
<button onClick={updatename}>Click me</button>

        {/* <h2>this is form</h2>
        <form>
            <input type="text" placeholder="enter your name"/>
            <button>Login</button>
        </form> */}
        
        
        </>
    )
}

export{Form}
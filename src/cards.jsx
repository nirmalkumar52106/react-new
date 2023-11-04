import React, { useState } from "react";

function Cards(props){

    const [price,setprice]=useState(100)
    const [quanitity,setquanitity]=useState(1)

    const increase=()=>{
       if(price>=1000){
        alert("you reach maximum value...")
       } else{
        setprice(price+100)
        setquanitity(quanitity+1)
       }
    }
    const decrease=()=>{
       if(price<=100){
        alert("you reach minumn value....")
       } else{
        setprice(price-100)
        setquanitity(quanitity-1)
       }
    }
    return(
        <>
 <div className="bx">
          <img src={props.img} alt="img" />
          <p>{props.para}</p>
          <h3>{price}</h3>
          <button onClick={increase}>+</button>
          <h5>{quanitity}</h5>
          <button onClick={decrease}>-</button>
        </div>
        
        </>
    )
}

export{Cards}
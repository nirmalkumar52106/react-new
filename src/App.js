import React from "react";
import { Cards } from "./cards";
import myimage from "./img/photo-1575936123452-b67c3203c357.jpg"
import myimage2 from "./logo.svg"
import { Form } from "./form";
export default function App(){
  return (
    <>
      <Form/>
       <div className="main">
        <Cards para="Head1" img={myimage}/>
        <Cards  para="Head1fff" img={myimage2}/>
        <Cards  para="Head1ewwwe" img={myimage}/>
        <Cards  para="Head1jjjjj" img={myimage2}/>
        <Cards  para="Head1jjjjj" img={myimage2}/>
        <Cards  para="Head1jjjjj" img={myimage2}/>
       </div>
       


    </>
  )
}


import React from 'react';
import {Link} from 'react-router-dom';

export default function Cards({data}) {
   
return (


<div >
 
 {
   data&&data.map((val,key)=>(
  <div style={{border:'black',borderWidth:1,borderStyle:"solid",
  width:200,height:200,fontSize:10,marginTop:5,display:'flex'}} key={key}>

 <Link style={{textDecoration:"none",color:"black"}} to={`/details/${val.uid}`}>
            <div>
                <h1>{val.id}</h1>
                <h1 >{val.name} </h1>
                <h1 >{val.address} </h1>
            </div>
  </Link>           
  </div>
 ))}
</div>
)}



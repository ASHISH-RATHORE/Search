import React,{useEffect,useState,useRef} from 'react';
import axios from 'axios';
import './FinalPage.css'


export default function FinalPage({match}) {
   const id= match.params.id
   const [user, setuser] = useState([]);

   useEffect(async() => {         //fetching data on the basis of ID of the user
     const response= await axios.get(`http://localhost:6024/api/v1/user/${id}`)
     setuser(response.data.data)
    }, []);

  return (
        
    <div className="main-card">
        <div>Name-{user.name}</div>
       <div>ID-{user.id}</div>
       <div>Address-{user.address}</div>
       <div>Items-{user.items}</div>

    </div>

    )
}





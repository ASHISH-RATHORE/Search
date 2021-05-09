import React,{useEffect,useState,useRef} from 'react';
import axios from "axios";
import './Home.css';
import {Link} from 'react-router-dom';
import Cards from './Cards';


export default  function Home() {

  const [searchResult, setsearchResult] = useState([]);  
  const [resultMatch,setresultMatch]=useState([]);
  const [displayData,setdisplayData]=useState([]);
  const [isClicked,setisClicked]=useState(false);
  // const [cursor,setcursor]=useState(0);   //
  // const [result,setresult]=useState([]);  //
  
  const wrapperRef = useRef(null);


useEffect(() => {                //fetching data from the api 
  const fetchData=async()=>{
  const response=await axios.get("http://localhost:6024/api/v1/user");
setsearchResult(response.data.data);
 }
  fetchData();
}, []);



useEffect(() => {
  window.addEventListener("mousedown", handleClickOutside);
  return () => {
    window.removeEventListener("mousedown", handleClickOutside);
  };
});



const handleClickOutside = event => {
  const { current: wrap } = wrapperRef;
  if (wrap && !wrap.contains(event.target)) {
    setisClicked(true);
  }
};


const matchData =(input)=>{    //matching input with data
  setisClicked(false)          
  if(!input){
    setresultMatch([])
  }else{
    let match=searchResult.filter((data)=>{
    const regex=new RegExp(`${input}`,"gi");
    return data.name.match(regex)||data.id .match(regex)||data.address.match(regex); 
  });
  
  setresultMatch(match)
  
}
  };

  // const handleKeyboard=(e)=> {
  //   // const { cursor, result } = this.state
  //   // arrow up/down button should select next/previous list element
  //   if (e.keyCode === 38 && cursor > 0) {
  //     setcursor(cursor-1);

  //   } else if (e.keyCode === 40 && cursor < resultMatch.length - 1) {             //
  //     setcursor(cursor+1);
  //   }
  // }

  
  const SubmitHandler=(e)=>{        //onSubmit event handler
    setisClicked(true)          
        console.log(resultMatch)
         e.preventDefault();
         setdisplayData(resultMatch);
         setisClicked(true)

  }


  return (

<div ref={wrapperRef}>
      <form onSubmit={SubmitHandler} >
      <div className="title">Search Users</div>
      <div className='input'>
      <input  list="users"className="inputBox" type='search' onChange={(e)=> matchData(e.target.value)} placeholder="Search users by ID,address,name....." />
     </div>
     </form>


<ul  className="suggestions"  type="none" style={{display:isClicked?"none":'block'}}>

{      
  resultMatch&&resultMatch.map((items,key)=>(
    <Link to={`/details/${items.uid}`} style={{textDecoration:'none',color:'black'}} key={key}> 
        <li key={key} >
          <div style={{display:'flex',flexDirection:'column'}}>  
               <span>{items.id}</span>
               <span>{items.name} </span>
               <span>{items.address}</span> 
         </div>
        </li> 
   </Link>))
}
</ul>
  
 {/* card component for showing output of the search */}


 <Cards data={displayData}/>       
</div>
)
}






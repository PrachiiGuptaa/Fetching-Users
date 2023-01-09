// import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import './Home.css'

export default function Home() {
    const[list , setList] = useState([])
    const[fetching, setFetching] = useState(false)

async function userData(){
  if(fetching){
    alert("Data fetching is in progress. Please wait!")
  }
  setFetching(true)
  console.log("click")
  for(let i = 0 ; i < 50 ; i++){
  const res = await fetch("https://randomuser.me/api/")
  const data = await res.json()
  list.push(data.results[0])
  setList(list)
}
console.log(list)
localStorage.setItem("userList" , JSON.stringify(list))
alert("Data Fetched")
    }
function deleteData() {
alert("All user data will be Deleted")
  localStorage.removeItem('userList')
      }

    return (
      <div className="box">
        <button type="button" className="btn btn-primary memo" onClick={userData}>Fetch Users</button>
        <br/>
        <button type="button" className="btn btn-primary memo1" onClick={deleteData}>Delete Users</button>
        <br/>
        <button type="button" className="btn btn-primary memo2"><Link to="/UserDetails" className="memo3">User Details</Link></button>
      </div>
    );
  }
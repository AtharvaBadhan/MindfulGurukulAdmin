import React, { useState, useEffect } from "react";
import {CSVLink} from 'react-csv';

function Exportexcel() {
 const [userdata, setUserdata]= useState([]); 
 useEffect( ()=>{
    const getuserdata= async ()=>{
      const userreq= await fetch("");
      const userres= await userreq.json();
      console.log(userres);
      setUserdata(userres);
    }
getuserdata();
 },[]);

 return (

    <CSVLink  data={ userdata } filename="RegisterUserData"  className="btn">Export User Data</CSVLink>
    );
}

export default Exportexcel;
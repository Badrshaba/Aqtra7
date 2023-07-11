import React, { useState } from "react";
import { Avatar } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { Data } from "./Data";
import "../style/style.css"
const Volages = () => {
    const[namedata]=useState(Data)
    const go = useNavigate()
    const goToVloger = ()=>{
      go("/amr")
    }
  return (
    <div>
      {namedata.map((e,index)=>(<div key={index}> 
         <div className=" d-flex align-items-center divVloger border-bottom  p-4 " onClick={goToVloger} >
        <div className=" me-2"><Avatar alt="Remy Sharp" src={e.img} /></div>
    <div>  <h5 className=" link">{e.name}</h5> </div> 
      </div></div>))}
   
      
    </div>
  );
};

export default Volages;

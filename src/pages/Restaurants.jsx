import React from 'react'
import img1 from "../img/KFC.png";
import img2 from "../img/MC.jpg";
import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";
const Restaurants = () => {
  return (
    <div>
           <div className=" d-flex m-3 ">
        <Avatar alt="Remy Sharp" src={img1} />
      <Link to={"/kfc"}><h5 as>KFC</h5></Link>  
      </div>
      <div className=" d-flex m-3 ">
        <Avatar alt="Remy Sharp" src={img2} />
      <Link to={"/macdonald"}><h5 as>Macdonal's</h5></Link>  
      </div>
      <div className=" d-flex m-3 ">
        <Avatar alt="Remy Sharp" src={img1} />
      <Link to={"/kfc"}><h5 as>KFC</h5></Link>  
      </div>
      <div className=" d-flex m-3 ">
        <Avatar alt="Remy Sharp" src={img2} />
      <Link to={"/macdonald"}><h5 as>Macdonal's</h5></Link>  
      </div>
      
      <div className=" d-flex m-3 ">
        <Avatar alt="Remy Sharp" src={img1} />
      <Link to={"/kfc"}><h5 as>KFC</h5></Link>  
      </div>
      <div className=" d-flex m-3 ">
        <Avatar alt="Remy Sharp" src={img2} />
      <Link to={"/macdonald"}><h5 as>Macdonal's</h5></Link>  
      </div>
      
      <div className=" d-flex m-3 ">
        <Avatar alt="Remy Sharp" src={img1} />
      <Link to={"/kfc"}><h5 as>KFC</h5></Link>  
      </div>
      <div className=" d-flex m-3 ">
        <Avatar alt="Remy Sharp" src={img2} />
      <Link to={"/macdonald"}><h5 as>Macdonal's</h5></Link>  
      </div>
      
      
    </div>
  )
}

export default Restaurants
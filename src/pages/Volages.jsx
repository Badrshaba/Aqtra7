import React from "react";
import img from "../img/amrelhady.jpg";
import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";
const Volages = () => {
    
  return (
    <div>
      <div className=" d-flex m-3 ">
        <Avatar alt="Remy Sharp" src={img} />
      <Link to={"/amr"}><h5 as>amrelhady@ عمرو الهادي</h5></Link>  
      </div>
      <div className=" d-flex m-3 ">
        <Avatar alt="Remy Sharp" src={img} />
        <Link to={"/amr"}><h5 as>amrelhady@ عمرو الهادي</h5></Link>
      </div>
      <div className=" d-flex m-3 ">
        <Avatar alt="Remy Sharp" src={img} />
        <Link to={"/amr"}><h5 as>amrelhady@ عمرو الهادي</h5></Link>
      </div>
      <div className=" d-flex m-3 ">
        <Avatar alt="Remy Sharp" src={img} />
        <Link to={"/amr"}><h5 as>amrelhady@ عمرو الهادي</h5></Link>
      </div>
      <div className=" d-flex m-3 ">
        <Avatar alt="Remy Sharp" src={img} />
        <Link to={"/amr"}><h5 as>amrelhady@ عمرو الهادي</h5></Link>
      </div>
      <div className=" d-flex m-3 ">
        <Avatar alt="Remy Sharp" src={img} />
        <Link to={"/amr"}><h5 as>amrelhady@ عمرو الهادي</h5></Link>
      </div>
      <div className=" d-flex m-3 ">
        <Avatar alt="Remy Sharp" src={img} />
        <Link to={"/amr"}><h5 as>amrelhady@ عمرو الهادي</h5></Link>
      </div>
      
    </div>
  );
};

export default Volages;

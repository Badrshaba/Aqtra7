import React, { useState } from "react";
import "./pages.css"
const FirstPage = ({male,shoose,notShoose}) => {
  

  return (
    <div>
      <div className=" w-100 d-flex navbarBackground">
        <div onClick={shoose} className={male?" w-50 d-flex justify-content-center darkcolor":" w-50 d-flex justify-content-center "}> <h5>Male</h5> </div>
        <div onClick={notShoose} className={male?" w-50 d-flex justify-content-center":" w-50 d-flex justify-content-center darkcolor"}> <h5>Restaurant</h5> </div>
      </div>
    </div>
  );
};

export default FirstPage;

import React from "react";
import "../style/style.css"
import { useNavigate } from "react-router-dom";
const Home = () => {
  const move = useNavigate()
  return (
    <div>
<h2 className=" titlehome text-white text-center mt-2">Aqtra7</h2>


<div className=" d-flex mt-4 justify-content-evenly flex-wrap">
<h2 onClick={()=>move("/volages")} className=" bottonhome text-black text-center ">Vlogers</h2>
<h2 onClick={()=>move("/restaurants")} className=" bottonhome text-black text-center ">Restaurants</h2>
</div>






<p className=" text-center mt-2"> Aqtra7 's app to proposal the best food From the point of view Vlogers and Restaurants </p>

    </div>
  );
};

export default Home;

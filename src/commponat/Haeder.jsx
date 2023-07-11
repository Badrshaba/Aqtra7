import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import "./commponant.css";
import { Link, useNavigate } from "react-router-dom";
const Haeder = () => {
  const [background, setbackground] = useState(0);

const move = useNavigate()
  return (
    <div>
      <Navbar
     bg="dark" variant="dark"  expand="lg"
      >
        <Container>
          <Navbar.Brand as={Link} to={"/"} onClick={()=>setbackground(0)}>
            <h2>AQTRA7</h2>
          </Navbar.Brand>
          <Button as={Link} to={"/aboutus"}>About As</Button>
        </Container>
      </Navbar>
      {/* <div
       className=" border-bottom"
      >
        <div className=" d-flex justify-content-evenly m-0 p-0 m-auto bg-primary">
          <div
            onClick={() => {setbackground(1)
            move("/volages")}}
            className={
              background==1
                ? " w-50 d-flex justify-content-center pt-2 pb-2 divvolagers   darkcolor"
                : " w-50  d-flex justify-content-center pt-2 pb-2 divvolagers navbarBackground "
            }
          >
            <h4>Volagers</h4>
          </div>
          <div
            onClick={() => {setbackground(2)
            move("/restaurants")}}
            className={
              background==2
                ? " w-50 d-flex justify-content-center pt-2 pb-2 divvolagers  darkcolor"
                : " w-50 d-flex justify-content-center pt-2 pb-2 divvolagers navbarBackground"
            }
          >
            <h4>Restaurants</h4>
          </div>
        </div>
      </div> */}
      
 
      </div> 
    
  );
};

export default Haeder;

import React, { useState } from "react";
import FirstPage from "./FirstPage";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import bigMac from "../img/Big-Mac.jpg";
import zinder from "../img/KFC-Zinger.jpeg";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import img from "../img/amrelhady.jpg";
import img1 from "../img/KFC.png"
import img2 from "../img/MC.jpg"
import { Data } from "./Data";

const Amr = () => {
  const [datielsData]=useState(Data)
    const [male,setmale] = useState(true)
    const shoose = ()=>setmale(true)
    const notShoose = ()=>setmale(false)
  return (
    <div>
      <FirstPage male={male} shoose={shoose} notShoose={notShoose}/>
      {}
      <div className=" d-flex flex-column justify-content-center">
        <Container>
          <Row className=" justify-content-center">
            <Col xs={6} md={4}>
              <Image src={img} thumbnail />
            </Col>
          </Row>
        </Container>
        <h1 className=" text-center">Amr Elhady</h1>
      </div>
      {male?<div className=" d-flex justify-content-evenly flex-wrap">
<Card style={{ width: "18rem" }}className=" m-2" >
        <Card.Img variant="top" src={bigMac} />
        <Card.Body>
          <Card.Title>1# Bid Mac</Card.Title>
          <Card.Text>
            <span>Rating:</span><br/>
            <span>Price:</span><br/>
            <span>Ingredients:</span>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem" }}className=" m-2">
        <Card.Img variant="top" src={zinder} />
        <Card.Body>
          <Card.Title>2# Zinder</Card.Title>
          <Card.Text>
          <span>Rating:</span><br/>
            <span>Price:</span><br/>
            <span>Ingredients:</span>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem" }}className=" m-2">
        <Card.Img variant="top" src={bigMac} />
        <Card.Body>
          <Card.Title>3# Bid Mac</Card.Title>
          <Card.Text>
            <span>Rating:</span><br/>
            <span>Price:</span><br/>
            <span>Ingredients:</span>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem" }}className=" m-2">
        <Card.Img variant="top" src={zinder} />
        <Card.Body>
          <Card.Title>4# Zinder</Card.Title>
          <Card.Text>
          <span>Rating:</span><br/>
            <span>Price:</span><br/>
            <span>Ingredients:</span>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem" }}className=" m-2">
        <Card.Img variant="top" src={bigMac} />
        <Card.Body>
          <Card.Title>5# Bid Mac</Card.Title>
          <Card.Text>
            <span>Rating:</span><br/>
            <span>Price:</span><br/>
            <span>Ingredients:</span>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem" }}className=" m-2">
        <Card.Img variant="top" src={zinder} />
        <Card.Body>
          <Card.Title>6# Zinder</Card.Title>
          <Card.Text>
          <span>Rating:</span><br/>
            <span>Price:</span><br/>
            <span>Ingredients:</span>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem" }}className=" m-2">
        <Card.Img variant="top" src={bigMac} />
        <Card.Body>
          <Card.Title>7# Bid Mac</Card.Title>
          <Card.Text>
            <span>Rating:</span><br/>
            <span>Price:</span><br/>
            <span>Ingredients:</span>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem" }}className=" m-2">
        <Card.Img variant="top" src={zinder} />
        <Card.Body>
          <Card.Title>8# Zinder</Card.Title>
          <Card.Text>
          <span>Rating:</span><br/>
            <span>Price:</span><br/>
            <span>Ingredients:</span>
          </Card.Text>
        </Card.Body>
      </Card>
      

</div>:

<div className=" d-flex justify-content-evenly flex-wrap">
<Card style={{ width: "18rem" }}className=" m-2">
        <Card.Img variant="top" src={img1} />
        <Card.Body>
          <Card.Title>1# KFC</Card.Title>
          <Card.Text>
            <span>Rating:</span><br/>
            <span>Price:</span><br/>
            
          </Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem" }}className=" m-2">
        <Card.Img variant="top" src={img2} />
        <Card.Body>
          <Card.Title>2# Macdonal's</Card.Title>
          <Card.Text>
          <span>Rating:</span><br/>
            <span>Price:</span><br/>
        
          </Card.Text>
        </Card.Body>
      </Card>
      
</div>



}


    </div>
  );
};

export default Amr;

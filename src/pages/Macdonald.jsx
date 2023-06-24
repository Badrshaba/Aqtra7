import React from 'react'
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import img1 from "../img/Big-Mac.jpg"
import img from "../img/MC.jpg"
const Macdonald = () => {
  return (
     <div>
            
    <div className=" d-flex flex-column justify-content-center">
      <Container>
        <Row className=" justify-content-center">
          <Col xs={6} md={4}>
            <Image src={img} thumbnail />
          </Col>
        </Row>
      </Container>
      <h1 className=" text-center">KFC</h1>
    </div>
    <div className=" d-flex justify-content-evenly flex-wrap">
<Card style={{ width: "18rem" }}className=" m-2">
      <Card.Img variant="top" src={img1} />
      <Card.Body>
        <Card.Title>1# Big Mac</Card.Title>
        <Card.Text>
          <span>Rating:</span><br/>
          <span>Price:</span><br/>
          <span>Ingredients:</span>
          
        </Card.Text>
      </Card.Body>
    </Card>
    <Card style={{ width: "18rem" }}className=" m-2">
      <Card.Img variant="top" src={img1} />
      <Card.Body>
        <Card.Title>2# Big Mac</Card.Title>
        <Card.Text>
        <span>Rating:</span><br/>
          <span>Price:</span><br/>
          <span>Ingredients:</span>
      
        </Card.Text>
      </Card.Body>
    </Card>
    
</div>
  </div>
  )
}

export default Macdonald
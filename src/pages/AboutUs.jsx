import React from "react";
import img from "../img/bador.jpeg";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const AboutUs = () => {
  return (
    <div>
      <div>
        {" "}
        <Container>
          <Row className=" justify-content-center">
            <Col xs={6} md={4}>
              <Image src={img} thumbnail />
            </Col>
          </Row>
        </Container>
        <h2 className=" text-center mt-3">Hi i'm badr</h2>
      </div>

      <p className=" text-center">
        <span className=" fs-3 fw-bold">*</span>I am a huge fan of dining out
        and exploring different cuisines beyond the confines of my home.
        Whenever I visit a restaurant, I make it a point to have already watched
        videos by certain food vloggers that I admire. These vloggers showcase
        their culinary adventures, from food preparation to presentation, and
        share their personal experiences and opinions.
      </p>

      <p className=" text-center">
        <span className=" fs-3 fw-bold">*</span>Inspired by the concept of these
        food vloggers, I decided to embark on a unique endeavor and create my
        own website. This website curates a collection of my favorite food
        vloggers and highlights the best restaurants where one can experience
        these delectable dishes. The platform provides captivating and
        entertaining videos, along with my personal ratings and experiences for
        each restaurant.
      </p>

      <p className=" text-center">
        <span className=" fs-3 fw-bold">*</span>Through this website, I can
        share my culinary experiences with all of you and engage in discussions
        about our favorite dishes and preferred dining establishments. We can
        exchange tips, ideas, and indulge in conversations about the fascinating
        world of food that we all adore.
      </p>

      <p className=" text-center">
        <span className=" fs-3 fw-bold">*</span>So, welcome to my exclusive
        website, where you will find a delightful and immersive experience in
        exploring the realm of cooking and exciting gastronomic delights,
        accompanied by the finest food vloggers and remarkable restaurants. Join
        me and get ready for a fantastic and inspiring culinary journey!
      </p>
    </div>
  );
};

export default AboutUs;

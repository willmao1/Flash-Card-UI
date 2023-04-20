import React,  { useState } from "react";
import Button from 'react-bootstrap/Button';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Modal from 'react-bootstrap/Modal';
import cog from "../images/settings-cog.svg";
function CardModal( {show, id, handleClose, micromoment} ) {
    const Categories = {
      0: "Curiosity",
      1: "Connections"
    } 
    return(
        
        <Modal show={show === id} onHide={handleClose}>
          <Container fluid className="mt-3">
          <Row>
              <Col>
                <img src={cog} width="35" />
              </Col>
          </Row>
          <Row>
              <Col>
                <Card className="m-2 overlay-gradient">
                  <Card.Body className = "overlay-content ">
                    <Card.Title className = "fs-1 mb-4" >{micromoment.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted fs-4">Description:</Card.Subtitle>
                    <Card.Text className="mb-3">
                      {micromoment.description}
                    </Card.Text>
                    <Card.Subtitle className="mb-2 text-muted fs-4">Example:</Card.Subtitle>
                    <Card.Text className="mb-3">
                      {micromoment.example}
                    </Card.Text>
                    <Card.Subtitle className="mb-2 text-muted fs-4">Tip:</Card.Subtitle>
                    <Card.Text className="mb-3">
                      {micromoment.tip}
                    </Card.Text>
                  </Card.Body>
                  <Card.Header className="text-center">{Categories[micromoment.category]}</Card.Header>
                </Card>
              </Col>
          </Row>
          <Row>
              <Col>
                <Button onClick = {handleClose} className="float-right mb-2" >Done</Button>
              </Col>
          </Row>
          </Container>
        </Modal>
      
    )
}
export default CardModal
